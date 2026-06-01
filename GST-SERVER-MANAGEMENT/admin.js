// ============================================================
// NF FIRE &mdash; ADMIN DASHBOARD JAVASCRIPT
// ============================================================

// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ CONFIG Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
// GAS URL is now managed exclusively by gas_api_config.js (GAS_API module)
const CONFIG = {
  geminiKey: localStorage.getItem('geminiKey') || '',
  defaultThreshold: parseInt(localStorage.getItem('defaultThreshold')) || 10,
  gstRate: localStorage.getItem('gstRate') !== null ? parseFloat(localStorage.getItem('gstRate')) : 18,
  // gasUrl is read via GAS_API.getUrl() Ã¢â‚¬â€ do not store it here
  get gasUrl() { return GAS_API.getUrl(); },
};

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ IN-MEMORY DATA STORE ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
let DATA = {
  sales: [],
  inventory: [],
  quotes: [],
  vendors: [],
  customers: [],
  emails: [],
  parties: [],
};

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ STANDALONE DATABASE STORAGE ENGINE ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function saveLocalData() {
  localStorage.setItem('nffire_data', JSON.stringify(DATA));
  syncToBackend();
}

async function loadLocalData() {
  const cached = localStorage.getItem('nffire_data');
  if (cached) {
    try {
      DATA = JSON.parse(cached);
      // Migration for existing items Ã¢â‚¬â€œ ensure each has a gstRate field
      if (DATA.inventory) {
        DATA.inventory.forEach(p => {
          if (p.gstRate === undefined) p.gstRate = CONFIG.gstRate || 18;
        });
      }
      // Migration for multi-item sales
      if(DATA.sales) {
        DATA.sales.forEach(s => {
          if(!s.items && s.product && s.sku) {
            s.items = [{ sku: s.sku, name: s.product, qty: s.qty, unitPrice: s.unitPrice || (s.amount/s.qty) || 0 }];
          }
        });
      }
      // Migration: ensure every party has an items array
      if (DATA.parties) {
        DATA.parties.forEach(p => {
          if (!Array.isArray(p.items)) p.items = [];
        });
      }
    } catch (e) {
      console.error("Failed to parse cached local data", e);
      seedDemoData();
      saveLocalData();
    }
  } else {
    seedDemoData();
    saveLocalData();
  }

  // Live Sync on Load via GAS_API (Stale-While-Revalidate)
  if (GAS_API.isConfigured()) {
    const statusEl = document.getElementById('gasStatus');
    if (statusEl) {
      statusEl.innerHTML = `<span class="status-dot" style="background-color: #ffaa00; animation: core-pulse 1.2s infinite;"></span> Connecting...`;
      statusEl.style.borderColor = 'rgba(255,170,0,0.3)';
      statusEl.style.color = '#ffaa00';
    }
    try {
      const remoteData = await GAS_API.getAll();
      if (remoteData) {
        // Migration: ensure every party from GAS has an items array
        if (remoteData.parties) {
          remoteData.parties.forEach(p => {
            if (!Array.isArray(p.items)) p.items = [];
          });
        }
        DATA = remoteData;
        localStorage.setItem('nffire_data', JSON.stringify(DATA));

        // Re-render current page
        const activeNav = document.querySelector('.nav-item.active');
        if (activeNav) {
          switchPage(activeNav.dataset.page);
        } else {
          renderDashboard();
        }
        updateBadges();

        if (statusEl) {
          statusEl.innerHTML = `<span class="status-dot" style="background-color: var(--green);"></span> Server OK`;
          statusEl.style.borderColor = 'rgba(46, 213, 115, 0.3)';
          statusEl.style.color = 'var(--green)';
        }
      } else {
        throw new Error('GAS_API.getAll returned null');
      }
    } catch (e) {
      console.error("Backend fetch failed on load", e);
      if (statusEl) {
        statusEl.innerHTML = `<span class="status-dot" style="background-color: var(--red);"></span> Offline`;
        statusEl.style.borderColor = 'rgba(255, 71, 87, 0.3)';
        statusEl.style.color = 'var(--red)';
      }
    }
  }
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ CHARTS ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
let charts = {};

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ INIT ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
document.addEventListener('DOMContentLoaded', async () => {
  // Ã¢â€â‚¬Ã¢â€â‚¬ Show loading overlay immediately Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
  showLoadingOverlay('Initialising system...', 10);

  initTheme();
  initNavigation();
  initSidebarToggle();

  setLoadingProgress('Loading local data...', 35);
  await loadLocalData();

  setLoadingProgress('Rendering dashboard...', 60);
  loadConfig();
  renderDashboard();
  initCharts();
  updateBadges();

  setLoadingProgress('Starting services...', 85);
  initAdminChatbot();
  initDbStatusPanel();
  initNotifBell();
  setInterval(checkLowStock, 60000);

  setLoadingProgress('Ready!', 100);
  // Small delay so 100% bar is visible before hiding
  setTimeout(() => hideLoadingOverlay(), 450);
});

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ NAVIGATION ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function initNavigation() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      switchPage(item.dataset.page);
    });
  });
}

function switchPage(page) {
  document.querySelectorAll('.nav-item').forEach(i => i.classList.toggle('active', i.dataset.page === page));
  document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p.id === `page-${page}`));
  const titles = {
    dashboard:'Dashboard', analytics:'Analytics', sales:'Sales Pipeline',
    inventory:'Inventory', quotes:'Quotes & Orders', vendors:'Vendors',
    parties:'Parties', compliance:'Fire Compliance',
    customers:'Customers', settings:'System Settings', reports:'Items Reports',
  };
  document.getElementById('pageTitle').textContent = titles[page] || page;
  document.getElementById('breadcrumbPage').textContent = titles[page] || page;
  // Lazy render pages
  if (page === 'sales') renderSalesPipeline();
  if (page === 'inventory') renderInventoryTable();
  if (page === 'quotes') renderQuotes();
  if (page === 'vendors') renderVendors();
  if (page === 'parties') renderParties();
  if (page === 'customers') renderCustomers();

  if (page === 'compliance') renderCompliance();
  if (page === 'analytics') renderAnalyticsCharts();
  if (page === 'settings') loadSettingsUI();
  if (page === 'reports') updateReportFilters();
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ DEMO DATA SEED ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function seedDemoData() {
  const products = [
    { sku:'FE-001', name:'ABC Dry Chemical 4kg', category:'Extinguisher', fireClass:'A,B,C', stock:45, threshold:10, price:1850, supplier:'SafetyFirst Ltd', gstRate:18 },
    { sku:'FE-002', name:'COÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡ Extinguisher 5kg', category:'Extinguisher', fireClass:'B,C', stock:8, threshold:15, price:3200, supplier:'FireTech India', gstRate:18 },
    { sku:'FE-003', name:'Foam Extinguisher 9L', category:'Extinguisher', fireClass:'A,B', stock:0, threshold:10, price:2100, supplier:'SafetyFirst Ltd', gstRate:18 },
    { sku:'FE-004', name:'Wet Chemical 6L', category:'Extinguisher', fireClass:'F,K', stock:22, threshold:8, price:4500, supplier:'KitchenGuard', gstRate:18 },
    { sku:'FE-005', name:'D-Class Metal Fire Kit', category:'Extinguisher', fireClass:'D', stock:5, threshold:5, price:12000, supplier:'SpecialFire Co', gstRate:18 },
    { sku:'SS-001', name:'FM-200 Suppression Panel', category:'Suppression', fireClass:'A,B,C', stock:12, threshold:3, price:85000, supplier:'FireTech India', gstRate:18 },
    { sku:'SS-002', name:'Sprinkler Head Set (24pcs)', category:'Suppression', fireClass:'A', stock:34, threshold:10, price:6800, supplier:'AquaFire', gstRate:18 },
    { sku:'DE-001', name:'Photoelectric Smoke Detector', category:'Detection', fireClass:'A', stock:60, threshold:20, price:950, supplier:'AlertSystems', gstRate:18 },
    { sku:'DE-002', name:'Heat Detector 90Ãƒâ€šÃ‚Â°C', category:'Detection', fireClass:'A,B', stock:3, threshold:15, price:1200, supplier:'AlertSystems', gstRate:18 },
    { sku:'PP-001', name:'Fire Proximity Suit', category:'PPE', fireClass:'A,B,C,D,F', stock:18, threshold:5, price:45000, supplier:'SafetyFirst Ltd', gstRate:18 },
    { sku:'PP-002', name:'Firefighter Helmet', category:'PPE', fireClass:'A,B,C', stock:25, threshold:10, price:8500, supplier:'FireTech India', gstRate:18 },
    { sku:'AC-001', name:'Fire Safety Signage Set', category:'Accessories', fireClass:'', stock:200, threshold:50, price:450, supplier:'SignCraft', gstRate:18 },
  ];
  const statuses = ['Pending','Confirmed','Shipped','Cancelled'];
  const customers = [
    { name:'Raj Enterprises', email:'raj@enterprises.in', phone:'9876543210' },
    { name:'Metro Mall Pvt Ltd', email:'safety@metromall.in', phone:'9123456789' },
    { name:'Coastal Hotels', email:'ops@coastalhotels.com', phone:'9988776655' },
    { name:'TechPark Solutions', email:'admin@techpark.io', phone:'9001122334' },
    { name:'Sunrise Hospitals', email:'purchase@sunrise.health', phone:'9445566778' },
  ];

  DATA.inventory = products.map(p => ({ ...p, lastUpdated: randomDate(30), value: p.stock * p.price }));

  DATA.customers = customers.map((c,i) => ({
    ...c, id:`CUST-${String(i+1).padStart(3,'0')}`,
    orders: Math.floor(Math.random()*10)+1,
    totalSpent: Math.floor(Math.random()*200000)+5000,
    lastOrder: randomDate(60),
  }));

  const saleProducts = products.slice(0,6);
  DATA.sales = Array.from({length:18}, (_,i) => {
    const cust = customers[Math.floor(Math.random()*customers.length)];
    const status = statuses[Math.floor(Math.random()*statuses.length)];
    const itemsCount = Math.floor(Math.random()*3)+1;
    const items = [];
    let amount = 0;
    for(let j=0; j<itemsCount; j++) {
      const prod = saleProducts[Math.floor(Math.random()*saleProducts.length)];
      if(!items.find(x => x.sku === prod.sku)) {
        const qty = Math.floor(Math.random()*10)+1;
        items.push({ sku: prod.sku, name: prod.name, qty, unitPrice: prod.price, gstRate: prod.gstRate });
        amount += (qty * prod.price);
      }
    }
    if(items.length === 0) {
      const prod = saleProducts[0];
      items.push({ sku: prod.sku, name: prod.name, qty: 1, unitPrice: prod.price, gstRate: prod.gstRate });
      amount += prod.price;
    }
    return {
      id:`ORD-${String(1000+i+1)}`,
      customer: cust.name, email: cust.email,
      items, amount,
      status, date: randomDate(30),
      notes:'',
    };
  });

  DATA.quotes = Array.from({length:8}, (_,i) => {
    const cust = customers[Math.floor(Math.random()*customers.length)];
    const items = Math.floor(Math.random()*4)+1;
    const total = Math.floor(Math.random()*150000)+5000;
    const sts = ['Draft','Sent','Accepted','Rejected'][Math.floor(Math.random()*4)];
    return {
      id:`QT-${String(2000+i+1)}`,
      customer: cust.name, email: cust.email,
      items, total, status: sts,
      created: randomDate(15),
    };
  });

  DATA.vendors = [
    { id:'V001', name:'SafetyFirst Ltd', emoji:'ÃƒÂ°Ã…Â¸Ã‚Â§Ã‚Â¯', contact:'Arjun Shah', email:'arjun@safetyfirst.in', phone:'9800000001', products:'ABC Extinguishers, PPE, Foam', lastRestock: randomDate(7), rating:4.8 },
    { id:'V002', name:'FireTech India', emoji:'ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂÃ‚Â¥', contact:'Priya Nair', email:'priya@firetech.in', phone:'9800000002', products:'COÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡, FM-200, COÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡ Cylinders', lastRestock: randomDate(3), rating:4.5 },
    { id:'V003', name:'AlertSystems', emoji:'ÃƒÂ°Ã…Â¸Ã…Â¡Ã‚Â¨', contact:'Kiran Rao', email:'kiran@alertsys.in', phone:'9800000003', products:'Smoke Detectors, Heat Detectors', lastRestock: randomDate(5), rating:4.2 },
    { id:'V004', name:'KitchenGuard', emoji:'ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â³', contact:'Meena Pillai', email:'meena@kitchenguard.in', phone:'9800000004', products:'Wet Chemical, Class F Systems', lastRestock: randomDate(10), rating:4.7 },
    { id:'V005', name:'AquaFire', emoji:'ÃƒÂ°Ã…Â¸Ã¢â‚¬â„¢Ã‚Â§', contact:'Suresh Kumar', email:'suresh@aquafire.in', phone:'9800000005', products:'Sprinklers, Water Mist Systems', lastRestock: randomDate(2), rating:4.9 },
  ];

  DATA.emails = Array.from({length:12}, (_,i) => {
    const types = ['Order Confirmation','Quote Sent','Low Stock Alert','Restock Notification','Welcome Email'];
    const type = types[Math.floor(Math.random()*types.length)];
    const cust = customers[Math.floor(Math.random()*customers.length)];
    return {
      timestamp: randomDate(14),
      to: cust.email, subject: type + ' - NF Fire',
      type, status: Math.random()>.1 ? 'Delivered' : 'Failed',
    };
  });

  DATA.parties = [
    {
      name: 'Alpha Traders',
      gstin: '27AAAAA1111A1Z1',
      gstType: 'Regular',
      state: 'Maharashtra',
      phone: '9876543211',
      email: 'info@alphatraders.in',
      billingAddress: '102, Industrial Plaza, Andheri East, Mumbai, Maharashtra 400069',
      shippingAddresses: [
        '102, Industrial Plaza, Andheri East, Mumbai, Maharashtra 400069',
        'Warehouse B, Plot 45, MIDC, Thane, Maharashtra 400604'
      ]
    },
    {
      name: 'Beta Industries',
      gstin: '24BBBBB2222B2Z2',
      gstType: 'Regular',
      state: 'Gujarat',
      phone: '9876543212',
      email: 'supply@betaind.com',
      billingAddress: 'Plot 12, GIDC Estate, Ankleshwar, Gujarat 393002',
      shippingAddresses: [
        'Plot 12, GIDC Estate, Ankleshwar, Gujarat 393002'
      ]
    },
    {
      name: 'Gamma Enterprises',
      gstin: '07CCCCC3333C3Z3',
      gstType: 'Composition',
      state: 'Delhi',
      phone: '9876543213',
      email: 'sales@gammaent.in',
      billingAddress: 'Shop No. 4, Chawri Bazar, New Delhi 110006',
      shippingAddresses: [
        'Shop No. 4, Chawri Bazar, New Delhi 110006'
      ]
    }
  ];
}

function randomDate(daysBack) {
  const d = new Date();
  d.setDate(d.getDate() - Math.floor(Math.random() * daysBack));
  return d.toISOString().split('T')[0];
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ DASHBOARD ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function renderDashboard() {
  // KPIs
  const totalRevenue = DATA.sales.filter(s=>s.status!=='Cancelled').reduce((a,b)=>a+b.amount,0);
  const totalOrders = DATA.sales.length;
  const lowStock = DATA.inventory.filter(i=>i.stock>0&&i.stock<=i.threshold).length;
  const outOfStock = DATA.inventory.filter(i=>i.stock===0).length;
  const pending = DATA.quotes.filter(q=>q.status==='Draft'||q.status==='Sent').length;

  animateNumber('kpiRevenue', 0, totalRevenue, v=>'&#8377;'+formatNum(Math.round(v)));
  animateNumber('kpiOrders', 0, totalOrders, v=>Math.round(v));
  animateNumber('kpiInventory', 0, DATA.inventory.length, v=>Math.round(v));
  animateNumber('kpiCustomers', 0, DATA.customers.length, v=>Math.round(v));
  animateNumber('kpiPending', 0, pending, v=>Math.round(v));

  document.getElementById('kpiRevenueChange').textContent = `+12.4% this month`;
  document.getElementById('kpiLowStock').textContent = `${lowStock} low Ãƒâ€šÃ‚Â· ${outOfStock} out of stock`;
  document.getElementById('kpiLowStock').className = `kpi-change ${outOfStock>0?'danger':''}`;
  document.getElementById('kpiOrdersChange').textContent = `${DATA.sales.filter(s=>s.date===new Date().toISOString().split('T')[0]).length} today`;
  document.getElementById('kpiCustomersChange').textContent = `+2 new today`;

  // Recent Sales Table
  const tbody = document.getElementById('recentSalesBody');
  const recent = [...DATA.sales].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,5);
  tbody.innerHTML = recent.map(s=>`
    <tr>
      <td><code style="color:var(--accent2)">${s.id}</code></td>
      <td>${s.customer}</td>
      <td>${s.items.map(x=>x.name).join(', ').substring(0,22)}ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦</td>
      <td style="font-weight:700;color:var(--accent)">&#8377;${formatNum(s.amount)}</td>
      <td><span class="badge-status badge-${s.status.toLowerCase()}">${s.status}</span></td>
    </tr>`).join('');

  // Low Stock
  const lowItems = DATA.inventory.filter(i=>i.stock<=i.threshold).sort((a,b)=>a.stock-b.stock).slice(0,6);
  document.getElementById('lowStockList').innerHTML = lowItems.length ? lowItems.map(i=>`
    <div class="alert-item ${i.stock===0?'critical':''}">
      <div>
        <div class="alert-item-name">${i.name}</div>
        <div class="alert-item-stock">${i.stock===0?'OUT OF STOCK':`${i.stock} / ${i.threshold} min`} Ãƒâ€šÃ‚Â· ${i.sku}</div>
      </div>
      <button class="alert-item-action" onclick="openRestockModal('${i.sku}')">Restock</button>
    </div>`).join('') : '<div class="empty-state">All items sufficiently stocked</div>';
}

function updateBadges() {
  const pending = DATA.sales.filter(s=>s.status==='Pending').length;
  const lowStock = DATA.inventory.filter(i=>i.stock<=i.threshold).length;
  document.getElementById('salesBadge').textContent = pending;
  document.getElementById('invBadge').textContent = lowStock;

  // Count all alerts for notification bell
  const today = new Date(); today.setHours(0,0,0,0);
  const outOfStock = DATA.inventory.filter(i=>i.stock===0).length;
  const expiredItems = (DATA.parties||[]).reduce((count, p) => {
    return count + (p.items||[]).filter(item => {
      if (!item.nextDurationDate) return false;
      return new Date(item.nextDurationDate) < today;
    }).length;
  }, 0);
  const totalAlerts = (lowStock > 0 ? 1 : 0) + (outOfStock > 0 ? 1 : 0) + (pending > 0 ? 1 : 0) + (expiredItems > 0 ? 1 : 0);

  const dot = document.getElementById('notifDot');
  const count = document.getElementById('notifCount');
  if (totalAlerts > 0) {
    dot.classList.add('active');
    if (count) { count.textContent = totalAlerts; count.style.display = 'flex'; }
  } else {
    dot.classList.remove('active');
    if (count) count.style.display = 'none';
  }
}

// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ NOTIFICATION BELL Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
function isMobile() {
  return window.innerWidth <= 480;
}

