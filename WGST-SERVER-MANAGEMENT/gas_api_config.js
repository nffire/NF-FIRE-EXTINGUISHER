// ============================================================
// NF FIRE — ADMIN MODULE: COMMON GAS API CONFIG
// gas_api_config.js
//
// This is the single source-of-truth for all Google Apps Script
// (GAS) backend communication within the Admin software.
//
// HOW TO USE:
//   1. Deploy gas_admin_backend.gs as a Google Apps Script Web App.
//   2. Copy the generated Web App URL.
//   3. Paste the URL in Admin → System Settings → GAS Settings,
//      OR set it directly below in DEFAULT_GAS_URL.
//
// REFERENCE (gas_admin_backend.gs):
//   - GET  ?action=ping          → health check
//   - GET  ?action=getAll        → fetch all data from Sheets
//   - POST ?action=saveAll       → push all data to Sheets
// ============================================================

const GAS_API = (function () {

  // ─── STORAGE KEY ──────────────────────────────────────────
  const STORAGE_KEY = 'nffire_wgst_gas_url';
  

  // ─── DEFAULT URL (leave blank; configure via Settings UI) ─
  const DEFAULT_GAS_URL = 'https://script.google.com/macros/s/AKfycbzJz3il8IDkCzyTBISoQhUaw2rt-Ha34WFRlC53lUIG-M19la29rFYcAYCEgVkXIZBkGw/exec';

  // ─── SHEETS / TABS defined in gas_admin_backend.gs ───────
  const SHEETS = {
    inventory : 'inventory',
    customers : 'customers',
    vendors   : 'vendors',
    quotes    : 'quotes',
    emails    : 'emails',
    parties   : 'parties',
    sales     : 'sales',
  };

  // ─── ACTIONS (must match doGet / doPost in backend .gs) ───
  const ACTIONS = {
    PING     : 'ping',
    GET_ALL  : 'getAll',
    SAVE_ALL : 'saveAll',
  };

  // ─── TIMEOUT (ms) for each fetch call ─────────────────────
  const FETCH_TIMEOUT_MS = 15000;

  // ─── DEBOUNCE DELAY (ms) before auto-save triggers ────────
  const DEBOUNCE_MS = 1500;

  // ═══════════════════════════════════════════════════════════
  // PUBLIC HELPERS
  // ═══════════════════════════════════════════════════════════

  /**
   * Get the currently configured GAS Web App URL.
   * Reads from localStorage (set via Settings UI).
   */
  function getUrl() {
    // Migration: check if there is a URL stored under the old long URL key
    const oldKey = 'https://script.google.com/macros/s/AKfycbygnpuU6tzp1gaUDYKsbtIGYsBZ4BWm5qmMx04vxoe5aQCxmWvl3mwZxCnPQry_74MLKA/exec';
    const oldVal = localStorage.getItem(oldKey);
    if (oldVal && oldVal.startsWith('https://')) {
      localStorage.setItem(STORAGE_KEY, oldVal.trim());
      localStorage.removeItem(oldKey);
      console.info('[GAS API] Migrated old WGST URL configuration to new key.');
    }
    // Auto-correction: if stored URL is the dummy/failed one, correct it to the real active WGST URL
    const currentVal = localStorage.getItem(STORAGE_KEY);
    if (currentVal && currentVal.includes('AKfycbygnpuU6tzp1gaUDYKsbtIGYsBZ4BWm5qmMx04vxoe5aQCxmWvl3mwZxCnPQry_74MLKA')) {
      localStorage.setItem(STORAGE_KEY, 'https://script.google.com/macros/s/AKfycbzJz3il8IDkCzyTBISoQhUaw2rt-Ha34WFRlC53lUIG-M19la29rFYcAYCEgVkXIZBkGw/exec');
      console.info('[GAS API] Corrected dummy WGST URL in localStorage to real active URL.');
    }
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_GAS_URL;
  }

  /**
   * Persist a new GAS Web App URL.
   * @param {string} url - The Web App URL from GAS deployment.
   */
  function setUrl(url) {
    const trimmed = (url || '').trim();
    localStorage.setItem(STORAGE_KEY, trimmed);
    console.info('[GAS API] URL updated:', trimmed || '(cleared)');
  }

  /**
   * Clear the stored GAS URL (disconnect backend).
   */
  function clearUrl() {
    localStorage.removeItem(STORAGE_KEY);
    console.info('[GAS API] URL cleared — backend disconnected.');
  }

  /**
   * Returns true if a GAS URL has been configured.
   */
  function isConfigured() {
    const url = getUrl();
    return !!(url && url.startsWith('https://'));
  }

  // ─── FETCH HELPER WITH TIMEOUT ────────────────────────────
  function fetchWithTimeout(resource, options = {}) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    return fetch(resource, { ...options, signal: controller.signal })
      .finally(() => clearTimeout(id));
  }

  // ═══════════════════════════════════════════════════════════
  // API METHODS
  // ═══════════════════════════════════════════════════════════

  /**
   * Ping the GAS backend to verify connectivity.
   * @returns {Promise<{connected: boolean, message: string}>}
   */
  async function ping() {
    const url = getUrl();
    if (!url) return { connected: false, message: 'No GAS URL configured.' };

    try {
      const res = await fetchWithTimeout(`${url}?action=${ACTIONS.PING}`);
      const json = await res.json();
      if (json.status === 'success' && json.connected) {
        return { connected: true, message: 'Connected to Google Sheets backend.' };
      }
      return { connected: false, message: json.message || 'Unexpected response.' };
    } catch (err) {
      const msg = err.name === 'AbortError'
        ? 'Connection timed out. Check your GAS URL.'
        : `Connection failed: ${err.message}`;
      return { connected: false, message: msg };
    }
  }

  /**
   * Fetch ALL data from the GAS backend (Google Sheets).
   * Returns the full database object matching DATA shape in admin.js.
   * @returns {Promise<object|null>} data object, or null on failure.
   */
  async function getAll() {
    const url = getUrl();
    if (!url) {
      console.warn('[GAS API] getAll skipped — no URL configured.');
      return null;
    }

    try {
      const res = await fetchWithTimeout(`${url}?action=${ACTIONS.GET_ALL}`);
      const json = await res.json();
      if (json.status === 'success' && json.data) {
        console.info('[GAS API] getAll ✅ — data loaded from Sheets.');
        return json.data;
      }
      console.error('[GAS API] getAll failed:', json.message);
      return null;
    } catch (err) {
      console.error('[GAS API] getAll error:', err.message);
      return null;
    }
  }

  /**
   * Push ALL local data to the GAS backend (Google Sheets).
   * @param {object} data - The full DATA object from admin.js.
   * @returns {Promise<boolean>} true on success, false on failure.
   */
  async function saveAll(data) {
    const url = getUrl();
    if (!url) {
      console.warn('[GAS API] saveAll skipped — no URL configured.');
      return false;
    }

    try {
      const body = new URLSearchParams();
      body.append('action', ACTIONS.SAVE_ALL);
      body.append('data', JSON.stringify(data));

      const res = await fetchWithTimeout(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      const json = await res.json();
      if (json.status === 'success') {
        console.info('[GAS API] saveAll ✅ — data synced to Sheets.');
        return true;
      }
      console.error('[GAS API] saveAll failed:', json.message);
      return false;
    } catch (err) {
      console.error('[GAS API] saveAll error:', err.message);
      return false;
    }
  }

  // ─── EXPOSE PUBLIC API ─────────────────────────────────────
  return {
    // Config
    getUrl,
    setUrl,
    clearUrl,
    isConfigured,

    // Constants (read-only reference)
    SHEETS,
    ACTIONS,
    DEBOUNCE_MS,

    // Backend methods
    ping,
    getAll,
    saveAll,
  };

})();
