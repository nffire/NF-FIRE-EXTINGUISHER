/**
 * INVENTNF — Google Apps Script Backend (v2 — with Warehouse support)
 *
 * SHEETS USED:
 *   "Inventory"   → A:ItemID  B:ItemName  C:Qty  D:Unit  E:WarehouseID  F:AddedOn
 *   "Warehouses"  → A:WHID    B:WHNumber  C:WHName  D:Address  E:CreatedOn
 *
 * DEPLOYMENT:
 * 1. Paste into Google Apps Script (script.google.com)
 * 2. Set SPREADSHEET_ID to your Google Sheet ID
 * 3. Deploy as Web App: Execute as Me, Access Anyone
 * 4. Paste URL into INVENTNF/api_config.js
 */

const SPREADSHEET_ID = "YOUR_GOOGLE_SHEET_ID_HERE";
const INV_SHEET   = "Inventory";
const WH_SHEET    = "Warehouses";

// ── Sheet bootstrap ───────────────────────────────────────────────────
function getInvSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let s = ss.getSheetByName(INV_SHEET);
  if (!s) {
    s = ss.insertSheet(INV_SHEET);
    s.appendRow(["Item ID","Item Name","Quantity","Unit","Warehouse ID","Added On"]);
  }
  return s;
}

function getWhSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let s = ss.getSheetByName(WH_SHEET);
  if (!s) {
    s = ss.insertSheet(WH_SHEET);
    s.appendRow(["WH ID","WH Number","WH Name","Address","Created On"]);
  }
  return s;
}

// ── Router ────────────────────────────────────────────────────
function doPost(e) {
  try {
    // Read parameters: action is always in URL query string (added by frontend fix),
    // other params come from the POST body (URLSearchParams / application/x-www-form-urlencoded).
    // e.parameter merges both URL query params and POST body params.
    if (!e || !e.parameter) return respond({ status:"error", message:"No request data received." });

    const a = (e.parameter.action || "").toString().trim();
    if (!a) return respond({ status:"error", message:"Missing action parameter." });

    const p = e.parameter;  // merged URL + body params

    if (a === "ping")             return respond({ status:"success", connected:true });

    // Items
    if (a === "get_items")        return respond({ status:"success", data: getAllItems() });
    if (a === "add_item")         return addItem(p);
    if (a === "update_item")      return updateItem(p);
    if (a === "delete_item")      return deleteItem(p);

    // Warehouses
    if (a === "get_warehouses")   return respond({ status:"success", data: getAllWarehouses() });
    if (a === "add_warehouse")    return addWarehouse(p);
    if (a === "update_warehouse") return updateWarehouse(p);
    if (a === "delete_warehouse") return deleteWarehouse(p);

    return respond({ status:"error", message:"Unknown action: " + a });
  } catch(err) {
    return respond({ status:"error", message:"Server error: " + err.toString() });
  }
}


function doGet(e) {
  try {
    if (e && e.parameter && e.parameter.action === "ping") {
      getInvSheet(); getWhSheet();
      return respond({ status:"success", connected:true });
    }
    return ContentService.createTextOutput("INVENTNF API v2 running.").setMimeType(ContentService.MimeType.TEXT);
  } catch(err) {
    return respond({ status:"error", message: err.toString() });
  }
}

// ── Item CRUD ─────────────────────────────────────────────────────────
function getAllItems() {
  const rows = getInvSheet().getDataRange().getValues();
  const items = [];
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0]) items.push({
      id:          rows[i][0],
      name:        rows[i][1],
      qty:         rows[i][2],
      unit:        rows[i][3],
      warehouseId: rows[i][4] || "",
      addedOn:     rows[i][5]
    });
  }
  return items;
}

function addItem(p) {
  if (!p.name) return respond({ status:"error", message:"Item name required." });
  const id  = generateId("NF");
  const now = new Date().toLocaleString();
  getInvSheet().appendRow([id, p.name, parseFloat(p.qty)||0, p.unit||"Nos", p.warehouseId||"", now]);
  return respond({ status:"success", message:"Item added.", data: getAllItems() });
}

function updateItem(p) {
  const sheet = getInvSheet();
  const rows  = sheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    if (String(rows[i][0]) === String(p.id)) {
      sheet.getRange(i+1,2).setValue(p.name);
      sheet.getRange(i+1,3).setValue(parseFloat(p.qty)||0);
      sheet.getRange(i+1,4).setValue(p.unit);
      sheet.getRange(i+1,5).setValue(p.warehouseId||"");
      return respond({ status:"success", message:"Item updated.", data: getAllItems() });
    }
  }
  return respond({ status:"error", message:"Item not found." });
}

function deleteItem(p) {
  const sheet = getInvSheet();
  const rows  = sheet.getDataRange().getValues();
  for (let i = rows.length-1; i >= 1; i--) {
    if (String(rows[i][0]) === String(p.id)) {
      sheet.deleteRow(i+1);
      return respond({ status:"success", message:"Item deleted.", data: getAllItems() });
    }
  }
  return respond({ status:"error", message:"Item not found." });
}

// ── Warehouse CRUD ────────────────────────────────────────────────────
function getAllWarehouses() {
  const rows = getWhSheet().getDataRange().getValues();
  const whs  = [];
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0]) whs.push({
      id:        rows[i][0],
      number:    rows[i][1],
      name:      rows[i][2],
      address:   rows[i][3],
      createdOn: rows[i][4]
    });
  }
  return whs;
}

function addWarehouse(p) {
  if (!p.name) return respond({ status:"error", message:"Warehouse name required." });
  const id  = generateId("WH");
  const now = new Date().toLocaleString();
  getWhSheet().appendRow([id, p.number||"", p.name, p.address||"", now]);
  return respond({ status:"success", message:"Warehouse added.", data: getAllWarehouses() });
}

function updateWarehouse(p) {
  const sheet = getWhSheet();
  const rows  = sheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    if (String(rows[i][0]) === String(p.id)) {
      sheet.getRange(i+1,2).setValue(p.number||"");
      sheet.getRange(i+1,3).setValue(p.name);
      sheet.getRange(i+1,4).setValue(p.address||"");
      return respond({ status:"success", message:"Warehouse updated.", data: getAllWarehouses() });
    }
  }
  return respond({ status:"error", message:"Warehouse not found." });
}

function deleteWarehouse(p) {
  // Also clear warehouseId from items in this warehouse
  const invSheet = getInvSheet();
  const invRows  = invSheet.getDataRange().getValues();
  for (let i = 1; i < invRows.length; i++) {
    if (String(invRows[i][4]) === String(p.id)) {
      invSheet.getRange(i+1,5).setValue("");
    }
  }
  const sheet = getWhSheet();
  const rows  = sheet.getDataRange().getValues();
  for (let i = rows.length-1; i >= 1; i--) {
    if (String(rows[i][0]) === String(p.id)) {
      sheet.deleteRow(i+1);
      return respond({ status:"success", message:"Warehouse deleted.", data: getAllWarehouses() });
    }
  }
  return respond({ status:"error", message:"Warehouse not found." });
}

// ── Helpers ───────────────────────────────────────────────────────────
function generateId(prefix) {
  return (prefix||"ID") + "-" + Math.floor(1000 + Math.random() * 9000);
}
function respond(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