function initNotifBell() {
  const bell = document.getElementById('notifBell');
  if (!bell) return;


  bell.addEventListener('click', (e) => {
    e.stopPropagation();
    const panel = document.getElementById('notifPanel');
    if (!panel) return;
    const isOpen = panel.classList.contains('open') || panel.classList.contains('mobile-open');
    if (isOpen) {
      panel.classList.remove('open');
      panel.classList.remove('mobile-open');
    } else {
      buildNotifPanel();
      if (isMobile()) {
        panel.classList.add('mobile-open');
      } else {
        panel.classList.add('open');
      }
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    const panel = document.getElementById('notifPanel');
    const bell = document.getElementById('notifBell');
    if (panel && !panel.contains(e.target) && !bell.contains(e.target)) {
      panel.classList.remove('open');
      panel.classList.remove('mobile-open');
    }
  });
}

function buildNotifPanel() {
  var panel = document.getElementById('notifPanel');
  if (!panel) return;

  var today = new Date(); today.setHours(0,0,0,0);
  var alerts = [];

  // Out-of-stock items
  var oos = DATA.inventory.filter(function(i){ return i.stock === 0; });
  oos.forEach(function(i){ alerts.push({ type:'danger', icon:'&#128680;', title:'Out of Stock', msg: i.name + ' (' + i.sku + ')' }); });

  // Low-stock items (but not zero)
  var low = DATA.inventory.filter(function(i){ return i.stock > 0 && i.stock <= i.threshold; });
  low.forEach(function(i){ alerts.push({ type:'warning', icon:'&#9888;', title:'Low Stock', msg: i.name + ' &mdash; ' + i.stock + ' left (min ' + i.threshold + ')' }); });

  // Pending sales orders
  var pending = DATA.sales.filter(function(s){ return s.status === 'Pending'; });
  pending.forEach(function(s){ alerts.push({ type:'info', icon:'&#128230;', title:'Pending Order', msg: s.id + ' &middot; ' + s.customer + ' &middot; &#8377;' + formatNum(s.amount) }); });

  // Expired party items
  (DATA.parties||[]).forEach(function(p) {
    (p.items||[]).forEach(function(item) {
      if (item.nextDurationDate && new Date(item.nextDurationDate) < today) {
        alerts.push({ type:'danger', icon:'&#128197;', title:'Item Expired', msg: item.name + ' (' + p.name + ') &mdash; Due: ' + item.nextDurationDate });
      }
    });
  });

  // Due-soon party items (within 30 days); 1 day = due tomorrow
  (DATA.parties||[]).forEach(function(p) {
    (p.items||[]).forEach(function(item) {
      if (item.nextDurationDate) {
        var d = new Date(item.nextDurationDate);
        var daysLeft = Math.ceil((d - today) / 86400000);
        if (daysLeft === 1) {
          alerts.push({ type:'warning', icon:'&#9200;', title:'Due Tomorrow', msg: item.name + ' (' + p.name + ') &mdash; due tomorrow!' });
        } else if (daysLeft > 1 && daysLeft <= 30) {
          alerts.push({ type:'warning', icon:'&#9200;', title:'Due Soon', msg: item.name + ' (' + p.name + ') &mdash; ' + daysLeft + ' days left' });
        }
      }
    });
  });

  function attachClose() {
    var btn = document.getElementById('notifCloseBtn');
    if (!btn) return;
    btn.addEventListener('click', function() {
      panel.classList.remove('open');
      panel.classList.remove('mobile-open');
      var bell = document.getElementById('notifBell');
      if (bell) bell.setAttribute('aria-expanded', 'false');
    });
  }

  if (alerts.length === 0) {
    panel.innerHTML =
      '<div class="notif-header">'
      + '<span class="notif-title">&#128276; Notifications</span>'
      + '<button id="notifCloseBtn" aria-label="Close notifications" style="margin-left:auto">&#10005;</button>'
      + '</div>'
      + '<div class="notif-empty"><div style="font-size:2rem">&#9989;</div>All clear!<br>No active alerts.</div>';
    attachClose();
    return;
  }

  var colorMap = { danger:'var(--red)', warning:'var(--yellow)', info:'var(--accent2)' };
  var bgMap = { danger:'rgba(255,71,87,0.08)', warning:'rgba(255,193,7,0.08)', info:'rgba(100,181,246,0.08)' };

  var itemsHtml = alerts.map(function(a) {
    return '<div class="notif-item" style="border-left-color:' + colorMap[a.type] + ';background:' + bgMap[a.type] + '">'
      + '<span class="notif-item-icon">' + a.icon + '</span>'
      + '<div class="notif-item-body">'
      + '<div class="notif-item-title" style="color:' + colorMap[a.type] + '">' + a.title + '</div>'
      + '<div class="notif-item-msg">' + a.msg + '</div>'
      + '</div></div>';
  }).join('');

  panel.innerHTML =
    '<div class="notif-header">'
    + '<span class="notif-title">&#128276; Notifications</span>'
    + '<span class="notif-header-count">' + alerts.length + '</span>'
    + '<button class="notif-clear" onclick="clearAllNotifications()">Clear All</button>'
    + '<button id="notifCloseBtn" aria-label="Close notifications" style="margin-left:auto">&#10005;</button>'
    + '</div>'
    + '<div class="notif-list">' + itemsHtml + '</div>';

  attachClose();
}

function clearAllNotifications() {
  var panel = document.getElementById('notifPanel');
  if (!panel) return;
  var dot = document.querySelector('.notif-dot');
  if (dot) dot.classList.remove('active');
  var countEl = document.querySelector('.notif-count-badge');
  if (countEl) { countEl.style.display = 'none'; countEl.textContent = '0'; }
  panel.innerHTML =
    '<div class="notif-header">'
    + '<span class="notif-title">&#128276; Notifications</span>'
    + '<button id="notifCloseBtn" aria-label="Close notifications" style="margin-left:auto">&#10005;</button>'
    + '</div>'
    + '<div class="notif-empty"><div style="font-size:2rem">&#9989;</div>All clear!<br>No active alerts.</div>';
  document.getElementById('notifCloseBtn').addEventListener('click', function() {
    panel.classList.remove('open');
    panel.classList.remove('mobile-open');
    var bell = document.getElementById('notifBell');
    if (bell) bell.setAttribute('aria-expanded', 'false');
  });
}

// ─── CHARTS ─────────────────────────────────────────────────────────
function initCharts() {
  Chart.defaults.color = '#8892b0';
  Chart.defaults.borderColor = 'rgba(255,255,255,0.06)';

  // Revenue Trend
  const labels7 = Array.from({length:7},(_,i)=>{const d=new Date();d.setDate(d.getDate()-6+i);return d.toLocaleDateString('en',{weekday:'short'});});
  const revenue7 = [82000,120000,95000,145000,108000,178000,165000];
  charts.revenue = new Chart(document.getElementById('revenueChart'), {
    type:'line',
    data:{
      labels:labels7,
      datasets:[{
        label:'Revenue (&#8377;)',data:revenue7,
        borderColor:'#6c63ff',backgroundColor:'rgba(108,99,255,.12)',
        tension:.4,fill:true,pointBackgroundColor:'#6c63ff',pointRadius:4,
      }]
    },
    options:{responsive:true,plugins:{legend:{display:false}},scales:{
      x:{grid:{color:'rgba(255,255,255,.04)'}},
      y:{grid:{color:'rgba(255,255,255,.04)'},ticks:{callback:v=>String.fromCharCode(8377)+formatNum(v)}},
    }},
  });

  // Category Donut
  const cats = {};
  DATA.sales.forEach(s=>{
    s.items.forEach(si => {
      const item=DATA.inventory.find(i=>i.sku===si.sku);
      if(item){cats[item.category]=(cats[item.category]||0)+si.qty;}
    });
  });
  charts.category = new Chart(document.getElementById('categoryChart'), {
    type:'doughnut',
    data:{
      labels:Object.keys(cats),
      datasets:[{data:Object.values(cats),backgroundColor:['#6c63ff','#ff6b35','#00d4aa','#ffa502','#f093fb'],borderWidth:0,hoverOffset:6}]
    },
    options:{responsive:true,plugins:{legend:{position:'bottom',labels:{padding:12,font:{size:11}}}}},
  });


}

function setChartPeriod(period, btn) {
  document.querySelectorAll('.chart-actions .chip').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  let labels, data;
  if(period==='7d'){
    labels=Array.from({length:7},(_,i)=>{const d=new Date();d.setDate(d.getDate()-6+i);return d.toLocaleDateString('en',{weekday:'short'});});
    data=[82000,120000,95000,145000,108000,178000,165000];
  } else if(period==='30d'){
    labels=Array.from({length:30},(_,i)=>i+1+' May');
    data=Array.from({length:30},()=>Math.floor(Math.random()*200000)+50000);
  } else {
    labels=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'];
    data=[1200000,980000,1500000,1100000,1800000,1400000,2100000,1700000,1950000];
  }
  charts.revenue.data.labels = labels;
  charts.revenue.data.datasets[0].data = data;
  charts.revenue.update();
}

function renderAnalyticsCharts() {
  setTimeout(()=>{
    if(!charts.monthlyRevenue) {
      charts.monthlyRevenue = new Chart(document.getElementById('monthlyRevenueChart'),{
        type:'bar',
        data:{labels:['Jan','Feb','Mar','Apr','May','Jun'],
          datasets:[{label:'Revenue',data:[820000,1100000,950000,1450000,1080000,1780000],backgroundColor:'rgba(108,99,255,.7)',borderRadius:6}]},
        options:{responsive:true,plugins:{legend:{display:false}},scales:{y:{ticks:{callback:v=>String.fromCharCode(8377)+formatNum(v)}}}},
      });
    }
    if(!charts.topProducts) {
      const topProds = DATA.inventory.map(i=>({
        ...i,
        sold: DATA.sales.reduce((acc, s) => {
          const match = s.items.find(si => si.sku === i.sku);
          return acc + (match ? match.qty : 0);
        }, 0)
      })).sort((a,b)=>b.sold-a.sold).slice(0,5);
      charts.topProducts = new Chart(document.getElementById('topProductsChart'),{
        type:'bar',
        data:{labels:topProds.map(p=>p.name.substring(0,16)+'ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦'),
          datasets:[{label:'Units Sold',data:topProds.map(p=>p.sold),backgroundColor:'rgba(0,212,170,.6)',borderRadius:6}]},
        options:{responsive:true,indexAxis:'y',plugins:{legend:{display:false}}},
      });
    }
    if(!charts.turnover) {
      charts.turnover = new Chart(document.getElementById('turnoverChart'),{
        type:'line',
        data:{labels:['Week 1','Week 2','Week 3','Week 4'],
          datasets:[{label:'Turnover Rate',data:[3.2,4.1,3.8,5.0],borderColor:'#ffa502',backgroundColor:'rgba(255,165,2,.1)',tension:.4,fill:true}]},
        options:{responsive:true,plugins:{legend:{display:false}}},
      });
    }
    if(!charts.acquisition) {
      charts.acquisition = new Chart(document.getElementById('acquisitionChart'),{
        type:'line',
        data:{labels:['Jan','Feb','Mar','Apr','May','Jun'],
          datasets:[{label:'New Customers',data:[3,5,4,8,6,9],borderColor:'#f093fb',backgroundColor:'rgba(240,147,251,.1)',tension:.4,fill:true,pointRadius:5}]},
        options:{responsive:true,plugins:{legend:{display:false}}},
      });
    }
  }, 200);
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ SALES PIPELINE ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function renderSalesPipeline() {
  ['Pending','Confirmed','Shipped','Cancelled'].forEach(status=>{
    const key = status.toLowerCase();
    const items = DATA.sales.filter(s=>s.status===status);
    document.getElementById(`cnt-${key}`).textContent = items.length;
    document.getElementById(`cards-${key}`).innerHTML = items.map(s=>`
      <div class="sale-card" onclick="viewSaleDetail('${s.id}')">
        <div class="sale-card-id">${s.id} Ãƒâ€šÃ‚Â· ${s.date}</div>
        <div class="sale-card-customer">${s.customer}</div>
        <div class="sale-card-product">${s.items.map(i=>i.name).join(', ')} &times; ${s.items.reduce((a,b)=>a+b.qty,0)}</div>
        <div class="sale-card-amount">&#8377;${formatNum(s.amount)}</div>
        <div class="sale-card-actions">
          ${status==='Pending'?`<button class="sale-action-btn" onclick="event.stopPropagation();moveSale('${s.id}','Confirmed')">&#10003; Confirm</button>`:''}
          ${status==='Confirmed'?`<button class="sale-action-btn" onclick="event.stopPropagation();moveSale('${s.id}','Shipped')">&#128230; Ship</button>`:''}
          <button class="sale-action-btn danger" onclick="event.stopPropagation();moveSale('${s.id}','Cancelled')">&#10005; Cancel</button>
          <button class="sale-action-btn" onclick="event.stopPropagation();sendConfirmEmail('${s.id}')">&#9993;</button>
        </div>
      </div>`).join('') || '<div style="color:var(--text-muted);font-size:.75rem;padding:.5rem">No items</div>';
  });

  const clearBtn = document.getElementById('btn-clear-cancelled');
  if (clearBtn) {
    const hasCancelled = DATA.sales.some(s => s.status === 'Cancelled');
    clearBtn.style.display = hasCancelled ? 'inline-block' : 'none';
  }
}

function clearCancelledHistory() {
  const cancelledCount = DATA.sales.filter(s => s.status === 'Cancelled').length;
  if (cancelledCount === 0) return;
  if (confirm(`Are you sure you want to permanently clear all ${cancelledCount} cancelled orders from history?`)) {
    DATA.sales = DATA.sales.filter(s => s.status !== 'Cancelled');
    renderSalesPipeline();
    renderDashboard();
    updateBadges();
    toast(`Successfully cleared ${cancelledCount} cancelled order(s) from history.`, 'success');
    saveLocalData();
  }
}

function moveSale(id, newStatus) {
  const sale = DATA.sales.find(s=>s.id===id);
  if(!sale) return;
  sale.status = newStatus;
  renderSalesPipeline();
  updateBadges();
  toast(`Order ${id} moved to ${newStatus}`, 'success');
  if(newStatus==='Confirmed') sendConfirmEmail(id);
  saveLocalData();
}

function viewSaleDetail(id) {
  const s = DATA.sales.find(x=>x.id===id);
  if(!s) return;
  showModal(`
    <div class="modal-title">Order Details &mdash; ${s.id}</div>
    <div class="form-group"><label>Customer</label><input value="${s.customer}" readonly/></div>
    <div class="form-group">
      <label>Email</label>
      <div style="display:flex;gap:.5rem">
        <input value="${s.email}" readonly style="flex:1"/>
        <button class="btn-primary" style="padding:0 1rem;font-size:.75rem;height:38px;border-radius:8px" onclick="sendConfirmEmail('${s.id}')">&#9993;</button>
      </div>
    </div>
    <div class="form-group"><label>Products</label><textarea readonly rows="3">${s.items.map(i=>`${i.name} (x${i.qty})`).join('\n')}</textarea></div>
    <div class="form-group"><label>Total Amount</label><input value="&#8377;${formatNum(s.amount)}" readonly/></div>
    <div class="form-group"><label>Status</label>
      <select id="modalStatus">
        ${['Pending','Confirmed','Shipped','Cancelled'].map(st=>`<option ${st===s.status?'selected':''}>${st}</option>`).join('')}
      </select>
    </div>
    <div class="form-group"><label>Notes</label><textarea rows="2">${s.notes||''}</textarea></div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal(null)">Close</button>
      <button class="btn-secondary" onclick="printInvoice('${s.id}')">Ã°Å¸â€“Â¨Ã¯Â¸Â Print Bill</button>
      <button class="btn-primary" onclick="moveSale('${s.id}',document.getElementById('modalStatus').value);closeModal(null)">Update Status</button>
    </div>
  `);
}

function numberToWords(n) {
  var a=['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  var b=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  function w(x) {
    if(x<20) return a[x];
    if(x<100) return b[Math.floor(x/10)]+(x%10?' '+a[x%10]:'');
    if(x<1000) return a[Math.floor(x/100)]+' hundred'+(x%100?' '+w(x%100):'');
    if(x<100000) return w(Math.floor(x/1000))+' thousand'+(x%1000?' '+w(x%1000):'');
    if(x<10000000) return w(Math.floor(x/100000))+' lakh'+(x%100000?' '+w(x%100000):'');
    return w(Math.floor(x/10000000))+' crore'+(x%10000000?' '+w(x%10000000):'');
  }
  var r=Math.floor(n), p=Math.round((n-r)*100);
  var s=w(r)+' Rupees'+(p>0?' and '+w(p)+' Paise':'')+' only';
  return s.charAt(0).toUpperCase()+s.slice(1);
}

function printInvoice(id) {
  var s = DATA.sales.find(function(x){return x.id===id;});
  if(!s) return;
  var itemRows='', subtotal=0, totalGst=0, totalQty=0, rn=1;
  s.items.forEach(function(i){
    var inv=DATA.inventory.find(function(p){return p.sku===i.sku;});
    var hsn=inv?(inv.hsn||''):'';
    var unit=inv?(inv.unit||'Nos'):'Nos';
    var it=i.qty*i.unitPrice;
    var igr=i.gstRate!==undefined?i.gstRate:(CONFIG.gstRate||18);
    var ig=it*(igr/100);
    subtotal+=it; totalGst+=ig; totalQty+=i.qty;
    itemRows+='<tr>'
      +'<td style="text-align:center;padding:8px 6px;">'+rn+'</td>'
      +'<td style="padding:8px 6px;font-weight:600;">'+i.name+'</td>'
      +'<td style="text-align:center;padding:8px 6px;">'+hsn+'</td>'
      +'<td style="text-align:center;padding:8px 6px;">'+i.qty+'</td>'
      +'<td style="text-align:center;padding:8px 6px;">'+unit+'</td>'
      +'<td style="text-align:right;padding:8px 6px;">&#8377; '+formatNum(i.unitPrice)+'</td>'
      +'<td style="text-align:center;padding:8px 6px;">'+igr+'%</td>'
      +'<td style="text-align:right;padding:8px 6px;">&#8377; '+formatNum(it)+'</td>'
      +'</tr>';
    rn++;
  });
  var cgst = totalGst / 2;
  var sgst = totalGst / 2;
  var grand=subtotal+totalGst;
  var words=numberToWords(Math.round(grand));
  var logo='../Logo.jpg';
  var css='@page{size:A4 portrait;margin:10mm;}'
    +'*{box-sizing:border-box;margin:0;padding:0;}'
    +'body{font-family:Arial,sans-serif;font-size:10.5px;color:#111;background:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact;}'
    +'.page{width:100%;max-width:780px;margin:0 auto;padding:10px 14px;}'
    +'.top-label{text-align:right;font-size:9px;color:#555;margin-bottom:5px;letter-spacing:1px;}'
    +'.hdr{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #7c3aed;padding-bottom:8px;margin-bottom:8px;}'
    +'.co-name{font-size:14px;font-weight:800;color:#111;line-height:1.2;}'
    +'.co-info{font-size:10px;color:#333;line-height:1.65;margin-top:4px;}'
    +'.hl{color:#7c3aed;font-weight:700;}'
    +'.logo-box img{height:58px;max-width:75px;object-fit:contain;}'
    +'.inv-title{text-align:center;font-size:16px;font-weight:700;color:#7c3aed;padding:6px 0;border-bottom:1px solid #e2e8f0;margin-bottom:8px;}'
    +'.meta{display:flex;justify-content:space-between;margin-bottom:8px;}'
    +'.bt-label{font-weight:700;margin-bottom:2px;font-size:10.5px;}'
    +'.bt-name{font-size:12px;font-weight:700;}'
    +'.im{text-align:right;font-size:10.5px;line-height:1.7;}'
    +'table{width:100%;border-collapse:collapse;margin-bottom:0;}'
    +'thead tr{background:#7c3aed;color:#fff;}'
    +'thead th{padding:6px 5px;font-size:10px;font-weight:600;}'
    +'tbody tr{border-bottom:1px solid #e2e8f0;}'
    +'tbody tr:nth-child(even){background:#fafafa;}'
    +'tbody td{padding:5px 5px;font-size:10.5px;}'
    +'tfoot tr{background:#f1f5f9;font-weight:700;}'
    +'tfoot td{padding:6px 5px;font-size:10.5px;}'
    +'.sum{display:flex;justify-content:space-between;align-items:flex-start;margin-top:10px;border-top:1px solid #e2e8f0;padding-top:8px;gap:12px;}'
    +'.aw .aw-lbl{font-weight:700;margin-bottom:3px;font-size:10.5px;}'
    +'.aw .aw-val{font-style:italic;color:#333;font-size:10px;}'
    +'.tc{font-size:10px;margin-top:8px;}'
    +'.tc .tc-lbl{font-weight:700;margin-bottom:2px;}'
    +'.tc ol{padding-left:12px;line-height:1.8;}'
    +'.tt{border:1px solid #e2e8f0;border-collapse:collapse;min-width:210px;}'
    +'.tt td{padding:5px 8px;border-bottom:1px solid #e2e8f0;font-size:10.5px;}'
    +'.tt td:last-child{text-align:right;}'
    +'.tt tr.hi td{background:#7c3aed;color:#fff;font-weight:700;}'
    +'.ftr{display:flex;justify-content:space-between;align-items:flex-end;margin-top:12px;border-top:1px solid #e2e8f0;padding-top:10px;}'
    +'.bd{font-size:10px;line-height:1.8;}'
    +'.bd .bd-title{font-weight:700;font-size:10.5px;margin-bottom:3px;}'
    +'.sb{text-align:right;font-size:10px;}'
    +'.sb .for-co{margin-bottom:36px;color:#444;}'
    +'.sb .sign{font-weight:700;border-top:1px solid #333;padding-top:3px;display:inline-block;}'
    +'@media print{body{padding:0;}.page{padding:0;max-width:100%;}@page{size:A4 portrait;margin:10mm;}}';

  var html='<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Tax Invoice - '+s.id+'</title>'
    +'<style>'+css+'</style></head><body><div class="page">'
    +'<div class="top-label">ORIGINAL FOR RECIPIENT</div>'
    +'<div class="hdr"><div>'
      +'<div class="co-name">NF Fire Safety &amp; Security Services ,ISO<br>9001 : 2015 Cert.</div>'
      +'<div class="co-info">Phone no. : <span class="hl">7972701472</span><br>Email : firesafetynf@gmail.com<br>GSTIN : 27AWTPP5965C1ZW<br>State: 27-Maharashtra</div>'
    +'</div>'
    +'<div class="logo-box"><img src="'+logo+'" alt="NF Fire" onerror="this.style.display=\'none\';"></div>'
    +'</div>'
    +'<div class="inv-title">Tax Invoice</div>'
    +'<div class="meta">'
      +'<div><div class="bt-label">Bill To</div><div class="bt-name">'+s.customer+'</div><div style="color:#555;margin-top:2px;">'+s.email+'</div></div>'
      +'<div class="im"><div><strong>Invoice Details</strong></div><div>Invoice No. : '+s.id+'</div><div>Date : '+s.date+'</div></div>'
    +'</div>'
    +'<table>'
      +'<thead><tr>'
        +'<th style="text-align:center;width:30px;">#</th>'
        +'<th style="text-align:left;">Item name</th>'
        +'<th style="text-align:center;width:80px;">HSN/ SAC</th>'
        +'<th style="text-align:center;width:70px;">Quantity</th>'
        +'<th style="text-align:center;width:50px;">Unit</th>'
        +'<th style="text-align:right;width:80px;">Price/ Unit</th>'
        +'<th style="text-align:center;width:60px;">GST %</th>'
        +'<th style="text-align:right;width:90px;">Amount</th>'
      +'</tr></thead>'
      +'<tbody>'+itemRows+'</tbody>'
      +'<tfoot><tr>'
        +'<td colspan="2">Total</td><td></td>'
        +'<td style="text-align:center;">'+totalQty+'</td>'
        +'<td></td><td></td><td></td>'
        +'<td style="text-align:right;">&#8377; '+formatNum(subtotal)+'</td>'
      +'</tr></tfoot>'
    +'</table>'
    +'<div class="sum"><div style="flex:1;">'
      +'<div class="aw"><div class="aw-lbl">Invoice Amount In Words</div><div class="aw-val">'+words+'</div></div>'
      +'<div class="tc"><div class="tc-lbl">Terms and Conditions :</div><ol>'
        +'<li>Maintenance Charges Extra.</li>'
        +'<li>Transport Charges Extra.</li>'
        +'<li>Payment Must Be Done Within 15 Days.</li>'
        +'<li>Thanks for doing business with us.</li>'
      +'</ol></div>'
    +'</div>'
    +'<table class="tt">'
      +'<tr><td>Sub Total</td><td>&#8377; '+formatNum(subtotal)+'</td></tr>'
      +'<tr><td>CGST</td><td>&#8377; '+formatNum(cgst)+'</td></tr>'
      +'<tr><td>SGST</td><td>&#8377; '+formatNum(sgst)+'</td></tr>'
      +'<tr class="hi"><td>Grand Total</td><td>&#8377; '+formatNum(grand)+'</td></tr>'
      +'<tr><td>Received</td><td>&#8377; '+formatNum(grand)+'</td></tr>'
      +'<tr><td>Balance</td><td>&#8377; 0.00</td></tr>'
    +'</table></div>'
    +'<div class="ftr">'
      +'<div class="bd"></div>'
      +'<div class="sb"><div class="for-co">For :NF Fire Safety &amp; Security Services ,ISO 9001 : 2015 Cert.</div>'
        +'<span class="sign">Authorized Signatory</span>'
      +'</div>'
    +'</div>'
    +'</div>'
    +'<script>window.onload=function(){setTimeout(function(){window.print();},600);}<\/script>'
    +'</body></html>';

  var pw=window.open('','_blank','width=860,height=1000');
  if(pw){pw.document.open();pw.document.write(html);pw.document.close();}
  else toast('Pop-up blocked. Please allow pop-ups to print invoices.','error');
}
function filterSales() { renderSalesPipeline(); }

function openAddSaleModal() {
  const invOptions = DATA.inventory.map(i=>`<option value="${i.sku}">${i.name}</option>`).join('');
  showModal(`
    <div class="modal-title">+ Add New Sale</div>
    <div class="form-group"><label>Customer Name</label><input id="ns_cust" placeholder="Customer name"/></div>
    <div class="form-group"><label>Email</label><input id="ns_email" type="email" placeholder="email@example.com"/></div>
    
    <div class="form-group">
      <label style="display:flex;justify-content:space-between;align-items:center;">
        Items
        <button class="btn-link" onclick="event.preventDefault();addSaleItemRow()" style="font-size:0.75rem;">+ Add Item</button>
      </label>
      <div id="ns_items_container">
        <div class="sale-item-row" style="display:flex;gap:0.5rem;margin-bottom:0.5rem;">
          <select class="ns_sku" style="flex:1;">${invOptions}</select>
          <input class="ns_qty" type="number" min="1" value="1" style="width:70px;" />
          <button class="tbl-btn danger" onclick="if(document.querySelectorAll('.sale-item-row').length>1) this.parentElement.remove()" style="padding:0 0.5rem;">X</button>
        </div>
      </div>
    </div>

    <div class="modal-actions" style="margin-top:1.5rem">
      <button class="btn-secondary" onclick="closeModal(null)">Cancel</button>
      <button class="btn-primary" onclick="addSale()">Add Sale</button>
    </div>
  `);
}

window.addSaleItemRow = function() {
  const invOptions = DATA.inventory.map(i=>`<option value="${i.sku}">${i.name}</option>`).join('');
  const div = document.createElement('div');
  div.className = 'sale-item-row';
  div.style.cssText = 'display:flex;gap:0.5rem;margin-bottom:0.5rem;';
  div.innerHTML = `
    <select class="ns_sku" style="flex:1;">${invOptions}</select>
    <input class="ns_qty" type="number" min="1" value="1" style="width:70px;" />
    <button class="tbl-btn danger" onclick="this.parentElement.remove()" style="padding:0 0.5rem;">ÃƒÂ¢Ã…â€œÃ¢â‚¬Â¢</button>
  `;
  document.getElementById('ns_items_container').appendChild(div);
};

function addSale() {
  const cust=document.getElementById('ns_cust').value.trim();
  const email=document.getElementById('ns_email').value.trim();
  
  const rows = document.querySelectorAll('.sale-item-row');
  const items = [];
  let amount = 0;
  
  rows.forEach(row => {
    const sku = row.querySelector('.ns_sku').value;
    const qty = parseInt(row.querySelector('.ns_qty').value) || 1;
    const item = DATA.inventory.find(i=>i.sku===sku);
    if(item) {
      items.push({sku, name:item.name, qty, unitPrice:item.price, gstRate: item.gstRate});
      amount += (qty * item.price);
    }
  });

  if(!cust || !email || items.length === 0){toast('Fill in all fields and add at least one item','error');return;}
  
  const newSale={
    id:`ORD-${1000+DATA.sales.length+1}`,
    customer:cust, email, items, amount,
    status:'Pending', date:new Date().toISOString().split('T')[0], notes:'',
  };
  DATA.sales.push(newSale);
  closeModal(null); renderSalesPipeline(); renderDashboard(); updateBadges();
  toast(`Sale ${newSale.id} added!`,'success');
  saveLocalData();
}

function exportSalesCSV() {
  const headers = ['ID','Customer','Email','Product','Qty','Amount','Status','Date'];
  const rows = DATA.sales.map(s=>[s.id,s.customer,s.email,s.items.map(i=>i.name).join('; '),s.items.reduce((a,b)=>a+b.qty,0),s.amount,s.status,s.date]);
  downloadCSV('sales_export.csv',headers,rows);
}

function sendConfirmEmail(id) {
  const s=DATA.sales.find(x=>x.id===id);
  if(!s){toast('Order not found','error');return;}
  DATA.emails.unshift({
    timestamp:new Date().toISOString().split('T')[0],
    to:s.email,
    subject:`Order Confirmation &mdash; ${s.id}`,
    type:'Order Confirmation',status:'Delivered',
  });
  toast(`Opening mail application for ${s.email}...` ,'success');
  saveLocalData();
  const subject = encodeURIComponent(`Order Confirmation &mdash; ${s.id} &mdash; NF Fire`);
  const body = encodeURIComponent(`Dear ${s.customer},\n\nWe are writing to confirm your order ${s.id} with NF Fire for the following items:\n- ${s.items.map(i=>i.name).join(', ')}\n\nTotal Order Amount: INR ${formatNum(s.amount)}\n\nThank you for choosing NF Fire for your fire safety equipment needs.\n\nBest regards,\nNF Fire Administration`);
  window.location.href = `mailto:${s.email}?subject=${subject}&body=${body}`;
}

// --- INVENTORY ---
function renderInventoryTable() {
  const search = (document.getElementById('invSearch')||{}).value?.toLowerCase()||'';
  const cat = (document.getElementById('invCategoryFilter')||{}).value||'';
  const stockF = (document.getElementById('invStockFilter')||{}).value||'';
  let items = DATA.inventory;
  if(search) items=items.filter(i=>String(i.name||'').toLowerCase().includes(search)||String(i.sku||'').toLowerCase().includes(search));
  if(cat) items=items.filter(i=>i.category===cat);
  if(stockF==='low') items=items.filter(i=>i.stock>0&&i.stock<=i.threshold);
  if(stockF==='out') items=items.filter(i=>i.stock===0);
  if(stockF==='ok') items=items.filter(i=>i.stock>i.threshold);

  const inStock=DATA.inventory.filter(i=>i.stock>i.threshold).length;
  const lowStock=DATA.inventory.filter(i=>i.stock>0&&i.stock<=i.threshold).length;
  const outStock=DATA.inventory.filter(i=>i.stock===0).length;
  const totalVal=DATA.inventory.reduce((a,b)=>a+b.stock*b.price,0);
  document.getElementById('invTotal').textContent=DATA.inventory.length;
  document.getElementById('invInStock').textContent=inStock;
  document.getElementById('invLowStock').textContent=lowStock;
  document.getElementById('invOutStock').textContent=outStock;
  document.getElementById('invValue').innerHTML='&#8377;'+formatNum(totalVal);

  document.getElementById('inventoryBody').innerHTML = items.length ? items.map(i=>{
    const pct=Math.min(100,Math.round((i.stock/Math.max(i.threshold*2,1))*100));
    const cls=i.stock===0?'danger':i.stock<=i.threshold?'warn':'ok';
    return `<tr>
      <td style="font-weight:600">${i.name}</td>
      <td>${i.category}</td>
      <td>
        <div style="display:flex;align-items:center;gap:.5rem">
          <div class="stock-bar"><div class="stock-fill ${cls}" style="width:${pct}%"></div></div>
          <span style="color:var(--text-${cls==='ok'?'primary':'secondary'})">${i.stock}</span>
        </div>
      </td>
      <td>${i.threshold}</td>
      <td style="color:var(--accent);font-weight:700">&#8377;${formatCurrencyExact(i.price)}</td>
      <td style="color:var(--text-secondary)">${i.supplier}</td>
      <td style="color:var(--text-muted);font-size:.72rem">${i.lastUpdated}</td>
      <td>
        <div style="display:flex;flex-wrap:wrap;gap:.3rem">
          <button class="tbl-btn" onclick="viewInventory('${i.sku}')">&#128065; View</button>
          <button class="tbl-btn" onclick="editInventoryItem('${i.sku}')">&#9999; Edit</button>
          <button class="tbl-btn" onclick="openRestockModal('${i.sku}')">&#128230; Restock</button>
          <button class="tbl-btn danger" onclick="deleteInventoryItem('${i.sku}')">&#128465; Del</button>
        </div>
      </td>
    </tr>`;
  }).join('') : '<tr><td colspan="10" class="empty-state">No items found</td></tr>';
}

function filterInventory() { renderInventoryTable(); }

function exportInventoryCSV() {
  const headers = ['SKU', 'Name', 'Category', 'Unit', 'Stock', 'Threshold', 'Price', 'Value', 'HSN'];
  const rows = DATA.inventory.map(i => [
    i.sku, i.name, i.category, i.unit, i.stock, i.threshold, i.price, (i.stock * i.price), i.hsn
  ]);
  downloadCSV('inventory_export.csv', headers, rows);
}

function openAddProductModal() {
  showModal(`
    <div class="modal-title">+ Add Product to Inventory</div>
    <div class="form-group">
      <label>Category</label>
      <select id="np_cat"><option>Extinguisher</option><option>Suppression</option><option>Detection</option><option>PPE</option><option>Accessories</option></select>
    </div>
    <div class="form-group"><label>Product Name</label><input id="np_name" placeholder="Full product name"/></div>
    <div class="modal-form-grid">
      <div class="form-group"><label>HSN Code</label><input id="np_hsn" placeholder="e.g. 8424"/></div>
      <div class="form-group"><label>Unit</label>
        <select id="np_unit">
          <option value="Nos">Nos</option>
          <option value="Kg">Kg</option>
          <option value="Ltr">Ltr</option>
          <option value="Set">Set</option>
          <option value="Mtr">Mtr</option>
          <option value="Box">Box</option>
        </select>
      </div>
    </div>
    <div class="modal-form-grid">
      <div class="form-group"><label>Initial Stock</label><input id="np_stock" type="number" value="0"/></div>
      <div class="form-group"><label>Min Threshold</label><input id="np_threshold" type="number" value="10"/></div>
    </div>
    <div class="modal-form-grid">
      <div class="form-group"><label>Unit Price (&#8377;)</label><input id="np_price" type="number" value="0"/></div>
      <div class="form-group"><label>Supplier</label><input id="np_supplier" placeholder="Supplier name"/></div>
    </div>
    <div class="modal-form-grid">
      <div class="form-group"><label>GST Rate (%)</label><input id="np_gst" type="number" value="18"/></div>
      <div class="form-group"><label>Fire Class (A,B,C...)</label><input id="np_fire" placeholder="e.g. A,B,C"/></div>
    </div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal(null)">Cancel</button>
      <button class="btn-primary" onclick="addProduct()">Add Product</button>
    </div>
  `);
}

function addProduct() {
  const sku='ITM-' + Date.now().toString(36).toUpperCase() + Math.floor(Math.random()*1000);
  const name=document.getElementById('np_name').value.trim();
  const hsn=document.getElementById('np_hsn').value.trim();
  const unit=document.getElementById('np_unit').value;
  const cat=document.getElementById('np_cat').value;
  
  const stockRaw=document.getElementById('np_stock').value;
  const stock=stockRaw !== "" ? (parseInt(stockRaw) || 0) : 0;
  
  const thresholdRaw=document.getElementById('np_threshold').value;
  let threshold=thresholdRaw !== "" ? parseInt(thresholdRaw) : 10;
  if (isNaN(threshold)) threshold = 10;
  
  const priceRaw=document.getElementById('np_price').value;
  const price=priceRaw !== "" ? (parseFloat(priceRaw) || 0) : 0;
  
  const supplier=document.getElementById('np_supplier').value.trim();
  
  const gstRaw=document.getElementById('np_gst')?.value;
  let gstRate=(gstRaw !== undefined && gstRaw !== "") ? parseFloat(gstRaw) : 18;
  if (isNaN(gstRate)) gstRate = 18;
  
  const fireClass=(document.getElementById('np_fire')?.value||'').trim();
  if(!name){toast('Product name is required','error');return;}
  DATA.inventory.push({sku,name,hsn,unit,category:cat,stock,threshold,price,supplier,gstRate,fireClass,lastUpdated:new Date().toISOString().split('T')[0]});
  closeModal(null); renderInventoryTable(); renderDashboard(); updateBadges();
  toast(`${name} added to inventory`,'success');
  saveLocalData();
}

function openRestockModal(sku) {
  const item=DATA.inventory.find(i=>i.sku===sku);
  if(!item) return;
  showModal(`
    <div class="modal-title">Restock &mdash; ${item.name}</div>
    <div class="form-group"><label>Current Stock</label><input value="${item.stock}" readonly/></div>
    <div class="form-group"><label>Add Quantity</label><input id="restock_qty" type="number" min="1" value="20" autofocus/></div>
    <div class="form-group"><label>Supplier</label><input id="restock_supplier" value="${item.supplier}"/></div>
    <div class="form-group"><label>Notes</label><textarea id="restock_notes" rows="2" placeholder="PO number, batch info..."></textarea></div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal(null)">Cancel</button>
      <button class="btn-primary" onclick="confirmRestock('${sku}')">Confirm Restock</button>
    </div>
  `);
}

function confirmRestock(sku) {
  const qty=parseInt(document.getElementById('restock_qty').value)||0;
  const item=DATA.inventory.find(i=>i.sku===sku);
  if(!item||qty<=0){toast('Invalid quantity','error');return;}
  item.stock+=qty;
  item.lastUpdated=new Date().toISOString().split('T')[0];
  closeModal(null); renderInventoryTable(); renderDashboard(); updateBadges();
  toast(`Restocked ${item.name} +${qty} units`,'success');
  saveLocalData();
}

function editInventoryItem(sku) {
  const item=DATA.inventory.find(i=>i.sku===sku);
  if(!item) return;
  showModal(`
    <div class="modal-title">&#9999; Edit &mdash; ${item.name}</div>
    <div class="form-group"><label>Category</label>
      <select id="ei_cat">
        <option ${item.category==='Extinguisher'?'selected':''}>Extinguisher</option>
        <option ${item.category==='Suppression'?'selected':''}>Suppression</option>
        <option ${item.category==='Detection'?'selected':''}>Detection</option>
        <option ${item.category==='PPE'?'selected':''}>PPE</option>
        <option ${item.category==='Accessories'?'selected':''}>Accessories</option>
      </select>
    </div>
    <div class="form-group"><label>Product Name</label><input id="ei_name" value="${item.name}"/></div>
    <div class="modal-form-grid">
      <div class="form-group"><label>HSN Code</label><input id="ei_hsn" value="${item.hsn || ''}" placeholder="e.g. 8424"/></div>
      <div class="form-group"><label>Unit</label>
        <select id="ei_unit">
          <option value="Nos" ${item.unit==='Nos'?'selected':''}>Nos</option>
          <option value="Kg" ${item.unit==='Kg'?'selected':''}>Kg</option>
          <option value="Ltr" ${item.unit==='Ltr'?'selected':''}>Ltr</option>
          <option value="Set" ${item.unit==='Set'?'selected':''}>Set</option>
          <option value="Mtr" ${item.unit==='Mtr'?'selected':''}>Mtr</option>
          <option value="Box" ${item.unit==='Box'?'selected':''}>Box</option>
        </select>
      </div>
    </div>
    <div class="modal-form-grid">
      <div class="form-group"><label>Stock Qty</label><input id="ei_stock" type="number" value="${item.stock}"/></div>
      <div class="form-group"><label>Min Threshold</label><input id="ei_threshold" type="number" value="${item.threshold}"/></div>
    </div>
    <div class="modal-form-grid">
      <div class="form-group"><label>Unit Price (&#8377;)</label><input id="ei_price" type="number" value="${item.price}"/></div>
      <div class="form-group"><label>Supplier</label><input id="ei_supplier" value="${item.supplier}"/></div>
    </div>
    <div class="modal-form-grid">
      <div class="form-group"><label>GST Rate (%)</label><input id="ei_gst" type="number" value="${item.gstRate || 18}"/></div>
      <div class="form-group"><label>Fire Class</label><input id="ei_fire" value="${item.fireClass || ''}"/></div>
    </div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal(null)">Cancel</button>
      <button class="btn-primary" onclick="saveInventoryEdit('${sku}')">&#10003; Save Changes</button>
    </div>
  `);
}

function saveInventoryEdit(sku) {
  const item=DATA.inventory.find(i=>i.sku===sku);
  if(!item){toast('Item not found','error');return;}
  item.category=document.getElementById('ei_cat')?.value||item.category;
  item.name=document.getElementById('ei_name').value.trim()||item.name;
  item.hsn=document.getElementById('ei_hsn').value.trim();
  item.unit=document.getElementById('ei_unit').value;
  
  const stockRaw=document.getElementById('ei_stock').value;
  item.stock=stockRaw !== "" ? (parseInt(stockRaw) || 0) : 0;
  
  const thresholdRaw=document.getElementById('ei_threshold').value;
  let threshold=thresholdRaw !== "" ? parseInt(thresholdRaw) : 10;
  item.threshold = isNaN(threshold) ? 10 : threshold;
  
  const priceRaw=document.getElementById('ei_price').value;
  item.price=priceRaw !== "" ? (parseFloat(priceRaw) || 0) : 0;
  
  item.supplier=document.getElementById('ei_supplier').value.trim();
  
  const gstRaw=document.getElementById('ei_gst')?.value;
  let gstRate=(gstRaw !== undefined && gstRaw !== "") ? parseFloat(gstRaw) : 18;
  item.gstRate = isNaN(gstRate) ? 18 : gstRate;
  
  item.fireClass=(document.getElementById('ei_fire')?.value||'').trim();
  item.lastUpdated=new Date().toISOString().split('T')[0];
  closeModal(null); renderInventoryTable(); updateBadges();
  toast('Inventory updated successfully','success');
  saveLocalData();
}

function deleteInventoryItem(sku) {
  if(!confirm('Delete this item from inventory? This cannot be undone.')) return;
  DATA.inventory = DATA.inventory.filter(i=>i.sku!==sku);
  renderInventoryTable(); renderDashboard(); updateBadges();
  toast('Item deleted from inventory','success');
  saveLocalData();
}

function viewInventory(sku) {
  const i = DATA.inventory.find(x=>x.sku===sku);
  if(!i) return;
  const pct=Math.min(100,Math.round((i.stock/Math.max(i.threshold*2,1))*100));
  const cls=i.stock===0?'danger':i.stock<=i.threshold?'warn':'ok';
  const clsLabel=i.stock===0?'Out of Stock':i.stock<=i.threshold?'Low Stock':'In Stock';
  const clsColor=i.stock===0?'#ef4444':i.stock<=i.threshold?'#f59e0b':'#10b981';
  showModal(`
    <div class="modal-title">&#128230; ${i.name}</div>
    
    <!-- 2-Column Compact Details (SKU, Category, HSN, Unit, Supplier, Fire Class) -->
    <div class="inv-info-grid" style="margin-bottom:0.75rem">
      <div class="inv-detail-card">
        <div class="inv-detail-lbl">SKU</div>
        <div class="inv-detail-val">${i.sku}</div>
      </div>
      <div class="inv-detail-card">
        <div class="inv-detail-lbl">Category</div>
        <div class="inv-detail-val">${i.category}</div>
      </div>
      <div class="inv-detail-card">
        <div class="inv-detail-lbl">HSN Code</div>
        <div class="inv-detail-val">${i.hsn||'N/A'}</div>
      </div>
      <div class="inv-detail-card">
        <div class="inv-detail-lbl">Unit</div>
        <div class="inv-detail-val">${i.unit||'Nos'}</div>
      </div>
      <div class="inv-detail-card">
        <div class="inv-detail-lbl">Supplier</div>
        <div class="inv-detail-val" style="word-break:break-word">${i.supplier||'N/A'}</div>
      </div>
      <div class="inv-detail-card">
        <div class="inv-detail-lbl">Fire Class</div>
        <div class="inv-detail-val">${i.fireClass||'Ã¢â‚¬â€'}</div>
      </div>
    </div>

    <!-- Stock level bar visualizer -->
    <div class="inv-stock-block">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem;flex-wrap:wrap;gap:.5rem">
        <div>
          <div class="inv-detail-lbl">Stock Level</div>
          <div style="font-weight:700;font-size:1.5rem;color:var(--text-primary)">${i.stock} <span style="font-size:.85rem;font-weight:400;color:var(--text-muted)">${i.unit||'Nos'}</span></div>
        </div>
        <span style="background:${clsColor}22;color:${clsColor};padding:.3rem .8rem;border-radius:20px;font-size:.75rem;font-weight:600">${clsLabel}</span>
      </div>
      <div style="background:var(--bg-hover);border-radius:6px;height:10px;overflow:hidden">
        <div style="background:${clsColor};width:${pct}%;height:100%;border-radius:6px;transition:width .5s"></div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:.4rem;font-size:.7rem;color:var(--text-muted)">
        <span>0</span><span>Threshold: ${i.threshold}</span><span>Max: ${i.threshold*2}</span>
      </div>
    </div>

    <!-- 3-Column Symmetrical Financial Stats -->
    <div class="inv-stats-mini" style="margin-bottom:0.5rem">
      <div class="inv-detail-card" style="text-align:center">
        <div class="inv-detail-lbl">Unit Price</div>
        <div class="inv-detail-val" style="color:var(--accent)">&#8377;${formatCurrencyExact(i.price)}</div>
      </div>
      <div class="inv-detail-card" style="text-align:center">
        <div class="inv-detail-lbl">Total Value</div>
        <div class="inv-detail-val" style="color:var(--accent)">&#8377;${formatCurrencyExact(i.stock*i.price)}</div>
      </div>
      <div class="inv-detail-card" style="text-align:center">
        <div class="inv-detail-lbl">GST Rate</div>
        <div class="inv-detail-val">${i.gstRate||18}%</div>
      </div>
    </div>

    <!-- Timestamp meta info -->
    <div style="text-align:right; font-size:.65rem; color:var(--text-muted); margin-bottom:.75rem; font-weight:600; text-transform: uppercase; letter-spacing: .02em;">
      Last Updated: ${i.lastUpdated}
    </div>

    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal(null)">Close</button>
      <button class="btn-secondary" onclick="closeModal(null);openRestockModal('${i.sku}')">&#128230; Restock</button>
      <button class="btn-primary" onclick="closeModal(null);editInventoryItem('${i.sku}')">&#9999; Edit</button>
    </div>
  `);
}
function checkLowStock() {
  const items=DATA.inventory.filter(i=>i.stock===0);
  if(items.length>0) {
    showAlert(`Ã¢Å¡Â Ã¯Â¸Â ${items.length} product(s) are out of stock: ${items.map(i=>i.name).join(', ')}`);
  }
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ QUOTES ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function renderQuotes() {
  const filter=(document.getElementById('quoteStatusFilter')||{}).value||'';
  let items=DATA.quotes;
  if(filter) items=items.filter(q=>q.status===filter);
  document.getElementById('quotesBody').innerHTML=items.map(q=>`<tr>
    <td><code style="color:var(--accent2)">${q.id}</code></td>
    <td>${q.customer}</td>
    <td>${q.items} item(s)</td>
    <td style="color:var(--accent);font-weight:700">&#8377;${formatNum(q.total)}</td>
    <td style="color:var(--text-muted)">${q.created}</td>
    <td>
      <select onchange="changeQuoteStatus('${q.id}', this.value)" class="badge-status badge-${q.status.toLowerCase()}" style="border:none; cursor:pointer; outline:none; font-weight:700; padding:0.2rem 0.6rem; border-radius:12px; font-size:0.7rem; transition: all 0.2s;">
        <option value="Draft" ${q.status==='Draft'?'selected':''} style="background:var(--bg-card); color:var(--text-primary);">Draft</option>
        <option value="Sent" ${q.status==='Sent'?'selected':''} style="background:var(--bg-card); color:var(--text-primary);">Sent</option>
        <option value="Accepted" ${q.status==='Accepted'?'selected':''} style="background:var(--bg-card); color:var(--text-primary);">Accepted</option>
        <option value="Rejected" ${q.status==='Rejected'?'selected':''} style="background:var(--bg-card); color:var(--text-primary);">Rejected</option>
      </select>
    </td>
    <td>
      <button class="tbl-btn" onclick="viewQuote('${q.id}')">View</button>
      <button class="tbl-btn" onclick="editQuote('${q.id}')">Update</button>
      <button class="tbl-btn danger" onclick="deleteQuote('${q.id}')">Del</button>
    </td>
  </tr>`).join('');
}

function filterQuotes() { renderQuotes(); }

function viewQuote(id) {
  const q = DATA.quotes.find(x => x.id === id);
  if (!q) return;
  showModal(`
    <div class="modal-title">Detailed Summary &mdash; ${q.id}</div>
    <div style="background:var(--bg-surface); border:1px solid var(--border); border-radius:var(--radius-sm); padding:1rem; margin-bottom:1rem">
      <div style="display:flex; justify-content:space-between; margin-bottom:.75rem">
        <div><b>NF Fire</b><br><small style="color:var(--text-muted)">Fire Safety Equipment</small></div>
        <div style="text-align:right"><b>${q.id}</b><br><small style="color:var(--text-muted)">${q.created}</small></div>
      </div>
      <div style="margin-bottom:.75rem">
        <b>Bill To:</b><br>
        ${q.customer}<br>
        <small style="color:var(--text-muted)">${q.email}</small>
      </div>
      <div style="background:var(--bg-card); padding:.75rem; border-radius:var(--radius-sm)">
        <div style="font-size:.72rem; color:var(--text-muted); margin-bottom:.5rem">Items:</div>
        <div style="font-size:.85rem; font-family:monospace; white-space:pre-wrap; margin-bottom:.5rem; line-height:1.4">${q.itemsText || (q.items + ' line item(s)')}</div>
        <div style="font-size:1.1rem; font-weight:800; color:var(--accent)">Total: &#8377;${formatNum(q.total)}</div>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal(null)">Close</button>
    </div>
  `);
}

function changeQuoteStatus(id, newStatus) {
  const q = DATA.quotes.find(x => x.id === id);
  if (q) {
    q.status = newStatus;
    saveLocalData();
    renderQuotes();
    toast(`Quote ${id} status changed to ${newStatus}`, 'success');
  }
}

function updateQuote(id) {
  const q = DATA.quotes.find(x => x.id === id);
  if (!q) return;
  const cust = document.getElementById('eq_cust').value.trim();
  const email = document.getElementById('eq_email').value.trim();
  const itemsText = document.getElementById('eq_items').value.trim();
  const total = parseFloat(document.getElementById('eq_total').value) || 0;
  const status = document.getElementById('eq_status').value;
  
  if (!cust || !email) { toast('Customer name and email required', 'error'); return; }
  
  q.customer = cust;
  q.email = email;
  q.itemsText = itemsText;
  q.items = itemsText ? itemsText.split(',').length : 0;
  q.total = total;
  q.status = status;
  
  closeModal(null); renderQuotes();
  toast(`Quote ${id} updated`, 'success');
  saveLocalData();
}

function deleteQuote(id) {
  if (confirm(`Are you sure you want to delete quote ${id}?`)) {
    DATA.quotes = DATA.quotes.filter(x => x.id !== id);
    renderQuotes();
    toast(`Quote ${id} deleted`, 'success');
    saveLocalData();
  }
}

function openNewQuoteModal() {
  showModal(`
    <div class="modal-title">+ New Quote</div>
    <div class="form-group"><label>Customer Name</label><input id="nq_cust" placeholder="Customer or company name"/></div>
    <div class="form-group"><label>Email</label><input id="nq_email" type="email" placeholder="email@company.com"/></div>
    <div class="form-group"><label>Quote Items (paste or describe)</label>
      <textarea id="nq_items" rows="3" placeholder="5x ABC Extinguisher 4kg, 2x Smoke Detector..."></textarea>
    </div>
    <div class="form-group"><label>Estimated Total (&#8377;)</label><input id="nq_total" type="number" placeholder="0"/></div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal(null)">Cancel</button>
      <button class="btn-primary" onclick="createQuote()">Create Quote</button>
    </div>
  `);
}

function createQuote() {
  const cust=document.getElementById('nq_cust').value.trim();
  const email=document.getElementById('nq_email').value.trim();
  const items=document.getElementById('nq_items').value.trim();
  const total=parseFloat(document.getElementById('nq_total').value)||0;
  if(!cust||!email){toast('Customer name and email required','error');return;}
  const q={id:`QT-${2000+DATA.quotes.length+1}`,customer:cust,email,items:items.split(',').length,total,status:'Draft',created:new Date().toISOString().split('T')[0]};
  DATA.quotes.unshift(q);
  closeModal(null); renderQuotes();
  toast(`Quote ${q.id} created`,'success');
  saveLocalData();
}

// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ VENDORS Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
function renderVendors() {
  document.getElementById('vendorGrid').innerHTML=DATA.vendors.map(v=>`
    <div class="vendor-card">
      <div class="vendor-logo">${v.emoji}</div>
      <div class="vendor-name">${v.name}</div>
      <div class="vendor-contact">&#128100; ${v.contact}</div>
      <div class="vendor-contact">&#9993; ${v.email}</div>
      <div class="vendor-contact">&#128222; ${v.phone}</div>
      <div class="vendor-products">Products: ${v.products}</div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:.6rem">
        <small style="color:var(--text-muted)">Last restock: ${v.lastRestock}</small>
        <span style="color:var(--yellow)">&#9733; ${v.rating}</span>
      </div>
      <div class="vendor-actions">
        <button class="btn-secondary" style="flex:1;font-size:.72rem;padding:.35rem" onclick="emailVendor('${v.id}')">&#9993; Email</button>
        <button class="btn-secondary" style="flex:1;font-size:.72rem;padding:.35rem" onclick="editVendor('${v.id}')">Edit</button>
        <button class="btn-secondary" style="flex:1;font-size:.72rem;padding:.35rem;color:var(--red);border-color:rgba(255,71,87,.2)" onclick="deleteVendor('${v.id}')">Delete</button>
      </div>
    </div>`).join('');
}

function openAddVendorModal() {
  showModal(`
    <div class="modal-title">+ Add Vendor</div>
    <div class="form-group"><label>Company Name</label><input id="nv_name" placeholder="Vendor company name"/></div>
    <div class="modal-form-grid">
      <div class="form-group"><label>Contact Person</label><input id="nv_contact" placeholder="Contact name"/></div>
      <div class="form-group"><label>Phone</label><input id="nv_phone" placeholder="98XXXXXXXX"/></div>
    </div>
    <div class="form-group"><label>Email</label><input id="nv_email" type="email" placeholder="contact@vendor.com"/></div>
    <div class="form-group"><label>Products Supplied</label><textarea id="nv_products" rows="2" placeholder="ABC Extinguishers, COÃ¢â€šâ€š..."></textarea></div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal(null)">Cancel</button>
      <button class="btn-primary" onclick="addVendor()">Add Vendor</button>
    </div>
  `);
}

function addVendor() {
  const name=document.getElementById('nv_name').value.trim();
  const contact=document.getElementById('nv_contact').value.trim();
  const phone=document.getElementById('nv_phone').value.trim();
  const email=document.getElementById('nv_email').value.trim();
  const products=document.getElementById('nv_products').value.trim();
  if(!name||!email){toast('Name and email required','error');return;}
  const emojis=['Ã°Å¸ÂÂ¢','Ã°Å¸â€Â§','Ã°Å¸â€œÂ¦','Ã°Å¸â€ºÂ¡Ã¯Â¸Â','Ã°Å¸â€Â¥'];
  DATA.vendors.push({id:`V${String(DATA.vendors.length+1).padStart(3,'0')}`,name,contact,email,phone,products,emoji:emojis[Math.floor(Math.random()*emojis.length)],lastRestock:'&mdash;',rating:0});
  closeModal(null); renderVendors();
  toast(`Vendor ${name} added`,'success');
  saveLocalData();
}

function emailVendor(id) {
  const v=DATA.vendors.find(x=>x.id===id);
  toast(`Email drafted to ${v?.email}`,'success');
}

function editVendor(id) {
  const v=DATA.vendors.find(x=>x.id===id);
  if(!v) return;
  showModal(`
    <div class="modal-title">Edit Vendor &mdash; ${v.name}</div>
    <div class="form-group"><label>Company Name</label><input id="ev_name" value="${v.name}"/></div>
    <div class="form-group"><label>Contact Person</label><input id="ev_contact" value="${v.contact}"/></div>
    <div class="form-group"><label>Email</label><input id="ev_email" value="${v.email}"/></div>
    <div class="form-group"><label>Phone</label><input id="ev_phone" value="${v.phone}"/></div>
    <div class="form-group"><label>Products Supplied</label><textarea id="ev_products" rows="2">${v.products}</textarea></div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal(null)">Cancel</button>
      <button class="btn-secondary" style="color:var(--red); border-color:rgba(255,71,87,.2)" onclick="deleteVendor('${id}')">Delete</button>
      <button class="btn-primary" onclick="saveVendor('${id}')">Update</button>
    </div>
  `);
}

function saveVendor(id) {
  const v=DATA.vendors.find(x=>x.id===id);
  if(!v) return;
  const name=document.getElementById('ev_name').value.trim();
  const contact=document.getElementById('ev_contact').value.trim();
  const email=document.getElementById('ev_email').value.trim();
  const phone=document.getElementById('ev_phone').value.trim();
  const products=document.getElementById('ev_products').value.trim();
  
  if(!name||!email){toast('Name and email required','error');return;}
  
  v.name=name;
  v.contact=contact;
  v.email=email;
  v.phone=phone;
  v.products=products;
  
  closeModal(null); renderVendors();
  toast('Vendor updated','success');
  saveLocalData();
}

function deleteVendor(id) {
  const v=DATA.vendors.find(x=>x.id===id);
  if(!v) return;
  if(!confirm(`Are you sure you want to delete vendor "${v.name}"? This cannot be undone.`)) return;
  DATA.vendors = DATA.vendors.filter(x=>x.id!==id);
  closeModal(null);
  renderVendors();
  toast('Vendor deleted','success');
  saveLocalData();
}
// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ FIRE COMPLIANCE Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
function renderCompliance() {
  const classMap={A:[],B:[],C:[],D:[],F:[]};
  DATA.inventory.forEach(item=>{
    if(!item.fireClass) return;
    item.fireClass.split(',').forEach(cls=>{
      const c=cls.trim().toUpperCase();
      if(classMap[c]) classMap[c].push(item.name);
    });
  });
  Object.entries(classMap).forEach(([cls,products])=>{
    const el=document.getElementById(`comp${cls}`);
    if(el) el.innerHTML=products.length?products.map(p=>`<span class="comp-product-tag">ÃƒÂ¢Ã…â€œÃ¢â‚¬Å“ ${p}</span>`).join(''):'<span style="color:var(--text-muted);font-size:.72rem">No products mapped</span>';
  });
}

function openComplianceMapper() {
  showModal(`
    <div class="modal-title">ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂºÃ‚Â¡ÃƒÂ¯Ã‚Â¸Ã‚Â Fire Class &mdash; Product Mapper</div>
    <div class="form-group"><label>Select Product</label>
      <select id="cm_product">${DATA.inventory.map(i=>`<option value="${i.sku}">${i.name}</option>`).join('')}</select>
    </div>
    <div class="form-group"><label>Fire Classes (comma separated)</label><input id="cm_classes" placeholder="A,B,C"/></div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal(null)">Cancel</button>
      <button class="btn-primary" onclick="saveComplianceMapping()">Save Mapping</button>
    </div>
  `);
}

function saveComplianceMapping() {
  const sku=document.getElementById('cm_product').value;
  const classes=document.getElementById('cm_classes').value.toUpperCase().trim();
  const item=DATA.inventory.find(i=>i.sku===sku);
  if(item) { item.fireClass=classes; }
  closeModal(null); renderCompliance();
  toast('Compliance mapping updated','success');
  saveLocalData();
}

function viewFireClass(cls) {
  const c = cls.toUpperCase().trim();
  const descriptions = {
    A: {
      type: "Ordinary Combustibles",
      combustibles: "Wood, paper, fabric, plastics, rubber, trash.",
      color: "var(--green)",
      badge: "Class A",
      protocol: "1. Cool the fire with water or Class A foam.\n2. Ensure deep seated embers are fully extinguished."
    },
    B: {
      type: "Flammable Liquids",
      combustibles: "Petrol, diesel, oils, grease, paints, solvents, tar.",
      color: "var(--yellow)",
      badge: "Class B",
      protocol: "1. Smother the fire to cut off oxygen using COÃ¢â€šâ€š or Dry Powder extinguishers.\n2. Avoid using water as it can spread the burning liquid."
    },
    C: {
      type: "Electrical Equipment",
      combustibles: "Computers, servers, switchboards, wiring, appliances.",
      color: "var(--accent2)",
      badge: "Class C",
      protocol: "1. Turn off the power source if safe to do so.\n2. Use non-conductive extinguishing agents (COÃ¢â€šâ€š or Clean Agent).\n3. NEVER use water or foam."
    },
    D: {
      type: "Combustible Metals",
      combustibles: "Magnesium, titanium, zirconium, sodium, lithium, potassium.",
      color: "var(--accent)",
      badge: "Class D",
      protocol: "1. Use special dry powder agents designed for metal fires.\n2. Smother completely and allow to cool down.\n3. NEVER use water, foam, or COÃ¢â€šâ€š."
    },
    F: {
      type: "Cooking Media",
      combustibles: "Cooking oils, fats, lard, grease in commercial kitchens.",
      color: "var(--red)",
      badge: "Class F / K",
      protocol: "1. Smother with a fire blanket or use Wet Chemical extinguishers.\n2. Turn off heat source immediately.\n3. NEVER throw water on a grease fire."
    }
  };

  const desc = descriptions[c] || { type: "Unknown", combustibles: "N/A", color: "var(--text-muted)", badge: `Class ${c}`, protocol: "" };

  const mappedProducts = DATA.inventory.filter(item => {
    const classes = item.fireClass ? item.fireClass.split(',').map(x => x.trim().toUpperCase()) : [];
    return classes.includes(c);
  });

  const productsHtml = mappedProducts.map(item => {
    const stockCls = item.stock === 0 ? 'var(--red)' : item.stock <= item.threshold ? 'var(--yellow)' : 'var(--accent3)';
    return `
      <tr>
        <td style="font-weight:600; color:var(--text-primary);">${item.name}</td>
        <td><code>${item.sku}</code></td>
        <td style="color:${stockCls}; font-weight:700;">${item.stock} ${item.unit || 'Nos'}</td>
        <td style="color:var(--accent); font-weight:700;">&#8377;${formatNum(item.price)}</td>
      </tr>
    `;
  }).join('');

  showModal(`
    <div class="modal-title" style="display:flex; align-items:center; gap:0.5rem;">
      <span style="background:${desc.color}; width:12px; height:12px; border-radius:50%; display:inline-block;"></span>
      Fire Class ${desc.badge} Overview
    </div>
    
    <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:1rem; margin-bottom:1rem;">
      <div style="background:var(--bg-surface); border:1px solid var(--border); border-radius:var(--radius-sm); padding:1rem;">
        <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; font-weight:700; letter-spacing:0.05em; margin-bottom:0.25rem;">Combustibles Classification</div>
        <div style="font-weight:700; font-size:1.05rem; color:var(--text-primary); margin-bottom:0.5rem;">${desc.type}</div>
        <div style="font-size:0.8rem; color:var(--text-secondary); line-height:1.4;">${desc.combustibles}</div>
      </div>
      
      <div style="background:var(--bg-surface); border:1px solid var(--border); border-radius:var(--radius-sm); padding:1rem;">
        <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; font-weight:700; letter-spacing:0.05em; margin-bottom:0.25rem;">Standard Safety Protocol</div>
        <div style="font-size:0.75rem; color:var(--text-primary); white-space:pre-wrap; line-height:1.4;">${desc.protocol}</div>
      </div>
    </div>

    <div class="modal-subtitle" style="font-weight:700; margin-bottom:0.5rem; color:var(--text-primary);">Mapped Extinguishing Products (${mappedProducts.length})</div>
    <div style="max-height:200px; overflow-y:auto; border:1px solid var(--border); border-radius:var(--radius-sm); margin-bottom:1rem;">
      <table class="data-table" style="font-size:0.78rem;">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>SKU</th>
            <th>Stock Level</th>
            <th>Unit Price</th>
          </tr>
        </thead>
        <tbody>
          ${productsHtml || '<tr><td colspan="4" class="empty-state" style="padding:1.5rem;">No products mapped to this class</td></tr>'}
        </tbody>
      </table>
    </div>

    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal(null)">Close</button>
      <button class="btn-primary" onclick="closeModal(null); editFireClass('${c}')">Ã¢Å“ÂÃ¯Â¸Â Edit Mappings</button>
    </div>
  `);
}

function editFireClass(cls) {
  const c = cls.toUpperCase().trim();
  const productsHtml = DATA.inventory.map(item => {
    const classes = item.fireClass ? item.fireClass.split(',').map(x => x.trim().toUpperCase()) : [];
    const isMapped = classes.includes(c);
    return `
      <div style="display:flex; align-items:center; justify-content:space-between; padding:0.5rem; background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:var(--radius-sm); margin-bottom:0.4rem;">
        <span style="font-weight:600; font-size:0.8rem; color:var(--text-primary);">${item.name} <small style="color:var(--text-muted)">(${item.category})</small></span>
        <input type="checkbox" class="comp-map-chk" data-sku="${item.sku}" ${isMapped ? 'checked' : ''} style="width:16px; height:16px; cursor:pointer;" />
      </div>
    `;
  }).join('');

  showModal(`
    <div class="modal-title">Ã¢Å“ÂÃ¯Â¸Â Manage Class ${c} Mappings</div>
    <div style="max-height:300px; overflow-y:auto; margin-bottom:1rem; padding-right:4px;">
      ${productsHtml || '<div class="empty-state">No products in inventory to map</div>'}
    </div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal(null)">Cancel</button>
      <button class="btn-primary" onclick="saveClassMappings('${c}')">Save Mappings</button>
    </div>
  `);
}

function saveClassMappings(cls) {
  const c = cls.toUpperCase().trim();
  document.querySelectorAll('.comp-map-chk').forEach(chk => {
    const sku = chk.dataset.sku;
    const isChecked = chk.checked;
    const item = DATA.inventory.find(i => i.sku === sku);
    if (item) {
      let classes = item.fireClass ? item.fireClass.split(',').map(x => x.trim().toUpperCase()) : [];
      if (isChecked) {
        if (!classes.includes(c)) {
          classes.push(c);
        }
      } else {
        classes = classes.filter(x => x !== c);
      }
      item.fireClass = classes.join(', ');
    }
  });
  closeModal(null);
  renderCompliance();
  toast(`Class ${c} mappings updated successfully!`, 'success');
  saveLocalData();
}

function deleteFireClass(cls) {
  const c = cls.trim().toUpperCase();
  if (!confirm(`Are you sure you want to clear all product mappings for Class ${c}?`)) return;
  let count = 0;
  DATA.inventory.forEach(item => {
    if (item.fireClass) {
      const classes = item.fireClass.split(',').map(x => x.trim().toUpperCase());
      if (classes.includes(c)) {
        const filtered = classes.filter(x => x !== c);
        item.fireClass = filtered.join(', ');
        count++;
      }
    }
  });
  renderCompliance();
  saveLocalData();
  toast(`Successfully cleared Class ${c} from ${count} product(s).`, 'success');
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ CUSTOMERS ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function renderCustomers() {
  const search=(document.getElementById('custSearch')||{}).value?.toLowerCase()||'';
  let items=DATA.customers;
  if(search) items=items.filter(c=>String(c.name||'').toLowerCase().includes(search)||String(c.email||'').toLowerCase().includes(search));
  document.getElementById('customersBody').innerHTML=items.map(c=>`<tr>
    <td style="font-weight:700">${c.name}</td>
    <td style="color:var(--text-secondary)">${c.email}</td>
    <td style="color:var(--text-secondary)">${c.phone}</td>
    <td style="text-align:center">${c.orders}</td>
    <td style="color:var(--accent);font-weight:700">&#8377;${formatNum(c.totalSpent)}</td>
    <td style="color:var(--text-muted)">${c.lastOrder}</td>
    <td>
      <button class="tbl-btn" onclick="viewCustomer('${c.id}')">View</button>
      <button class="tbl-btn" onclick="editCustomer('${c.id}')">Edit</button>
      <button class="tbl-btn danger" onclick="deleteCustomer('${c.id}')">Del</button>
    </td>
  </tr>`).join('');
}

function filterCustomers() { renderCustomers(); }

function viewCustomer(id) {
  const c = DATA.customers.find(x => x.id === id);
  if (!c) return;
  const orders = DATA.sales.filter(s => s.customer === c.name || s.email === c.email);
  showModal(`
    <div class="modal-title">Ã°Å¸â€˜Â¤ Customer Profile &mdash; ${c.name}</div>
    <div class="modal-form-grid" style="margin-bottom:1rem">
      <div style="background:var(--surface-alt);border-radius:10px;padding:1rem">
        <div style="font-size:.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em">Email</div>
        <div style="font-weight:700;font-size:1rem;color:var(--text-primary);margin-top:.25rem">${c.email}</div>
      </div>
      <div style="background:var(--surface-alt);border-radius:10px;padding:1rem">
        <div style="font-size:.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em">Phone</div>
        <div style="font-weight:700;font-size:1rem;color:var(--text-primary);margin-top:.25rem">${c.phone || 'N/A'}</div>
      </div>
    </div>
    <div class="inv-stats-mini" style="margin-bottom:1rem">
      <div style="background:var(--surface-alt);border-radius:10px;padding:1rem;text-align:center">
        <div style="font-size:.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em">Total Spent</div>
        <div style="font-weight:700;font-size:1.1rem;color:var(--accent);margin-top:.25rem">&#8377;${formatNum(c.totalSpent)}</div>
      </div>
      <div style="background:var(--surface-alt);border-radius:10px;padding:1rem;text-align:center">
        <div style="font-size:.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em">Orders Count</div>
        <div style="font-weight:700;font-size:1.1rem;color:var(--text-primary);margin-top:.25rem">${orders.length}</div>
      </div>
      <div style="background:var(--surface-alt);border-radius:10px;padding:1rem;text-align:center">
        <div style="font-size:.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em">Last Order</div>
        <div style="font-weight:700;font-size:1.1rem;color:var(--text-primary);margin-top:.25rem">${c.lastOrder || 'N/A'}</div>
      </div>
    </div>
    <div class="modal-subtitle" style="font-weight:700;margin-bottom:.5rem;color:var(--text-primary)">Order History</div>
    <div style="max-height:200px;overflow-y:auto;border:1px solid var(--border);border-radius:var(--radius-sm);margin-bottom:1rem">
      <table class="data-table" style="font-size:.75rem">
        <thead><tr><th>Order ID</th><th>Qty</th><th>Amount</th><th>Status</th><th>Date</th></tr></thead>
        <tbody>${orders.length ? orders.map(o => `<tr>
          <td style="font-weight:600">${o.id}</td>
          <td>${o.items.reduce((a,b)=>a+b.qty,0)}</td>
          <td style="font-weight:700;color:var(--accent)">&#8377;${formatNum(o.amount)}</td>
          <td><span class="badge-status badge-${o.status.toLowerCase()}">${o.status}</span></td>
          <td style="color:var(--text-muted)">${o.date}</td>
        </tr>`).join('') : '<tr><td colspan="5" class="empty-state">No orders found</td></tr>'}</tbody>
      </table>
    </div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal(null)">Close</button>
      <button class="btn-secondary" onclick="emailCustomer('${c.id}')">&#9993; Email</button>
      <button class="btn-primary" onclick="closeModal(null);editCustomer('${c.id}')">Edit Profile</button>
    </div>
  `);
}

function editCustomer(id) {
  const c = DATA.customers.find(x => x.id === id);
  if (!c) return;
  showModal(`
    <div class="modal-title">Edit Customer &mdash; ${c.name}</div>
    <div class="form-group"><label>Customer Name</label><input id="ec_name" value="${c.name}"/></div>
    <div class="form-group"><label>Email</label><input id="ec_email" type="email" value="${c.email}"/></div>
    <div class="form-group"><label>Phone</label><input id="ec_phone" value="${c.phone}"/></div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal(null)">Cancel</button>
      <button class="btn-secondary" style="color:var(--red); border-color:rgba(255,71,87,.2)" onclick="deleteCustomer('${id}')">Delete</button>
      <button class="btn-primary" onclick="saveCustomer('${id}')">Update</button>
    </div>
  `);
}

function saveCustomer(id) {
  const c = DATA.customers.find(x => x.id === id);
  if (!c) return;
  const name = document.getElementById('ec_name').value.trim();
  const email = document.getElementById('ec_email').value.trim();
  const phone = document.getElementById('ec_phone').value.trim();
  if (!name || !email) { toast('Name and email required', 'error'); return; }
  c.name = name;
  c.email = email;
  c.phone = phone;
  closeModal(null); renderCustomers();
  toast('Customer profile updated', 'success');
  saveLocalData();
}

function deleteCustomer(id) {
  const c = DATA.customers.find(x => x.id === id);
  if (!c) return;
  if (!confirm(`Are you sure you want to delete customer "${c.name}"? This cannot be undone.`)) return;
  DATA.customers = DATA.customers.filter(x => x.id !== id);
  closeModal(null); renderCustomers();
  toast('Customer deleted', 'success');
  saveLocalData();
}

function openAddCustomerModal() {
  showModal(`
    <div class="modal-title">+ Add Customer</div>
    <div class="form-group"><label>Customer Name</label><input id="nc_name" placeholder="Full name or company"/></div>
    <div class="form-group"><label>Email</label><input id="nc_email" type="email" placeholder="customer@company.com"/></div>
    <div class="form-group"><label>Phone</label><input id="nc_phone" placeholder="98XXXXXXXX"/></div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal(null)">Cancel</button>
      <button class="btn-primary" onclick="addCustomer()">Add Customer</button>
    </div>
  `);
}

function addCustomer() {
  const name = document.getElementById('nc_name').value.trim();
  const email = document.getElementById('nc_email').value.trim();
  const phone = document.getElementById('nc_phone').value.trim();
  if (!name || !email) { toast('Name and email required', 'error'); return; }
  const id = `CUST-${Date.now().toString(36).toUpperCase()}`;
  DATA.customers.unshift({
    id, name, email, phone,
    orders: 0, totalSpent: 0, lastOrder: 'N/A'
  });
  closeModal(null); renderCustomers();
  toast(`Customer ${name} added`, 'success');
  saveLocalData();
}

function emailCustomer(id) {
  const c=DATA.customers.find(x=>x.id===id);
  toast(`Composing email to ${c?.email}`,'success');
}

function exportCustomersCSV() {
  const headers=['ID','Name','Email','Phone','Orders','Total Spent','Last Order'];
  const rows=DATA.customers.map(c=>[c.id,c.name,c.email,c.phone,c.orders,c.totalSpent,c.lastOrder]);
  downloadCSV('customers_export.csv',headers,rows);
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ PARTIES ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function getIndianStatesOptions() {
  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", 
    "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", 
    "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];
  return states.map(s => `<option value="${s}" ${s==='Maharashtra'?'selected':''}>${s}</option>`).join('');
}

function toggleSameAddress() {
  const checkbox = document.getElementById('np_party_same_address');
  const shippingInput = document.getElementById('np_party_shipping');
  const billingInput = document.getElementById('np_party_billing');
  if (checkbox && shippingInput && billingInput) {
    if (checkbox.checked) {
      shippingInput.value = billingInput.value;
      shippingInput.disabled = true;
      shippingInput.style.opacity = '0.6';
    } else {
      shippingInput.disabled = false;
      shippingInput.style.opacity = '1';
    }
  }
}

function syncShippingAddress() {
  const checkbox = document.getElementById('np_party_same_address');
  const shippingInput = document.getElementById('np_party_shipping');
  const billingInput = document.getElementById('np_party_billing');
  if (checkbox && checkbox.checked && shippingInput && billingInput) {
    shippingInput.value = billingInput.value;
  }
}

let additionalAddressCount = 1;
function addAdditionalAddressField() {
  additionalAddressCount++;
  const container = document.getElementById('additionalShippingContainer');
  if (!container) return;

  const div = document.createElement('div');
  div.className = 'form-group extra-address-group';
  div.style.marginTop = '0.75rem';
  div.style.borderTop = '1px dashed var(--border)';
  div.style.paddingTop = '0.75rem';
  div.id = `extra_address_wrapper_${additionalAddressCount}`;

  div.innerHTML = `
    <label style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
      <span style="font-size:0.75rem; font-weight:600; color:var(--accent2)">Additional Shipping Address ${additionalAddressCount}</span>
      <button type="button" class="btn-link" style="color:var(--red); font-size:0.7rem; cursor:pointer;" onclick="document.getElementById('extra_address_wrapper_${additionalAddressCount}').remove()">ÃƒÂ¢Ã…â€œÃ¢â‚¬Â¢ Remove</button>
    </label>
    <textarea class="extra-shipping-address" rows="2" placeholder="Enter additional shipping location" style="width:100%; background:var(--bg-card); border:1px solid var(--border); color:var(--text-primary); padding:0.4rem; border-radius:var(--radius-sm); outline:none;"></textarea>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function renderParties() {
  const search = (document.getElementById('partySearch') || {}).value?.toLowerCase() || '';
  let items = DATA.parties || [];
  if (search) {
    items = items.filter(p => 
      String(p.name||'').toLowerCase().includes(search) || 
      String(p.gstin||'').toLowerCase().includes(search) || 
      String(p.phone||'').includes(search) ||
      String(p.email||'').toLowerCase().includes(search) ||
      String(p.state||'').toLowerCase().includes(search) ||
      String(p.gstType||'').toLowerCase().includes(search)
    );
  }
  const tbody = document.getElementById('partiesBody');
  if (!tbody) return;

  const typeColors = {
    Regular: 'badge-confirmed',
    Composition: 'badge-pending',
    Unregistered: 'badge-draft',
    Consumer: 'badge-shipped'
  };
  
  tbody.innerHTML = items.length ? items.map((p, index) => `
    <tr>
      <td style="font-weight:700; font-size:0.85rem; color:var(--text-primary);">${p.name}</td>
      <td>
        <code style="color:var(--accent2)">${p.gstin}</code>
        <br>
        <span class="badge-status ${typeColors[p.gstType] || 'badge-draft'}" style="font-size:0.58rem; padding:0rem 0.35rem; margin-top:2px;">${p.gstType || 'Regular'}</span>
      </td>
      <td>
        <span style="background:rgba(255,255,255,0.04); border:1px solid var(--border); padding:0.2rem 0.5rem; border-radius:4px; font-size:0.75rem; font-weight:500;">
          ${p.state || '&mdash;'}
        </span>
      </td>
      <td>
        <div style="font-size:0.78rem; font-weight:500;">&#128100; ${p.phone}</div>
        <div style="font-size:0.7rem; color:var(--text-secondary); margin-top:1px;">&#9993; ${p.email || '&mdash;'}</div>
      </td>
      <td style="text-align:center; white-space:nowrap;">
        <button class="tbl-btn" onclick="viewPartyProfile(${index})">View</button>
        <button class="tbl-btn" onclick="openEditPartyModal(${index})">Update</button>
        <button class="tbl-btn danger" onclick="deleteParty(${index})">Del</button>
      </td>
    </tr>
  `).join('') : `<tr><td colspan="5" class="empty-state">No parties found</td></tr>`;
}

function filterParties() {
  renderParties();
}

// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ PARTY ITEMS HELPERS Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
function calcNextDuration(refillingDateStr) {
  if (!refillingDateStr) return '';
  const d = new Date(refillingDateStr);
  if (isNaN(d)) return '';
  d.setFullYear(d.getFullYear() + 1);
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
}

function onPartyItemRefillingChange(input) {
  const row = input.closest('.party-item-row');
  const nextInput = row.querySelector('.party-item-next');
  if (nextInput) nextInput.value = calcNextDuration(input.value);
}

function addPartyItemRow() {
  const container = document.getElementById('partyItemsContainer');
  if (!container) return;
  const idx = container.children.length;
  const row = document.createElement('div');
  row.className = 'party-item-row party-item-row-grid';
  row.innerHTML = `
    <input class="party-item-name" placeholder="Item name / description" style="background:var(--bg-card); border:1px solid var(--border); color:var(--text-primary); padding:0.4rem 0.6rem; border-radius:var(--radius-sm); font-size:0.78rem; outline:none; width:100%;" />
    <div>
      <div style="font-size:0.62rem; color:var(--text-muted); margin-bottom:2px;">Refilling Date</div>
      <input type="date" class="party-item-refilling" onchange="onPartyItemRefillingChange(this)" style="background:var(--bg-card); border:1px solid var(--border); color:var(--text-primary); padding:0.4rem 0.5rem; border-radius:var(--radius-sm); font-size:0.75rem; outline:none; width:100%;" />
    </div>
    <div>
      <div style="font-size:0.62rem; color:var(--text-muted); margin-bottom:2px;">Next Duration Date</div>
      <input type="date" class="party-item-next" readonly style="background:rgba(255,255,255,0.04); border:1px solid var(--border); color:var(--accent2); padding:0.4rem 0.5rem; border-radius:var(--radius-sm); font-size:0.75rem; outline:none; width:100%; cursor:default;" />
    </div>
    <button type="button" onclick="this.closest('.party-item-row').remove()" style="background:rgba(239,68,68,0.12); border:1px solid rgba(239,68,68,0.3); color:var(--red); border-radius:var(--radius-sm); padding:0.3rem 0.6rem; font-size:0.8rem; cursor:pointer; flex-shrink:0;">&#10005;</button>
  `;
  container.appendChild(row);
}

function openAddPartyModal() {
  additionalAddressCount = 1; // Reset counter
  showModal(`
    <div class="modal-title">+ Add New Party</div>
    <div class="modal-form-grid" style="margin-bottom:0.75rem;">
      <div>
        <div class="form-group">
          <label>Party Name <span style="color:var(--red)">*</span></label>
          <input id="np_party_name" placeholder="Enter company or individual name" autofocus />
        </div>
        <div class="form-group">
          <label>Email ID <span style="color:var(--red)">*</span></label>
          <input id="np_party_email" type="email" placeholder="email@example.com" />
        </div>
        <div class="form-group">
          <label>Phone Number <span style="color:var(--red)">*</span></label>
          <input id="np_party_phone" type="tel" placeholder="10-digit mobile number" maxlength="10" />
        </div>
      </div>
      <div>
        <div class="form-group">
          <label>GSTIN <span style="color:var(--red)">*</span></label>
          <input id="np_party_gstin" placeholder="15-character GSTIN" style="text-transform:uppercase" />
        </div>
        <div class="form-group">
          <label>GST Type <span style="color:var(--red)">*</span></label>
          <select id="np_party_gst_type" style="width:100%; background:var(--bg-card); border:1px solid var(--border); color:var(--text-primary); padding:0.45rem; border-radius:var(--radius-sm); outline:none;">
            <option value="Regular">Regular</option>
            <option value="Composition">Composition</option>
            <option value="Unregistered">Unregistered</option>
            <option value="Consumer">Consumer</option>
          </select>
        </div>
        <div class="form-group">
          <label>State <span style="color:var(--red)">*</span></label>
          <select id="np_party_state" style="width:100%; background:var(--bg-card); border:1px solid var(--border); color:var(--text-primary); padding:0.45rem; border-radius:var(--radius-sm); outline:none;">
            ${getIndianStatesOptions()}
          </select>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label>Billing Address <span style="color:var(--red)">*</span></label>
      <textarea id="np_party_billing" rows="2" placeholder="Full billing address" oninput="syncShippingAddress()"></textarea>
    </div>

    <div class="form-group" style="margin-top:0.4rem; margin-bottom:0.4rem;">
      <label style="display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
        <input type="checkbox" id="np_party_same_address" onchange="toggleSameAddress()" style="width:auto; cursor:pointer;" />
        <span style="font-size:0.75rem; font-weight:500; color:var(--text-secondary)">Shipping Address same as Billing Address</span>
      </label>
    </div>

    <div class="form-group" id="shippingAddressWrapper">
      <label>Primary Shipping Address <span style="color:var(--red)">*</span></label>
      <textarea id="np_party_shipping" rows="2" placeholder="Primary shipping address"></textarea>
    </div>

    <div id="additionalShippingContainer" style="max-height:120px; overflow-y:auto; padding-right:5px;"></div>

    <div style="margin-top:0.6rem; display:flex; justify-content:flex-start;">
      <button type="button" class="btn-secondary" style="font-size:0.72rem; padding:0.35rem 0.75rem;" onclick="addAdditionalAddressField()">+ Add Shipping Address</button>
    </div>

    <!-- PARTY ITEMS SECTION -->
    <div style="margin-top:1.25rem; border-top:1px solid var(--border); padding-top:1rem;">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.6rem;">
        <div style="font-size:0.78rem; font-weight:700; color:var(--text-primary); display:flex; align-items:center; gap:0.5rem;">
          <span style="font-size:1rem;">&#128230;</span> Party Items
          <span style="font-size:0.65rem; color:var(--text-muted); font-weight:400;">(Refilling schedule per item)</span>
        </div>
        <button type="button" class="btn-secondary" style="font-size:0.72rem; padding:0.35rem 0.75rem;" onclick="addPartyItemRow()">+ Add Item</button>
      </div>
      <div style="font-size:0.68rem; color:var(--text-muted); margin-bottom:0.5rem; padding:0.4rem 0.6rem; background:rgba(255,255,255,0.02); border-radius:var(--radius-sm); border:1px solid var(--border);">
        &#9432;&nbsp; Next Duration Date is automatically set to <strong>1 year &minus; 1 day</strong> after the Refilling Date.
      </div>
      <div id="partyItemsContainer"></div>
    </div>

    <div class="modal-actions" style="margin-top:1.25rem">
      <button class="btn-secondary" onclick="closeModal(null)">Cancel</button>
      <button class="btn-primary" onclick="saveParty()">Add Party</button>
    </div>
  `);
}

function saveParty() {
  const name = document.getElementById('np_party_name').value.trim();
  const email = document.getElementById('np_party_email').value.trim();
  const phone = document.getElementById('np_party_phone').value.trim();
  const gstin = document.getElementById('np_party_gstin').value.trim().toUpperCase();
  const gstType = document.getElementById('np_party_gst_type').value;
  const state = document.getElementById('np_party_state').value;
  const billingAddress = document.getElementById('np_party_billing').value.trim();
  const primaryShipping = document.getElementById('np_party_shipping').value.trim();

  if (!name || !email || !phone || !gstin || !billingAddress || !primaryShipping) {
    toast('Please fill in all required fields', 'error');
    return;
  }

  // GSTIN Pattern: 15-character Indian standard
  const gstinPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  if (!gstinPattern.test(gstin)) {
    toast('Invalid GSTIN format. Must be a valid 15-character Indian GSTIN.', 'error');
    return;
  }

  // Phone Pattern: 10-digit number
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    toast('Invalid Phone Number. Must be exactly 10 digits.', 'error');
    return;
  }

  // Email Pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    toast('Invalid Email ID format.', 'error');
    return;
  }

  // Duplicate Check
  const exists = (DATA.parties || []).some(p => p.gstin === gstin);
  if (exists) {
    toast('A party with this GSTIN is already registered', 'error');
    return;
  }

  // Scrape dynamic extra shipping addresses
  const extraAddresses = [];
  const extraInputs = document.querySelectorAll('.extra-shipping-address');
  extraInputs.forEach(input => {
    const val = input.value.trim();
    if (val) extraAddresses.push(val);
  });

  const shippingAddresses = [primaryShipping, ...extraAddresses];

  // Scrape party items
  const partyItems = [];
  document.querySelectorAll('.party-item-row').forEach(row => {
    const itemName = (row.querySelector('.party-item-name')?.value || '').trim();
    const refilling = row.querySelector('.party-item-refilling')?.value || '';
    const nextDuration = row.querySelector('.party-item-next')?.value || '';
    if (itemName) partyItems.push({ name: itemName, refillingDate: refilling, nextDurationDate: nextDuration });
  });

  const newParty = {
    name,
    gstin,
    gstType,
    state,
    phone,
    email,
    billingAddress,
    shippingAddresses,
    items: partyItems
  };

  if (!DATA.parties) DATA.parties = [];
  DATA.parties.push(newParty);
  
  closeModal(null);
  renderParties();
  toast(`Party "${name}" added successfully!`, 'success');
  
  saveLocalData();
}

function openEditPartyModal(index) {
  const party = DATA.parties[index];
  if (!party) return;
  
  openAddPartyModal();
  
  document.querySelector('.modal-title').innerHTML = '&#9999; Edit Party';
  document.getElementById('np_party_name').value = party.name;
  document.getElementById('np_party_email').value = party.email || '';
  document.getElementById('np_party_phone').value = party.phone;
  document.getElementById('np_party_gstin').value = party.gstin;
  document.getElementById('np_party_gst_type').value = party.gstType || 'Regular';
  document.getElementById('np_party_state').value = party.state || '';
  document.getElementById('np_party_billing').value = party.billingAddress || '';
  document.getElementById('np_party_shipping').value = party.shippingAddresses?.[0] || '';
  
  if (party.shippingAddresses && party.shippingAddresses.length > 1) {
    for (let i = 1; i < party.shippingAddresses.length; i++) {
      addAdditionalAddressField();
      const extraInputs = document.querySelectorAll('.extra-shipping-address');
      extraInputs[extraInputs.length - 1].value = party.shippingAddresses[i];
    }
  }
  
  const itemsContainer = document.getElementById('partyItemsContainer');
  itemsContainer.innerHTML = '';
  if (party.items && party.items.length > 0) {
    party.items.forEach(item => {
      addPartyItemRow();
      const rows = document.querySelectorAll('.party-item-row');
      const lastRow = rows[rows.length - 1];
      lastRow.querySelector('.party-item-name').value = item.name;
      lastRow.querySelector('.party-item-refilling').value = item.refillingDate;
      lastRow.querySelector('.party-item-next').value = item.nextDurationDate || '';
    });
  }
  
  const saveBtn = document.querySelector('.modal-actions .btn-primary');
  saveBtn.textContent = 'Update Party';
  saveBtn.setAttribute('onclick', `updateParty(${index})`);
}

function updateParty(index) {
  const name = document.getElementById('np_party_name').value.trim();
  const email = document.getElementById('np_party_email').value.trim();
  const phone = document.getElementById('np_party_phone').value.trim();
  const gstin = document.getElementById('np_party_gstin').value.trim().toUpperCase();
  const gstType = document.getElementById('np_party_gst_type').value;
  const state = document.getElementById('np_party_state').value;
  const billingAddress = document.getElementById('np_party_billing').value.trim();
  const primaryShipping = document.getElementById('np_party_shipping').value.trim();

  if (!name || !email || !phone || !gstin || !billingAddress || !primaryShipping) {
    toast('Please fill in all required fields', 'error');
    return;
  }

  const exists = DATA.parties.some((p, i) => p.gstin === gstin && i !== index);
  if (exists) {
    toast('Another party with this GSTIN is already registered', 'error');
    return;
  }

  const extraAddresses = [];
  document.querySelectorAll('.extra-shipping-address').forEach(input => {
    const val = input.value.trim();
    if (val) extraAddresses.push(val);
  });
  const shippingAddresses = [primaryShipping, ...extraAddresses];

  const partyItems = [];
  document.querySelectorAll('.party-item-row').forEach(row => {
    const itemName = (row.querySelector('.party-item-name')?.value || '').trim();
    const refilling = row.querySelector('.party-item-refilling')?.value || '';
    const nextDuration = row.querySelector('.party-item-next')?.value || '';
    if (itemName) partyItems.push({ name: itemName, refillingDate: refilling, nextDurationDate: nextDuration });
  });

  DATA.parties[index] = {
    name, gstin, gstType, state, phone, email,
    billingAddress, shippingAddresses, items: partyItems
  };

  closeModal(null);
  renderParties();
  toast('Party updated successfully!', 'success');
  saveLocalData();
}

function deleteParty(index) {
  const party = DATA.parties[index];
  if (!party) return;
  
  if (confirm(`Are you sure you want to delete the party "${party.name}"?`)) {
    DATA.parties.splice(index, 1);
    renderParties();
    toast(`Party "${party.name}" removed`, 'warning');
    saveLocalData();
  }
}

function viewPartyProfile(index) {
  const p = DATA.parties[index];
  if (!p) return;

  const typeColors = {
    Regular: 'var(--green)',
    Composition: 'var(--yellow)',
    Unregistered: 'var(--text-secondary)',
    Consumer: 'var(--accent2)'
  };
  const typeColor = typeColors[p.gstType] || 'var(--text-secondary)';

  const shippingHtml = (p.shippingAddresses || []).map((addr, i) => `
    <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-sm); padding:0.75rem; margin-bottom:0.5rem; font-size:0.78rem; position:relative;">
      <span style="position:absolute; top:6px; right:8px; font-size:0.58rem; text-transform:uppercase; font-weight:700; color:${i === 0 ? 'var(--green)' : 'var(--text-secondary)'}; background:rgba(255,255,255,0.03); padding:2px 6px; border-radius:10px;">
        ${i === 0 ? 'Primary' : `Address ${i + 1}`}
      </span>
      <div style="margin-top:0.25rem; color:var(--text-primary); line-height:1.4;">${addr}</div>
    </div>
  `).join('');

  showModal(`
    <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
      <div style="width:44px; height:44px; border-radius:50%; background:linear-gradient(135deg, var(--accent2), var(--accent3)); display:flex; align-items:center; justify-content:center; font-size:1.4rem; font-weight:800; color:#fff;">
        ${p.name.charAt(0).toUpperCase()}
      </div>
      <div>
        <div style="font-size:1.15rem; font-weight:700; color:var(--text-primary); line-height:1.2;">${p.name}</div>
        <div style="display:flex; align-items:center; gap:0.5rem; margin-top:0.25rem; font-size:0.75rem;">
          <code style="color:var(--accent)">${p.gstin}</code>
          <span style="background:${typeColor}20; color:${typeColor}; border:1px solid ${typeColor}40; padding:1px 6px; border-radius:10px; font-size:0.62rem; font-weight:700;">
            ${p.gstType}
          </span>
        </div>
      </div>
    </div>

    <!-- DETAILS GRID -->
    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.75rem; background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:var(--radius-sm); padding:0.75rem; margin-bottom:1rem; font-size:0.8rem;">
      <div>
        <div style="color:var(--text-muted); font-size:0.65rem; text-transform:uppercase; font-weight:600; margin-bottom:2px;">State</div>
        <div style="font-weight:600; color:var(--text-primary);">${p.state || '&mdash;'}</div>
      </div>
      <div>
        <div style="color:var(--text-muted); font-size:0.65rem; text-transform:uppercase; font-weight:600; margin-bottom:2px;">Phone</div>
        <div style="font-weight:600; color:var(--text-primary);">${p.phone}</div>
      </div>
      <div>
        <div style="color:var(--text-muted); font-size:0.65rem; text-transform:uppercase; font-weight:600; margin-bottom:2px;">Email ID</div>
        <div style="font-weight:600; color:var(--text-primary); overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${p.email || ''}">${p.email || '&mdash;'}</div>
      </div>
    </div>

    <!-- ADDRESSES CONTAINER -->
    <div class="modal-form-grid" style="margin-bottom:1rem;">
      <div>
        <div style="font-size:0.72rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.4rem; letter-spacing:0.05em;">&#127968; Billing Address</div>
        <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-sm); padding:0.75rem; font-size:0.78rem; color:var(--text-primary); line-height:1.4; min-height:100px;">
          ${p.billingAddress || 'No billing address registered.'}
        </div>
      </div>
      <div>
        <div style="font-size:0.72rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.4rem; letter-spacing:0.05em;">&#128666; Shipping Addresses (${p.shippingAddresses ? p.shippingAddresses.length : 0})</div>
        <div style="max-height:180px; overflow-y:auto; padding-right:4px;">
          ${shippingHtml || '<div class="empty-state" style="padding:1rem;">No shipping addresses.</div>'}
        </div>
      </div>
    </div>

    ${(p.items && p.items.length > 0) ? `
    <!-- PARTY ITEMS TABLE -->
    <div style="margin-bottom:1rem;">
      <div style="font-size:0.72rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.5rem; letter-spacing:0.05em;">&#128230; Party Items (${p.items.length})</div>
      <div style="border:1px solid var(--border); border-radius:var(--radius-sm); overflow:hidden;">
        <table style="width:100%; border-collapse:collapse; font-size:0.76rem;">
          <thead>
            <tr style="background:rgba(255,255,255,0.04);">
              <th style="padding:0.5rem 0.75rem; text-align:left; color:var(--text-muted); font-weight:600; font-size:0.65rem; text-transform:uppercase;">Item</th>
              <th style="padding:0.5rem 0.75rem; text-align:left; color:var(--text-muted); font-weight:600; font-size:0.65rem; text-transform:uppercase;">Refilling Date</th>
              <th style="padding:0.5rem 0.75rem; text-align:left; color:var(--text-muted); font-weight:600; font-size:0.65rem; text-transform:uppercase;">Next Duration Date</th>
              <th style="padding:0.5rem 0.75rem; text-align:left; color:var(--text-muted); font-weight:600; font-size:0.65rem; text-transform:uppercase;">Status</th>
            </tr>
          </thead>
          <tbody>
            ${p.items.map((item, i) => {
              const today = new Date(); today.setHours(0,0,0,0);
              const next = item.nextDurationDate ? new Date(item.nextDurationDate) : null;
              let statusColor = 'var(--text-muted)';
              let statusLabel = 'No date';
              if (next) {
                const daysLeft = Math.ceil((next - today) / 86400000);
                if (daysLeft < 0) { statusColor = 'var(--red)'; statusLabel = 'Expired'; }
                else if (daysLeft <= 30) { statusColor = 'var(--yellow)'; statusLabel = daysLeft + 'd left'; }
                else { statusColor = 'var(--green)'; statusLabel = daysLeft + 'd left'; }
              }
              return `<tr style="border-top:1px solid var(--border); background:${i%2===0?'transparent':'rgba(255,255,255,0.01)'}">
                <td style="padding:0.5rem 0.75rem; color:var(--text-primary); font-weight:600;">${item.name}</td>
                <td style="padding:0.5rem 0.75rem; color:var(--text-secondary);">${item.refillingDate || 'Ã¢â‚¬â€'}</td>
                <td style="padding:0.5rem 0.75rem; color:var(--accent2);">${item.nextDurationDate || 'Ã¢â‚¬â€'}</td>
                <td style="padding:0.5rem 0.75rem;"><span style="color:${statusColor}; font-weight:700; font-size:0.72rem;">${statusLabel}</span></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>` : ''}

    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal(null)">Close</button>
    </div>
  `);
}



// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ SYSTEM SETTINGS Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
function loadSettingsUI() {
  const thresholdEl = document.getElementById('defaultThreshold');
  if (thresholdEl) thresholdEl.value = CONFIG.defaultThreshold || 10;
  
  const gstRateEl = document.getElementById('gstRate');
  if (gstRateEl) gstRateEl.value = CONFIG.gstRate !== undefined ? CONFIG.gstRate : 18;
  
  const geminiKeyEl = document.getElementById('geminiKey');
  if (geminiKeyEl) geminiKeyEl.value = CONFIG.geminiKey || '';
  
  const botGreetingEl = document.getElementById('botGreeting');
  if (botGreetingEl) {
    botGreetingEl.value = localStorage.getItem('botGreeting') || "Hello Admin! I am NF FireBot, your Live Intelligence Assistant. How can I help you manage the system today?";
  }
}

function saveChatbotConfig() {
  CONFIG.geminiKey = document.getElementById('geminiKey').value.trim();
  localStorage.setItem('geminiKey', CONFIG.geminiKey);
  
  const botGreetingEl = document.getElementById('botGreeting');
  if (botGreetingEl) {
    localStorage.setItem('botGreeting', botGreetingEl.value.trim());
  }
  toast('Chatbot settings saved', 'success');
}

function saveInvoiceConfig() {
  const val = document.getElementById('gstRate').value;
  CONFIG.gstRate = val !== '' ? parseFloat(val) : 18;
  localStorage.setItem('gstRate', CONFIG.gstRate);

  const thresholdVal = document.getElementById('defaultThreshold').value;
  CONFIG.defaultThreshold = thresholdVal !== '' ? parseInt(thresholdVal) : 10;
  localStorage.setItem('defaultThreshold', CONFIG.defaultThreshold);
  
  if (confirm('Do you want to update the GST rate for all existing inventory items and sales to ' + CONFIG.gstRate + '%?')) {
    DATA.inventory.forEach(p => p.gstRate = CONFIG.gstRate);
    DATA.sales.forEach(s => {
      s.items.forEach(i => i.gstRate = CONFIG.gstRate);
    });
    saveLocalData();
    toast('Settings saved and GST rate updated for all items', 'success');
  } else {
    toast('Invoice and threshold settings saved', 'success');
  }
}
function clearSalesCache() {
  if(confirm('Are you sure you want to clear the sales cache? This will delete all sales history.')){
    DATA.sales = [];
    saveLocalData();
    renderDashboard();
    updateBadges();
    toast('Sales cache cleared','warning');
  }
}

function resetInventoryAlerts() {
  DATA.inventory.forEach(i=>i.alerted=false);
  saveLocalData();
  toast('Alerts reset','warning');
}

function exportAllData() {
  const blob=new Blob([JSON.stringify(DATA,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=`nffire_data_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  toast('All data exported as JSON','success');
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ MODAL ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function showModal(html) {
  document.getElementById('modalContent').innerHTML=html;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden'; // Fix mobile fixed position jump
}
function closeModal(e) {
  if(e&&e.target!==document.getElementById('modalOverlay')) return;
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ TOAST ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function toast(msg, type='') {
  const el=document.createElement('div');
  el.className=`toast ${type}`;
  el.innerHTML=`<span>${msg}</span>`;
  document.getElementById('toastContainer').appendChild(el);
  setTimeout(()=>el.remove(), 4000);
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ ALERT BANNER ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function showAlert(msg) {
  document.getElementById('alertText').textContent=msg;
  document.getElementById('alertBanner').style.display='flex';
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ UTILITIES ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function formatNum(n) {
  if(n>=10000000) return (n/10000000).toFixed(1)+'Cr';
  if(n>=100000) return (n/100000).toFixed(1)+'L';
  if(n>=1000) return (n/1000).toFixed(1)+'K';
  return n.toLocaleString('en-IN');
}

function formatCurrencyExact(n) {
  const num = parseFloat(n);
  return isNaN(num) ? '0' : num.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

function animateNumber(id, from, to, format) {
  const el=document.getElementById(id);
  if(!el) return;
  const duration=800, steps=40, inc=(to-from)/steps;
  let cur=from, i=0;
  const t=setInterval(()=>{
    cur+=inc; i++;
    el.innerHTML=format?format(cur):Math.round(cur);
    if(i>=steps){el.innerHTML=format?format(to):to;clearInterval(t);}
  }, duration/steps);
}

function downloadCSV(filename, headers, rows) {
  const csv=[headers.join(','),...rows.map(r=>r.map(v=>`"${v}"`).join(','))].join('\n');
  const blob=new Blob([csv],{type:'text/csv'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=filename; a.click();
  toast(`${filename} downloaded`,'success');
}

function loadConfig() {
  const gasUrlEl = document.getElementById('gasUrl');
  if (gasUrlEl) {
    // Read URL from GAS_API module (single source of truth)
    gasUrlEl.value = GAS_API.getUrl();
  }
}

function saveGasConfig() {
  const gasUrlEl = document.getElementById('gasUrl');
  if (gasUrlEl) {
    // Persist via GAS_API module
    GAS_API.setUrl(gasUrlEl.value);
    toast('Google Apps Script settings saved Ã¢Å“â€¦', 'success');
    syncToBackend();
  }
}

let syncTimeout = null;
function syncToBackend() {
  // Guard: only run if GAS is configured (delegated to GAS_API module)
  if (!GAS_API.isConfigured()) return;

  clearTimeout(syncTimeout);
  // Debounce delay sourced from GAS_API.DEBOUNCE_MS (default 1500ms)
  syncTimeout = setTimeout(async () => {
    const statusEl = document.getElementById('gasStatus');
    if (statusEl) {
      statusEl.innerHTML = `<span class="status-dot" style="background-color: #ffaa00; animation: core-pulse 1.2s infinite;"></span> Syncing...`;
      statusEl.style.borderColor = 'rgba(255,170,0,0.3)';
      statusEl.style.color = '#ffaa00';
    }

    // Delegate all save logic to GAS_API module
    const success = await GAS_API.saveAll(DATA);
    if (success) {
      if (statusEl) {
        statusEl.innerHTML = `<span class="status-dot" style="background-color: var(--green);"></span> Server OK`;
        statusEl.style.borderColor = 'rgba(46, 213, 115, 0.3)';
        statusEl.style.color = 'var(--green)';
      }
    } else {
      console.error('[Admin] Sync to GAS backend failed.');
      if (statusEl) {
        statusEl.innerHTML = `<span class="status-dot" style="background-color: var(--red);"></span> Server Error`;
        statusEl.style.borderColor = 'rgba(255, 71, 87, 0.3)';
        statusEl.style.color = 'var(--red)';
      }
    }
  }, GAS_API.DEBOUNCE_MS);
}

function initSidebarToggle() {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('sidebarToggle');
  const hamburgerBtn = document.getElementById('topbarHamburger');
  const backdrop = document.getElementById('sidebarBackdrop');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('open');
    if (backdrop) backdrop.classList.add('visible');
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('visible');
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openSidebar();
    });
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeSidebar();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      e.stopPropagation();
      closeSidebar();
    });
  }

  // Close sidebar on navigation item click (mobile overlay navigation)
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        closeSidebar();
      }
    });
  });

  // Handle click outside to close
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('open')) {
      if (!sidebar.contains(e.target) && (!hamburgerBtn || !hamburgerBtn.contains(e.target))) {
        closeSidebar();
      }
    }
  });
}

// ============================================================
// SPEAK-TO-SPEECH (TTS & STT) AND FLOATING ADMIN CHATBOT ASSISTANT
// ============================================================

let adminChatbotOpen = false;
let adminChatMute = localStorage.getItem('adminChatMute') === null ? true : localStorage.getItem('adminChatMute') === 'true';
let adminRecognition = null;
let adminIsListening = false;
let adminChatHistory = [];

const ADMIN_SUGGESTIONS = [
  "ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã…Â  Overall Admin Report",
  "ÃƒÂ°Ã…Â¸Ã¢â‚¬â„¢Ã‚Â° Sales & Revenue Status",
  "ÃƒÂ°Ã…Â¸Ã‚Â§Ã‚Â¯ Inventory & Stock Alerts",
  "ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã¢â‚¬Â¹ Quotes & Vendors Summary"
];

function initAdminChatbot() {
  updateAdminMuteButtonUI();
  
  // Show greeting
  const greeting = localStorage.getItem('botGreeting') || "Hello Admin! ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂºÃ‚Â¡ÃƒÂ¯Ã‚Â¸Ã‚Â I am NF FireBot, your Live Intelligence Assistant. How can I help you manage the system today? You can ask me for overall reports, sales pipeline updates, quote compliance, or vendor details.";
  addAdminChatBubble(greeting, "bot");
  renderAdminSuggestions(ADMIN_SUGGESTIONS);
  
  // Ensure voice synthesiser is pre-warmed
  if (window.speechSynthesis && window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }
}

function updateAdminMuteButtonUI() {
  const btn = document.getElementById('adminChatMuteBtn');
  if (btn) {
    btn.textContent = adminChatMute ? 'ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂÃ¢â‚¬Â¡' : 'ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂÃ…Â ';
    btn.title = adminChatMute ? 'Unmute voice responses' : 'Mute voice responses';
  }
}

function toggleAdminChatMute() {
  adminChatMute = !adminChatMute;
  localStorage.setItem('adminChatMute', adminChatMute);
  updateAdminMuteButtonUI();
  if (adminChatMute) {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    toast('Voice responses muted ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂÃ¢â‚¬Â¡', '');
  } else {
    toast('Voice responses enabled! ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂÃ…Â ', 'success');
    speakAdminBotResponse("Voice responses enabled!");
  }
}

function openAdminChatbot() {
  document.getElementById('adminChatbotContainer').classList.add('open');
  document.getElementById('adminChatbotFab').classList.add('hidden');
  const msgs = document.getElementById('adminChatMessages');
  msgs.scrollTop = msgs.scrollHeight;
}

function closeAdminChatbot() {
  document.getElementById('adminChatbotContainer').classList.remove('open');
  document.getElementById('adminChatbotFab').classList.remove('hidden');
}

function adminChatKeydown(event) {
  if (event.key === 'Enter') {
    sendAdminChatMessage();
  }
}

function addAdminChatBubble(text, sender, htmlContent = null) {
  const container = document.getElementById('adminChatMessages');
  if (!container) return;
  
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${sender}`;
  
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble';
  
  if (htmlContent) {
    bubble.innerHTML = htmlContent;
  } else {
    // Process simple markdown (bold only)
    let processedText = text
      .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
      .replace(/\n/g, '<br/>');
    bubble.innerHTML = processedText;
  }
  
  const time = document.createElement('div');
  time.className = 'chat-time';
  time.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  msgDiv.appendChild(bubble);
  msgDiv.appendChild(time);
  container.appendChild(msgDiv);
  
  container.scrollTop = container.scrollHeight;
}

function renderAdminSuggestions(chips) {
  const container = document.getElementById('adminChatSuggestions');
  if (!container) return;
  
  container.innerHTML = chips.map(c => `
    <button class="suggestion-chip" onclick="handleAdminSuggestionClick('${c.replace(/'/g, "\\'")}')">${c}</button>
  `).join('');
}

function handleAdminSuggestionClick(chipText) {
  // Strip emojis for prompt sending
  const cleanPrompt = chipText.replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDFFF]/g, '').trim();
  const input = document.getElementById('adminChatInput');
  if (input) {
    input.value = cleanPrompt;
    sendAdminChatMessage();
  }
}

function showAdminTypingIndicator() {
  const container = document.getElementById('adminChatMessages');
  if (!container) return;
  
  const div = document.createElement('div');
  div.className = 'chat-msg bot typing-indicator-wrapper';
  div.id = 'adminTypingIndicator';
  div.innerHTML = `
    <div class="chat-bubble typing-indicator">
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    </div>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function removeAdminTypingIndicator() {
  const el = document.getElementById('adminTypingIndicator');
  if (el) el.remove();
}

function sendAdminChatMessage() {
  const input = document.getElementById('adminChatInput');
  if (!input) return;
  const msg = input.value.trim();
  if (!msg) return;
  
  input.value = '';
  addAdminChatBubble(msg, 'user');
  adminChatHistory.push({ role: 'user', text: msg });
  
  showAdminTypingIndicator();
  
  setTimeout(async () => {
    removeAdminTypingIndicator();
    await processAdminBotResponse(msg);
  }, 750);
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ TEXT-TO-SPEECH (TTS) ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function speakAdminBotResponse(text) {
  if (adminChatMute) return;
  if (!window.speechSynthesis) return;

  // Cancel any active speech first
  window.speechSynthesis.cancel();

  // Clean Markdown & HTML tokens for perfect audio natural speech
  let cleanText = text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢\s*/g, '')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/&#8377;/g, 'Rupees ')
    .replace(/ÃƒÂ¢Ã…â€œÃ¢â‚¬Â¢/g, 'times ')
    .replace(/ÃƒÂ¢Ã…Â¾Ã‚Â¤/g, '')
    .trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  const voices = window.speechSynthesis.getVoices();
  if (voices && voices.length > 0) {
    // Prefer Indian English voice if present, else standard English
    const preferredVoice = voices.find(v => v.lang.includes('en-IN') || v.lang.includes('en-GB') || v.lang.includes('en-US'));
    if (preferredVoice) utterance.voice = preferredVoice;
  }
  
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  
  window.speechSynthesis.speak(utterance);
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ SPEECH-TO-TEXT (STT) ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function initAdminVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.warn('Speech recognition not supported in this browser.');
    return false;
  }
  adminRecognition = new SpeechRecognition();
  adminRecognition.continuous = false;
  adminRecognition.interimResults = false;
  adminRecognition.lang = 'en-IN'; // Indian English language optimization

  adminRecognition.onstart = () => {
    adminIsListening = true;
    const micBtn = document.getElementById('adminChatMicBtn');
    if (micBtn) {
      micBtn.classList.add('active');
      micBtn.innerHTML = 'ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂÃ‚Â´';
    }
    const chatInput = document.getElementById('adminChatInput');
    if (chatInput) {
      chatInput.placeholder = "Listening...";
    }
  };

  adminRecognition.onend = () => {
    adminIsListening = false;
    const micBtn = document.getElementById('adminChatMicBtn');
    if (micBtn) {
      micBtn.classList.remove('active');
      micBtn.innerHTML = 'ÃƒÂ°Ã…Â¸Ã…Â½Ã¢â€žÂ¢ÃƒÂ¯Ã‚Â¸Ã‚Â';
    }
    const chatInput = document.getElementById('adminChatInput');
    if (chatInput) {
      chatInput.placeholder = "Ask for overall status, sales, inventory...";
    }
  };

  adminRecognition.onerror = (e) => {
    console.error('Speech recognition error:', e.error);
    adminIsListening = false;
    if (e.error === 'not-allowed') {
      toast('Microphone access denied', 'error');
    } else {
      toast(`Voice error: ${e.error}`, 'error');
    }
  };

  adminRecognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    const chatInput = document.getElementById('adminChatInput');
    if (chatInput && transcript) {
      chatInput.value = transcript;
      sendAdminChatMessage();
    }
  };

  return true;
}

function toggleAdminVoiceInput() {
  if (!adminRecognition) {
    const supported = initAdminVoiceRecognition();
    if (!supported) {
      toast('Voice recognition not supported in this browser.', 'error');
      return;
    }
  }

  if (adminIsListening) {
    adminRecognition.stop();
  } else {
    try {
      adminRecognition.start();
    } catch (e) {
      console.error(e);
    }
  }
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ ADMIN SYSTEM REPORT BUILDERS ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬

// 1. Overall System Report Card
function generateAdminOverallReportHTML() {
  // Inventory metrics
  const totalSKUs = DATA.inventory.length;
  let totalStock = 0;
  let stockValuation = 0;
  let lowStockCount = 0;
  let outOfStockCount = 0;
  DATA.inventory.forEach(i => {
    totalStock += i.stock;
    stockValuation += (i.stock * i.price);
    if (i.stock === 0) outOfStockCount++;
    else if (i.stock <= i.threshold) lowStockCount++;
  });
  
  // Sales Pipeline
  const activeSales = DATA.sales.filter(s => s.status !== 'Cancelled');
  const totalRevenue = activeSales.reduce((a, b) => a + b.amount, 0);
  const orderCount = DATA.sales.length;
  const pendingOrders = DATA.sales.filter(s => s.status === 'Pending').length;
  const confirmedOrders = DATA.sales.filter(s => s.status === 'Confirmed').length;
  const shippedOrders = DATA.sales.filter(s => s.status === 'Shipped').length;
  const cancelledOrders = DATA.sales.filter(s => s.status === 'Cancelled').length;

  // Quotes Status
  const quoteCount = DATA.quotes.length;
  const pendingQuotes = DATA.quotes.filter(q => q.status === 'Draft' || q.status === 'Sent').length;
  const acceptedQuotes = DATA.quotes.filter(q => q.status === 'Accepted').length;
  const acceptedPct = quoteCount > 0 ? Math.round((acceptedQuotes / quoteCount) * 100) : 0;

  // Vendors
  const vendorCount = DATA.vendors.length;
  const avgRating = vendorCount > 0 ? (DATA.vendors.reduce((a, b) => a + b.rating, 0) / vendorCount).toFixed(1) : 'N/A';

  // Email Success rate
  const emailCount = DATA.emails.length;
  const deliveredEmails = DATA.emails.filter(e => e.status === 'Delivered').length;
  const deliveryPct = emailCount > 0 ? Math.round((deliveredEmails / emailCount) * 100) : 0;

  const html = `
    <div class="chat-report-card">
      <div class="report-header">
        <span class="report-title">ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã…Â  Admin Overall Status Report</span>
        <span class="report-time-badge">SYSTEM OVERVIEW</span>
      </div>
      
      <div class="report-divider"></div>
      
      <!-- STOCK VALUATION & REVENUE BAR -->
      <div style="margin: 0.25rem 0 0.5rem 0;">
        <div style="display:flex;justify-content:space-between;font-size:0.72rem;margin-bottom:0.25rem;">
          <span style="color:var(--text-secondary)">Email Success Rate</span>
          <b style="color:var(--accent3)">${deliveryPct}% Delivered</b>
        </div>
        <div class="report-progress-bg">
          <div class="report-progress-bar" style="width: ${deliveryPct}%; background: var(--accent3);"></div>
        </div>
      </div>
      
      <!-- GRID METRICS -->
      <div class="report-grid">
        <div class="report-grid-card">
          <div class="rgc-label">Total Revenue</div>
          <div class="rgc-val" style="color:var(--accent)">&#8377;${formatNum(totalRevenue)}</div>
        </div>
        <div class="report-grid-card">
          <div class="rgc-label">Total Sales</div>
          <div class="rgc-val">${orderCount} <span class="rgc-unit">Orders</span></div>
        </div>
        <div class="report-grid-card">
          <div class="rgc-label">Inventory Valuation</div>
          <div class="rgc-val">&#8377;${formatNum(stockValuation)}</div>
        </div>
        <div class="report-grid-card">
          <div class="rgc-label">Low/Out Stock</div>
          <div class="rgc-val" style="color:${lowStockCount + outOfStockCount > 0 ? 'var(--red)' : 'var(--green)'}">
            ${lowStockCount + outOfStockCount} <span class="rgc-unit">Items</span>
          </div>
        </div>
      </div>
      
      <div class="report-section-title"> Sales Pipeline Stages</div>
      <div style="font-size:0.7rem; display:grid; grid-template-columns:repeat(4, 1fr); gap:0.25rem; text-align:center; background:rgba(255,255,255,0.01); padding:0.4rem; border-radius:6px; border:1px solid var(--border);">
        <div><div style="color:var(--yellow)">${pendingOrders}</div><div style="font-size:0.58rem;color:var(--text-secondary)">Pending</div></div>
        <div><div style="color:var(--accent2)">${confirmedOrders}</div><div style="font-size:0.58rem;color:var(--text-secondary)">Confirm</div></div>
        <div><div style="color:var(--green)">${shippedOrders}</div><div style="font-size:0.58rem;color:var(--text-secondary)">Shipped</div></div>
        <div><div style="color:var(--red)">${cancelledOrders}</div><div style="font-size:0.58rem;color:var(--text-secondary)">Cancel</div></div>
      </div>
      
      <div class="report-section-title">ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã¢â‚¬Â¹ Quotes & Vendors Summary</div>
      <div class="report-list">
        <div class="report-stat-row">
          <span>ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã¢â‚¬Â¹ Active Quotes</span>
          <b class="report-badge">${quoteCount} in pipeline (${acceptedPct}% Accepted)</b>
        </div>
        <div class="report-stat-row">
          <span>ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â­ Certified Vendors</span>
          <b class="report-badge">${vendorCount} connected (${avgRating} ÃƒÂ¢Ã‹Å“Ã¢â‚¬Â¦ Rating)</b>
        </div>
        <div class="report-stat-row">
          <span>ÃƒÂ°Ã…Â¸Ã…Â¡Ã‚Â¨ Low Stock SKUs</span>
          <b class="report-badge" style="color:${lowStockCount > 0 ? 'var(--yellow)' : 'var(--text-secondary)'}">${lowStockCount} items</b>
        </div>
        <div class="report-stat-row">
          <span>ÃƒÂ¢Ã‚ÂÃ…â€™ Out of Stock SKUs</span>
          <b class="report-badge" style="color:${outOfStockCount > 0 ? 'var(--red)' : 'var(--text-secondary)'}">${outOfStockCount} items</b>
        </div>
      </div>
    </div>
  `;
  return { html, valuationText: `Our live pipeline tracks ${orderCount} total orders, generating &#8377;${formatNum(totalRevenue)} in revenue. In-memory inventory valuation stands at &#8377;${formatNum(stockValuation)} with ${lowStockCount + outOfStockCount} stock alerts. Our email CC automation reports a ${deliveryPct}% delivery rate.` };
}

// 2. Sales & Revenue Specific Report
function generateAdminSalesReportHTML() {
  const activeSales = DATA.sales.filter(s => s.status !== 'Cancelled');
  const totalRevenue = activeSales.reduce((a, b) => a + b.amount, 0);
  const pendingOrders = DATA.sales.filter(s => s.status === 'Pending').length;
  const confirmedOrders = DATA.sales.filter(s => s.status === 'Confirmed').length;
  const shippedOrders = DATA.sales.filter(s => s.status === 'Shipped').length;
  const cancelledOrders = DATA.sales.filter(s => s.status === 'Cancelled').length;

  const html = `
    <div class="chat-report-card">
      <div class="report-header">
        <span class="report-title">ÃƒÂ°Ã…Â¸Ã¢â‚¬â„¢Ã‚Â° Sales Pipeline & Revenue Report</span>
        <span class="report-time-badge">SALES REPORT</span>
      </div>
      <div class="report-divider"></div>
      
      <div class="report-grid">
        <div class="report-grid-card">
          <div class="rgc-label">Pipeline Revenue</div>
          <div class="rgc-val" style="color:var(--accent)">&#8377;${formatNum(totalRevenue)}</div>
        </div>
        <div class="report-grid-card">
          <div class="rgc-label">Total Orders</div>
          <div class="rgc-val">${DATA.sales.length} <span class="rgc-unit">Orders</span></div>
        </div>
      </div>

      <div class="report-section-title">ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã…Â  Pipeline Distribution</div>
      <div class="report-list">
        <div class="report-stat-row">
          <span>ÃƒÂ¢Ã‚ÂÃ‚Â³ Pending Confirmation</span>
          <b class="report-badge" style="color:var(--yellow)">${pendingOrders} orders</b>
        </div>
        <div class="report-stat-row">
          <span>ÃƒÂ¢Ã…Â¡Ã¢â€žÂ¢ÃƒÂ¯Ã‚Â¸Ã‚Â Confirmed & Processing</span>
          <b class="report-badge" style="color:var(--accent2)">${confirmedOrders} orders</b>
        </div>
        <div class="report-stat-row">
          <span>&#128666; Shipped & Completed</span>
          <b class="report-badge" style="color:var(--green)">${shippedOrders} orders</b>
        </div>
        <div class="report-stat-row">
          <span>ÃƒÂ¢Ã‚ÂÃ…â€™ Cancelled Orders</span>
          <b class="report-badge" style="color:var(--red)">${cancelledOrders} orders</b>
        </div>
      </div>
    </div>
  `;
  return { html, text: `Sales pipeline update: We have accumulated &#8377;${formatNum(totalRevenue)} in net revenue across ${DATA.sales.length} total orders. There are ${pendingOrders} pending confirmation and ${shippedOrders} have successfully shipped.` };
}

// 3. Inventory & Low Stock Specific Report
function generateAdminInventoryReportHTML() {
  const totalSKUs = DATA.inventory.length;
  let totalStock = 0;
  let stockValuation = 0;
  let lowStockCount = 0;
  let outOfStockCount = 0;
  DATA.inventory.forEach(i => {
    totalStock += i.stock;
    stockValuation += (i.stock * i.price);
    if (i.stock === 0) outOfStockCount++;
    else if (i.stock <= i.threshold) lowStockCount++;
  });

  const alerts = DATA.inventory.filter(i => i.stock <= i.threshold);
  const alertsHTML = alerts.length > 0 
    ? alerts.map(i => `
      <div class="report-item-alert ${i.stock === 0 ? 'danger' : 'warning'}">
        <span>&#128230; <b>${i.sku}</b>: ${i.name}</span>
        <b>${i.stock === 0 ? 'OUT' : i.stock + ' units'}</b>
      </div>`).join('')
    : '<div style="color:var(--green);font-size:0.7rem;">All catalog products healthy!</div>';

  const html = `
    <div class="chat-report-card">
      <div class="report-header">
        <span class="report-title">ÃƒÂ°Ã…Â¸Ã‚Â§Ã‚Â¯ Inventory & Stock Alerts</span>
        <span class="report-time-badge">INVENTORY STATUS</span>
      </div>
      <div class="report-divider"></div>
      
      <div class="report-grid">
        <div class="report-grid-card">
          <div class="rgc-label">Catalog Size</div>
          <div class="rgc-val">${totalSKUs} <span class="rgc-unit">SKUs</span></div>
        </div>
        <div class="report-grid-card">
          <div class="rgc-label">Total Units</div>
          <div class="rgc-val">${totalStock} <span class="rgc-unit">Units</span></div>
        </div>
        <div class="report-grid-card">
          <div class="rgc-label">Valuation</div>
          <div class="rgc-val">&#8377;${formatNum(stockValuation)}</div>
        </div>
        <div class="report-grid-card">
          <div class="rgc-label">Alert Count</div>
          <div class="rgc-val" style="color:${lowStockCount + outOfStockCount > 0 ? 'var(--red)' : 'var(--green)'}">
            ${lowStockCount + outOfStockCount} <span class="rgc-unit">SKUs</span>
          </div>
        </div>
      </div>

      <div class="report-section-title" style="color:var(--red);">ÃƒÂ¢Ã…Â¡Ã‚Â ÃƒÂ¯Ã‚Â¸Ã‚Â Restock Warning Alerts</div>
      <div class="report-list alert-list" style="max-height:120px;">
        ${alertsHTML}
      </div>
    </div>
  `;
  return { html, text: `Inventory summary: Catalog contains ${totalSKUs} active SKUs representing ${totalStock} physical units. Valuation stands at &#8377;${formatNum(stockValuation)}. There are ${outOfStockCount} items completely out of stock and ${lowStockCount} items below threshold limits.` };
}

// 4. Quotes & Vendors Specific Report
function generateAdminQuotesVendorsReportHTML() {
  const quoteCount = DATA.quotes.length;
  const draftQuotes = DATA.quotes.filter(q => q.status === 'Draft').length;
  const sentQuotes = DATA.quotes.filter(q => q.status === 'Sent').length;
  const acceptedQuotes = DATA.quotes.filter(q => q.status === 'Accepted').length;
  const rejectedQuotes = DATA.quotes.filter(q => q.status === 'Rejected').length;
  
  const quoteValuation = DATA.quotes.reduce((a, b) => a + b.total, 0);
  const acceptedValuation = DATA.quotes.filter(q => q.status === 'Accepted').reduce((a, b) => a + b.total, 0);

  const vendorCount = DATA.vendors.length;
  const avgRating = vendorCount > 0 ? (DATA.vendors.reduce((a, b) => a + b.rating, 0) / vendorCount).toFixed(1) : '0';

  const html = `
    <div class="chat-report-card">
      <div class="report-header">
        <span class="report-title">ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã¢â‚¬Â¹ Quotes & Vendors Status</span>
        <span class="report-time-badge">QUOTES & PARTNERS</span>
      </div>
      <div class="report-divider"></div>
      
      <div class="report-grid">
        <div class="report-grid-card">
          <div class="rgc-label">Total Quotes</div>
          <div class="rgc-val">${quoteCount} <span class="rgc-unit">Quotes</span></div>
        </div>
        <div class="report-grid-card">
          <div class="rgc-label">Pipeline Value</div>
          <div class="rgc-val">&#8377;${formatNum(quoteValuation)}</div>
        </div>
        <div class="report-grid-card">
          <div class="rgc-label">Accepted Value</div>
          <div class="rgc-val" style="color:var(--green)">&#8377;${formatNum(acceptedValuation)}</div>
        </div>
        <div class="report-grid-card">
          <div class="rgc-label">Vendors Avg Rating</div>
          <div class="rgc-val" style="color:var(--accent3)">${avgRating} <span class="rgc-unit">ÃƒÂ¢Ã‹Å“Ã¢â‚¬Â¦ Rating</span></div>
        </div>
      </div>

      <div class="report-section-title">ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã¢â‚¬Â¹ Quote Pipelines</div>
      <div class="report-list">
        <div class="report-stat-row">
          <span>ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã‚Â Draft Quotes</span>
          <b class="report-badge">${draftQuotes} quotes</b>
        </div>
        <div class="report-stat-row">
          <span>ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã‚Â¨ Sent & Pending Quotes</span>
          <b class="report-badge">${sentQuotes} quotes</b>
        </div>
        <div class="report-stat-row">
          <span>Accepted Deals</span>
          <b class="report-badge" style="color:var(--green)">${acceptedQuotes} quotes</b>
        </div>
        <div class="report-stat-row">
          <span>Rejected Proposals</span>
          <b class="report-badge" style="color:var(--red)">${rejectedQuotes} quotes</b>
        </div>
      </div>
    </div>
  `;
  return { html, text: `Quotes and vendors summary: We have ${quoteCount} active client quotes worth a total of &#8377;${formatNum(quoteValuation)}, with &#8377;${formatNum(acceptedValuation)} accepted. Our acquisition panel connects us with ${vendorCount} certified suppliers maintaining a rating of ${avgRating} stars.` };
}


async function processAdminBotResponse(query) {
  const lower = query.toLowerCase();
  
  // Greeting
  if (lower.match(/^(hi|hello|hey|hii|namaste|greetings)/)) {
    const text = "Hello Admin! ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂÃ‚Â¥ Welcome back to your Live System Command Hub. I can parse databases and speak live reports for you. Try clicking a suggestion below!";
    addAdminChatBubble(text, 'bot');
    renderAdminSuggestions(ADMIN_SUGGESTIONS);
    speakAdminBotResponse(text);
    return;
  }
  
  // Overall Admin Report
  if (lower.includes('overall') || lower.includes('status') || lower.includes('report') && !lower.includes('sale') && !lower.includes('revenue') && !lower.includes('stock') && !lower.includes('invent') && !lower.includes('vendor') && !lower.includes('quote')) {
    const report = generateAdminOverallReportHTML();
    addAdminChatBubble('', 'bot', report.html);
    const spokenText = "Here is your NF Fire Admin Overall Status Report. " + report.valuationText;
    speakAdminBotResponse(spokenText);
    renderAdminSuggestions(ADMIN_SUGGESTIONS);
    return;
  }

  // Sales / Revenue Report
  if (lower.includes('sale') || lower.includes('revenue') || lower.includes('money') || lower.includes('pipeline')) {
    const report = generateAdminSalesReportHTML();
    addAdminChatBubble('', 'bot', report.html);
    speakAdminBotResponse(report.text);
    renderAdminSuggestions(ADMIN_SUGGESTIONS);
    return;
  }

  // Inventory / Stock Report
  if (lower.includes('inventory') || lower.includes('stock') || lower.includes('alert') || lower.includes('low') || lower.includes('restock') || lower.includes('out of')) {
    const report = generateAdminInventoryReportHTML();
    addAdminChatBubble('', 'bot', report.html);
    speakAdminBotResponse(report.text);
    renderAdminSuggestions(ADMIN_SUGGESTIONS);
    return;
  }

  // Quotes / Vendors
  if (lower.includes('quote') || lower.includes('vendor') || lower.includes('proposal') || lower.includes('supplier')) {
    const report = generateAdminQuotesVendorsReportHTML();
    addAdminChatBubble('', 'bot', report.html);
    speakAdminBotResponse(report.text);
    renderAdminSuggestions(ADMIN_SUGGESTIONS);
    return;
  }

  // Gemini API integration
  if (CONFIG.geminiKey) {
    await askAdminGemini(query);
    return;
  }

  // General helpful fallback
  const text = `I can compile dynamic administration status reports! Try asking me:\n\n` +
    `ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ **"overall report"** &mdash; full system metrics overview\n` +
    `ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ **"sales pipeline"** &mdash; total revenue and processing orders\n` +
    `ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ **"low stock alerts"** &mdash; inventory valuations and warning thresholds\n` +
    `ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ **"quote summary"** &mdash; details on proposals and supplier ratings`;
  addAdminChatBubble(text, 'bot');
  speakAdminBotResponse("I can compile dynamic administration status reports for you. You can ask for overall report, sales, stock alerts, or quote summaries.");
  renderAdminSuggestions(ADMIN_SUGGESTIONS);
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ GEMINI INTEGRATION ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
async function askAdminGemini(msg) {
  try {
    const totalSKUs = DATA.inventory.length;
    let totalStock = 0;
    let stockValuation = 0;
    DATA.inventory.forEach(i => { totalStock += i.stock; stockValuation += (i.stock * i.price); });
    const revenue = DATA.sales.filter(s => s.status !== 'Cancelled').reduce((a, b) => a + b.amount, 0);

    const context = `You are NF FireBot Admin Assistant, a high-intelligence dashboard assistant for NF Fire.
    You have direct, real-time access to the following live metrics:
    - Active Catalog SKUs: ${totalSKUs}
    - Total physical stock units: ${totalStock}
    - Inventory Asset Valuation: &#8377;${stockValuation}
    - Sales Pipeline Orders: ${DATA.sales.length}
    - Calculated Pipeline Revenue: &#8377;${revenue}
    - Active client quotes: ${DATA.quotes.length}
    - Certified vendors connected: ${DATA.vendors.length}
    - Sent emails: ${DATA.emails.length}
    
    Answer concisely. Be professional, direct, and helpful to the system administrator.`;

    const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${CONFIG.geminiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { role: 'user', parts: [{ text: context }] },
          ...adminChatHistory.slice(-6).map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.text }] })),
          { role: 'user', parts: [{ text: msg }] },
        ]
      })
    });
    
    const data = await resp.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    if (reply) {
      addAdminChatBubble(reply, 'bot');
      adminChatHistory.push({ role: 'model', text: reply });
      speakAdminBotResponse(reply);
      return;
    }
  } catch (e) {
    console.warn('Gemini Admin integration error:', e);
  }
  
  const errText = "I encountered an error querying the Gemini engine. I can still compile live reports directly from in-memory tables. Try asking for sales pipeline or low stock warnings.";
  addAdminChatBubble(errText, 'bot');
  speakAdminBotResponse(errText);
}

// Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€ REPORTS Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€
function updateReportFilters() {
  const type = document.getElementById('reportType').value;
  const filterContainer = document.getElementById('reportDateFilters');

  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const inputStyle = 'padding:.2rem; border:none; background:transparent; color:var(--text-primary); outline:none; font-family:inherit;';

  // Types that use a month picker (refill or expiry)
  if (type === 'month' || type === 'expiry_month') {
    filterContainer.innerHTML = `<input type="month" id="reportMonthPicker" value="${yyyy}-${mm}" onchange="renderReports()" style="${inputStyle}" />`;

  // Types that use a single day picker
  } else if (type === 'day' || type === 'expiry_day') {
    filterContainer.innerHTML = `<input type="date" id="reportDayPicker" value="${yyyy}-${mm}-${dd}" onchange="renderReports()" style="${inputStyle}" />`;

  // Types that use a date range
  } else if (type === 'custom' || type === 'expiry_custom') {
    const fd = new Date(d.getFullYear(), d.getMonth(), 1);
    const startStr = `${fd.getFullYear()}-${String(fd.getMonth()+1).padStart(2,'0')}-${String(fd.getDate()).padStart(2,'0')}`;
    filterContainer.innerHTML = `
      <input type="date" id="reportStartPicker" value="${startStr}" onchange="renderReports()" style="${inputStyle}" />
      <span style="color:var(--text-muted); align-self:center; font-weight:600; font-size:0.8rem; margin:0 0.2rem;">to</span>
      <input type="date" id="reportEndPicker" value="${yyyy}-${mm}-${dd}" onchange="renderReports()" style="${inputStyle}" />
    `;

  // Types with no date picker (all items, due soon, expired)
  } else {
    filterContainer.innerHTML = '';
  }

  renderReports();
}

async function syncReportsFromBackend() {
  const btn = document.getElementById('reportSyncBtn');
  if (btn) { btn.textContent = 'Ã¢ÂÂ³ Syncing...'; btn.disabled = true; }

  if (!GAS_API.isConfigured()) {
    toast('No Google Sheets backend configured. Data is local only.', 'warning');
    if (btn) { btn.innerHTML = '&#128260; Sync Now'; btn.disabled = false; }
    return;
  }

  try {
    const remoteData = await GAS_API.getAll();
    if (remoteData) {
      // Ensure every party has an items array
      if (remoteData.parties) {
        remoteData.parties.forEach(p => { if (!Array.isArray(p.items)) p.items = []; });
      }
      DATA = remoteData;
      localStorage.setItem('nffire_data', JSON.stringify(DATA));
      updateBadges();
      renderReports();
      toast('Ã¢Å“â€¦ Reports synced from Google Sheets!', 'success');
    } else {
      toast('Ã¢Å¡Â Ã¯Â¸Â Sync failed Ã¢â‚¬â€ backend returned no data.', 'warning');
    }
  } catch (e) {
    toast('Ã¢ÂÅ’ Sync error: ' + e.message, 'error');
  }

  if (btn) { btn.innerHTML = '&#128260; Sync Now'; btn.disabled = false; }
}

function renderReports() {
  const tbody = document.getElementById('reportsBody');
  if (!tbody) return;

  const type = document.getElementById('reportType').value;
  const search = (document.getElementById('reportSearch').value || '').toLowerCase();
  const today = new Date(); today.setHours(0, 0, 0, 0);

  // Helper: compute days left from nextDurationDate
  function getDaysLeft(item) {
    if (!item.nextDurationDate) return null;
    const d = new Date(item.nextDurationDate);
    if (isNaN(d)) return null;
    return Math.ceil((d - today) / 86400000);
  }

  // Helper: build a colored status badge HTML
  function statusBadge(item) {
    const dl = getDaysLeft(item);
    if (dl === null) return '<span style="color:var(--text-muted)">&#8212;</span>';
    if (dl < 0)  return '<span style="background:rgba(255,71,87,0.15);color:var(--red);padding:2px 8px;border-radius:10px;font-size:0.78rem;font-weight:700;">&#128197; Expired</span>';
    if (dl === 0) return '<span style="background:rgba(255,71,87,0.15);color:var(--red);padding:2px 8px;border-radius:10px;font-size:0.78rem;font-weight:700;">&#9888; Due Today</span>';
    if (dl === 1) return '<span style="background:rgba(255,193,7,0.15);color:var(--yellow);padding:2px 8px;border-radius:10px;font-size:0.78rem;font-weight:700;">&#9200; Due Tomorrow</span>';
    if (dl <= 30) return '<span style="background:rgba(255,193,7,0.10);color:var(--yellow);padding:2px 8px;border-radius:10px;font-size:0.78rem;font-weight:600;">&#9200; ' + dl + ' days left</span>';
    return '<span style="background:rgba(46,213,115,0.10);color:var(--green);padding:2px 8px;border-radius:10px;font-size:0.78rem;font-weight:600;">&#9989; ' + dl + ' days left</span>';
  }

  let filteredItems = [];

  // Gather all items from all parties
  DATA.parties.forEach((party, pIndex) => {
    if (party.items && party.items.length > 0) {
      party.items.forEach((item, iIndex) => {
        filteredItems.push({ partyName: party.name, partyIndex: pIndex, itemIndex: iIndex, ...item });
      });
    }
  });

  // ── Apply date / status filter based on report type ──────────────
  if (type === 'all') {
    filteredItems = filteredItems.filter(item => item.refillingDate || item.nextDurationDate);

  } else if (type === 'due_soon') {
    filteredItems = filteredItems.filter(item => {
      const dl = getDaysLeft(item);
      return dl !== null && dl >= 0 && dl <= 30;
    });

  } else if (type === 'expired') {
    filteredItems = filteredItems.filter(item => {
      const dl = getDaysLeft(item);
      return dl !== null && dl < 0;
    });

  } else if (type === 'expiry_month') {
    const monthPicker = document.getElementById('reportMonthPicker');
    filteredItems = filteredItems.filter(item => {
      if (!item.nextDurationDate) return false;
      const d = new Date(item.nextDurationDate);
      if (isNaN(d)) return false;
      if (monthPicker && monthPicker.value) {
        const [y, m] = monthPicker.value.split('-');
        return d.getFullYear() === parseInt(y) && (d.getMonth() + 1) === parseInt(m);
      }
      return true;
    });

  } else if (type === 'expiry_day') {
    const dayPicker = document.getElementById('reportDayPicker');
    filteredItems = filteredItems.filter(item => {
      if (!item.nextDurationDate) return false;
      const d = new Date(item.nextDurationDate);
      if (isNaN(d)) return false;
      if (dayPicker && dayPicker.value) {
        return d.toDateString() === new Date(dayPicker.value).toDateString();
      }
      return true;
    });

  } else if (type === 'expiry_custom') {
    const startPicker = document.getElementById('reportStartPicker');
    const endPicker   = document.getElementById('reportEndPicker');
    filteredItems = filteredItems.filter(item => {
      if (!item.nextDurationDate) return false;
      const d = new Date(item.nextDurationDate);
      if (isNaN(d)) return false;
      if (startPicker && startPicker.value && d < new Date(startPicker.value)) return false;
      if (endPicker   && endPicker.value   && d > new Date(endPicker.value))   return false;
      return true;
    });

  } else {
    // Default: filter by REFILLING date (month / day / custom)
    filteredItems = filteredItems.filter(item => {
      if (!item.refillingDate) return false;
      const itemDate = new Date(item.refillingDate);
      if (isNaN(itemDate)) return false;

      if (type === 'month') {
        const monthPicker = document.getElementById('reportMonthPicker');
        if (monthPicker && monthPicker.value) {
          const [y, m] = monthPicker.value.split('-');
          if (itemDate.getFullYear() !== parseInt(y) || (itemDate.getMonth() + 1) !== parseInt(m)) return false;
        }
      } else if (type === 'day') {
        const dayPicker = document.getElementById('reportDayPicker');
        if (dayPicker && dayPicker.value) {
          if (itemDate.toDateString() !== new Date(dayPicker.value).toDateString()) return false;
        }
      } else if (type === 'custom') {
        const startPicker = document.getElementById('reportStartPicker');
        const endPicker   = document.getElementById('reportEndPicker');
        if (startPicker && startPicker.value && itemDate < new Date(startPicker.value)) return false;
        if (endPicker   && endPicker.value   && itemDate > new Date(endPicker.value))   return false;
      }
      return true;
    });
  }

  // ── Search filter ────────────────────────────────────────────────
  if (search) {
    filteredItems = filteredItems.filter(item =>
      (String(item.name||'').toLowerCase().includes(search)) ||
      (String(item.partyName||'').toLowerCase().includes(search))
    );
  }

  if (filteredItems.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:1.5rem; color:var(--text-muted);">No items found for the selected criteria.</td></tr>`;
    return;
  }

  window._currentFilteredReports = filteredItems;

  tbody.innerHTML = filteredItems.map(item => `
    <tr>
      <td style="font-weight:600; color:var(--accent2);">${item.partyName}</td>
      <td style="font-weight:600;">&#128230; ${item.name}</td>
      <td style="color:var(--text-secondary);">${item.refillingDate || '&mdash;'}</td>
      <td style="font-weight:600; color:var(--text-primary);">${item.nextDurationDate || '&mdash;'}</td>
      <td style="text-align:center;">${statusBadge(item)}</td>
      <td style="text-align:center;">
        <button class="tbl-btn" onclick="viewReportSummary(${item.partyIndex}, ${item.itemIndex})">&#128065; View</button>
        <button class="tbl-btn" onclick="editReportItem(${item.partyIndex}, ${item.itemIndex})">&#9999; Update</button>
        <button class="tbl-btn danger" onclick="deleteReportItem(${item.partyIndex}, ${item.itemIndex})">&#128465; Del</button>
      </td>
    </tr>
  `).join('');
}

function viewReportSummary(partyIndex, itemIndex) {
  const party = DATA.parties[partyIndex];
  if (!party || !party.items || !party.items[itemIndex]) return;
  const item = party.items[itemIndex];

  const today = new Date(); today.setHours(0,0,0,0);
  const next = item.nextDurationDate ? new Date(item.nextDurationDate) : null;
  let statusColor = 'var(--text-muted)';
  let statusLabel = 'No date';
  if (next) {
    const daysLeft = Math.ceil((next - today) / 86400000);
    if (daysLeft < 0) { statusColor = 'var(--red)'; statusLabel = 'Expired'; }
    else if (daysLeft <= 30) { statusColor = 'var(--yellow)'; statusLabel = daysLeft + ' days left'; }
    else { statusColor = 'var(--green)'; statusLabel = daysLeft + ' days left'; }
  }

  const html = `
    <div class="modal-title">&#128203; Item Summary &mdash; ${party.name}</div>
    <div style="background:var(--bg-base); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--border); margin-bottom:1rem;">
      <div style="font-size:1.1rem; font-weight:700; color:var(--accent2); margin-bottom:0.5rem;">&#128230; ${item.name}</div>
      <div class="modal-form-grid" style="margin-top:1rem;">
        <div style="background:var(--bg-card); padding:0.8rem; border-radius:var(--radius-sm); border:1px solid var(--border);">
          <div style="font-size:0.65rem; text-transform:uppercase; color:var(--text-muted); font-weight:700; margin-bottom:0.3rem;">Refilling Date</div>
          <div style="font-size:0.9rem; font-weight:600; color:var(--text-primary);">&#128197; ${item.refillingDate}</div>
        </div>
        <div style="background:var(--bg-card); padding:0.8rem; border-radius:var(--radius-sm); border:1px solid var(--border);">
          <div style="font-size:0.65rem; text-transform:uppercase; color:var(--text-muted); font-weight:700; margin-bottom:0.3rem;">Next Duration Date</div>
          <div style="font-size:0.9rem; font-weight:600; color:var(--text-primary);">&#128197; ${item.nextDurationDate || '&mdash;'}</div>
          <div style="margin-top:0.4rem; display:inline-block; padding:0.2rem 0.5rem; background:rgba(255,255,255,0.05); border-radius:4px; color:${statusColor}; font-weight:700; font-size:0.75rem;">
            ${statusLabel}
          </div>
        </div>
      </div>
    </div>
    <div style="display:flex; justify-content:flex-end;">
      <button class="btn-primary" onclick="closeModal(null)">Close</button>
    </div>
  `;
  document.getElementById('modalContent').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('open');
}

function editReportItem(partyIndex, itemIndex) {
  const party = DATA.parties[partyIndex];
  if (!party || !party.items || !party.items[itemIndex]) return;
  const item = party.items[itemIndex];

  const html = `
    <div class="modal-title">&#9999; Edit Item &mdash; ${party.name}</div>
    <div class="form-group">
      <label>Item Name</label>
      <input type="text" id="editReportItemName" value="${item.name}" />
    </div>
    <div class="form-group">
      <label>Refilling Date</label>
      <input type="date" id="editReportItemRefill" value="${item.refillingDate}" onchange="document.getElementById('editReportItemNext').value=calcNextDuration(this.value)" />
    </div>
    <div class="form-group">
      <label>Next Duration Date</label>
      <input type="date" id="editReportItemNext" value="${item.nextDurationDate || ''}" />
    </div>
    <div style="display:flex; justify-content:flex-end; gap:0.5rem; margin-top:1.5rem;">
      <button class="btn-secondary" onclick="closeModal(null)">Cancel</button>
      <button class="btn-primary" onclick="saveReportItemEdit(${partyIndex}, ${itemIndex})">Save Changes</button>
    </div>
  `;
  document.getElementById('modalContent').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('open');
}

function saveReportItemEdit(partyIndex, itemIndex) {
  const name = document.getElementById('editReportItemName').value.trim();
  const refilling = document.getElementById('editReportItemRefill').value;
  const next = document.getElementById('editReportItemNext').value;
  if (!name || !refilling) {
    showAlert('&#9888; Item Name and Refilling Date are required.');
    return;
  }
  DATA.parties[partyIndex].items[itemIndex].name = name;
  DATA.parties[partyIndex].items[itemIndex].refillingDate = refilling;
  DATA.parties[partyIndex].items[itemIndex].nextDurationDate = next;
  saveLocalData();
  closeModal(null);
  renderReports();
  toast('Item updated successfully', 'success');
}

function deleteReportItem(partyIndex, itemIndex) {
  if (confirm('Are you sure you want to delete this item?')) {
    DATA.parties[partyIndex].items.splice(itemIndex, 1);
    saveLocalData();
    renderReports();
    toast('Item deleted', 'success');
  }
}

function exportReportsCSV() {
  if (!window._currentFilteredReports || window._currentFilteredReports.length === 0) {
    toast('Ã¢Å¡Â Ã¯Â¸Â No data to export.', 'error');
    return;
  }
  
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Party Name,Item Name,Refilling Date,Next Duration Date\n";
  
  window._currentFilteredReports.forEach(item => {
    const partyName = `"${item.partyName.replace(/"/g, '""')}"`;
    const itemName = `"${item.name.replace(/"/g, '""')}"`;
    const refill = item.refillingDate || "";
    const next = item.nextDurationDate || "";
    csvContent += `${partyName},${itemName},${refill},${next}\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `NF_Fire_Items_Report_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€ THEME Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â‚¬â€Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
function initTheme() {
  const savedTheme = localStorage.getItem('nf_theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.setAttribute('data-theme', 'light');
  }
}

function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme');
  if (currentTheme === 'light') {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('nf_theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('nf_theme', 'light');
  }
}

// ============================================================
// LOADING OVERLAY
// ============================================================
function showLoadingOverlay(msg = 'Loading...', pct = 0) {
  const overlay = document.getElementById('appLoadingOverlay');
  if (!overlay) return;
  overlay.classList.remove('hidden');
  setLoadingProgress(msg, pct);
}

function setLoadingProgress(msg, pct) {
  const msgEl = document.getElementById('loadingMsg');
  const bar   = document.getElementById('loadingBar');
  if (msgEl) msgEl.textContent = msg;
  if (bar)   bar.style.width   = Math.min(pct, 100) + '%';
}

function hideLoadingOverlay() {
  const overlay = document.getElementById('appLoadingOverlay');
  if (!overlay) return;
  overlay.classList.add('hidden');
  // Remove from DOM after fade so it doesn't block clicks
  setTimeout(() => { overlay.style.display = 'none'; }, 450);
}

// ============================================================
// DB STATUS PANEL Ã¢â‚¬â€ helpers
// ============================================================
const DB_LOG_MAX = 50; // max log entries to keep

function _dbTimestamp() {
  const now = new Date();
  return now.toTimeString().slice(0, 8);
}

function addDbLog(msg, type = 'info') {
  const log = document.getElementById('dbLog');
  if (!log) return;
  const entry = document.createElement('div');
  entry.className = `db-log-entry ${type}`;
  entry.innerHTML = `<span class="ts">[${_dbTimestamp()}]</span><span class="msg">${msg}</span>`;
  log.appendChild(entry);
  // Trim old entries
  while (log.children.length > DB_LOG_MAX) log.removeChild(log.firstChild);
  log.scrollTop = log.scrollHeight;
}

function setDbStatusBadge(state) {
  // state: 'connected' | 'disconnected' | 'checking' | 'unconfigured'
  const badge = document.getElementById('dbStatusBadge');
  const header = document.getElementById('gasStatus'); // top-bar chip
  if (!badge) return;

  const cfg = {
    connected:    { cls: 'connected',    icon: 'Ã°Å¸Å¸Â¢', label: 'Connected',      headerLabel: 'Synced',          headerColor: 'var(--green)',  headerBorder: 'rgba(46,213,115,.3)' },
    disconnected: { cls: 'disconnected', icon: 'Ã°Å¸â€Â´', label: 'Disconnected',   headerLabel: 'Sync Error',      headerColor: 'var(--red)',    headerBorder: 'rgba(255,71,87,.3)'  },
    checking:     { cls: 'checking',     icon: 'Ã°Å¸Å¸Â¡', label: 'Checking...',    headerLabel: 'Connecting...',   headerColor: '#ffaa00',       headerBorder: 'rgba(255,170,0,.3)'  },
    unconfigured: { cls: 'unconfigured', icon: 'Ã¢Å¡Âª', label: 'Not Configured', headerLabel: 'Standalone Mode', headerColor: 'var(--text-muted)', headerBorder: 'var(--border)'     },
  };

  const c = cfg[state] || cfg.unconfigured;
  badge.className = `db-status-badge ${c.cls}`;
  badge.textContent = `${c.icon} ${c.label}`;

  // Keep top-bar chip in sync
  if (header) {
    header.innerHTML = `<span class="status-dot" style="background-color:${c.headerColor};"></span> ${c.headerLabel}`;
    header.style.borderColor = c.headerBorder;
    header.style.color       = c.headerColor;
  }

  // Show/hide disconnect button
  const btnDis = document.getElementById('btnDisconnect');
  if (btnDis) btnDis.style.display = (state === 'connected') ? 'inline-flex' : 'none';
}

function updateDbMetrics() {
  const total = Object.values(DATA).reduce((sum, arr) => sum + (Array.isArray(arr) ? arr.length : 0), 0);
  const el = document.getElementById('dbRecordCount');
  if (el) el.textContent = total.toLocaleString();
}

function updateDbLastSync() {
  const el = document.getElementById('dbLastSync');
  if (el) {
    const now = new Date();
    el.textContent = now.toTimeString().slice(0, 5);
  }
}

// ============================================================
// DB STATUS PANEL Ã¢â‚¬â€ init
// ============================================================
function initDbStatusPanel() {
  // Stamp init timestamp in log
  const tsEl = document.getElementById('dbLogInitTs');
  if (tsEl) tsEl.textContent = `[${_dbTimestamp()}]`;

  // Populate URL field from GAS_API
  const urlEl = document.getElementById('gasUrl');
  if (urlEl) urlEl.value = GAS_API.getUrl();

  // Reflect current state
  updateDbMetrics();

  if (!GAS_API.isConfigured()) {
    setDbStatusBadge('unconfigured');
    addDbLog('No GAS URL configured. Paste your URL and click Connect.', 'info');
  } else {
    setDbStatusBadge('checking');
    addDbLog('URL found. Checking connection...', 'info');
    _autoCheckConnection();
  }
}

async function _autoCheckConnection() {
  const t0 = Date.now();
  const result = await GAS_API.ping();
  const ms = Date.now() - t0;
  const pingEl = document.getElementById('dbPingMs');

  if (result.connected) {
    setDbStatusBadge('connected');
    if (pingEl) pingEl.textContent = ms + ' ms';
    addDbLog(`Connected Ã¢Å“â€¦ Ã¢â‚¬â€ ${result.message} (${ms}ms)`, 'ok');
  } else {
    setDbStatusBadge('disconnected');
    if (pingEl) pingEl.textContent = 'Ã¢â‚¬â€';
    addDbLog(`Connection failed Ã¢ÂÅ’ Ã¢â‚¬â€ ${result.message}`, 'err');
  }
}

// ============================================================
// DB STATUS PANEL Ã¢â‚¬â€ user actions
// ============================================================

/** Called when user types in the URL field (enables/disables UI hints) */
function onGasUrlInput() {
  const urlEl = document.getElementById('gasUrl');
  if (!urlEl) return;
  const val = urlEl.value.trim();
  if (!val) {
    setDbStatusBadge('unconfigured');
  }
}

/** Save URL via GAS_API then immediately ping */
async function saveAndConnect() {
  const urlEl = document.getElementById('gasUrl');
  if (!urlEl) return;
  const url = urlEl.value.trim();

  if (!url || !url.startsWith('https://')) {
    addDbLog('Ã¢Å¡Â Ã¯Â¸Â Enter a valid HTTPS GAS Web App URL first.', 'err');
    toast('Please enter a valid GAS URL', 'error');
    return;
  }

  GAS_API.setUrl(url);
  addDbLog(`URL saved. Pinging backend...`, 'info');
  setDbStatusBadge('checking');
  toast('Connecting to Google Sheets...', 'info');

  const t0 = Date.now();
  const result = await GAS_API.ping();
  const ms = Date.now() - t0;
  const pingEl = document.getElementById('dbPingMs');

  if (result.connected) {
    setDbStatusBadge('connected');
    if (pingEl) pingEl.textContent = ms + ' ms';
    addDbLog(`Ã¢Å“â€¦ Connected successfully! (${ms}ms)`, 'ok');
    toast('Connected to Google Sheets Ã¢Å“â€¦', 'success');
    // Auto pull latest data
    addDbLog('Pulling latest data from Sheets...', 'info');
    const data = await GAS_API.getAll();
    if (data) {
      DATA = data;
      saveLocalData();
      renderDashboard();
      updateBadges();
      updateDbMetrics();
      updateDbLastSync();
      addDbLog(`Data loaded Ã¢â‚¬â€ ${Object.values(DATA).reduce((s,a)=>s+(Array.isArray(a)?a.length:0),0)} records.`, 'ok');
    }
  } else {
    setDbStatusBadge('disconnected');
    if (pingEl) pingEl.textContent = 'Ã¢â‚¬â€';
    addDbLog(`Ã¢ÂÅ’ Failed: ${result.message}`, 'err');
    toast('Connection failed Ã¢â‚¬â€ check your URL', 'error');
  }
}

/** Manual ping */
async function pingDatabase() {
  if (!GAS_API.isConfigured()) {
    addDbLog('Ã¢Å¡Â Ã¯Â¸Â No URL configured. Cannot ping.', 'err');
    toast('Configure GAS URL first', 'error');
    return;
  }
  addDbLog('Pinging backend...', 'info');
  setDbStatusBadge('checking');
  const t0 = Date.now();
  const result = await GAS_API.ping();
  const ms = Date.now() - t0;
  const pingEl = document.getElementById('dbPingMs');

  if (result.connected) {
    setDbStatusBadge('connected');
    if (pingEl) pingEl.textContent = ms + ' ms';
    addDbLog(`Ã¢Å“â€¦ Ping OK Ã¢â‚¬â€ ${ms}ms`, 'ok');
    toast(`Ping OK Ã¢â‚¬â€ ${ms}ms`, 'success');
  } else {
    setDbStatusBadge('disconnected');
    if (pingEl) pingEl.textContent = 'Ã¢â‚¬â€';
    addDbLog(`Ã¢ÂÅ’ Ping failed Ã¢â‚¬â€ ${result.message}`, 'err');
    toast('Ping failed', 'error');
  }
}

/** Force immediate full sync */
async function forceSyncNow() {
  if (!GAS_API.isConfigured()) {
    addDbLog('Ã¢Å¡Â Ã¯Â¸Â No URL configured. Cannot sync.', 'err');
    toast('Configure GAS URL first', 'error');
    return;
  }
  addDbLog('Forcing full sync to Google Sheets...', 'info');
  setDbStatusBadge('checking');
  toast('Syncing to Google Sheets...', 'info');

  const success = await GAS_API.saveAll(DATA);
  if (success) {
    setDbStatusBadge('connected');
    updateDbLastSync();
    updateDbMetrics();
    addDbLog('Ã¢Å“â€¦ Sync complete Ã¢â‚¬â€ all records saved.', 'ok');
    toast('Sync complete Ã¢Å“â€¦', 'success');
  } else {
    setDbStatusBadge('disconnected');
    addDbLog('Ã¢ÂÅ’ Sync failed Ã¢â‚¬â€ check connection.', 'err');
    toast('Sync failed', 'error');
  }
}

/** Disconnect / clear GAS URL */
function disconnectDatabase() {
  GAS_API.clearUrl();
  const urlEl = document.getElementById('gasUrl');
  if (urlEl) urlEl.value = '';
  const pingEl = document.getElementById('dbPingMs');
  if (pingEl) pingEl.textContent = 'Ã¢â‚¬â€';
  const syncEl = document.getElementById('dbLastSync');
  if (syncEl) syncEl.textContent = 'Ã¢â‚¬â€';
  setDbStatusBadge('unconfigured');
  addDbLog('Ã°Å¸â€Å’ Disconnected. Backend URL cleared.', 'info');
  toast('Backend disconnected', 'info');
}
