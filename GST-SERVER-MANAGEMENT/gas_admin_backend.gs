/**
 * Google Apps Script Backend for NF Fire Admin Dashboard (Sync v1)
 *
 * This script provides a dynamic spreadsheet-based database backend for:
 *   - Inventory, Customers, Vendors, Quotes, Emails, Parties, and Sales.
 *
 * DEPLOYMENT INSTRUCTIONS:
 * 1. Open Google Sheets (sheets.google.com) -> Create a new blank spreadsheet.
 * 2. Copy the spreadsheet ID from the URL (the part between /d/ and /edit).
 * 3. Replace the SPREADSHEET_ID value below with your spreadsheet ID.
 * 4. In Google Sheets menu, click "Extensions" -> "Apps Script".
 * 5. Delete any code in Code.gs and paste this entire code.
 * 6. Click Save (floppy disk icon).
 * 7. Click "Deploy" button -> "New deployment" (top-right).
 * 8. Click the Gear icon next to Select type -> select "Web app".
 * 9. Set Configuration:
 *      - Description: NF Fire Admin Sync Backend
 *      - Execute as: Me (your-email)
 *      - Who has access: Anyone
 * 10. Click "Deploy". Grant permissions if prompted (Go to Advanced -> Go to Untitled Project -> Allow).
 * 11. Copy the generated "Web app URL".
 * 12. Paste this URL into the Admin software -> System Settings -> Google Apps Script Settings.
 */

const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID_HERE";

// Sheet tab configurations
const TABS = {
  inventory: ["SKU", "Name", "Category", "Fire Class", "Stock", "Threshold", "Price", "Supplier", "Gst Rate", "Last Updated"],
  customers: ["ID", "Name", "Email", "Phone", "Orders", "Total Spent", "Last Order"],
  vendors:   ["ID", "Name", "Emoji", "Contact", "Email", "Phone", "Products", "Last Restock", "Rating"],
  quotes:    ["ID", "Customer", "Email", "Items", "Total", "Status", "Created"],
  emails:    ["Timestamp", "To", "Subject", "Type", "Status"],
  parties:   ["Name", "GSTIN", "Gst Type", "State", "Phone", "Email", "Billing Address", "Shipping Addresses", "Items JSON"],
  sales:     ["ID", "Customer", "Email", "Items JSON", "Amount", "Status", "Date", "Notes"]
};

function getSpreadsheet() {
  if (SPREADSHEET_ID === "YOUR_SPREADSHEET_ID_HERE" || !SPREADSHEET_ID) {
    throw new Error("Spreadsheet ID is not configured. Please open Code.gs and set SPREADSHEET_ID.");
  }
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

// Bootstrap all sheets with headers
function setupSpreadsheet() {
  const ss = getSpreadsheet();
  Object.keys(TABS).forEach(tabName => {
    let sheet = ss.getSheetByName(tabName);
    if (!sheet) {
      sheet = ss.insertSheet(tabName);
      sheet.appendRow(TABS[tabName]);
    }
  });
}

// Handle GET Requests
function doGet(e) {
  try {
    setupSpreadsheet(); // Ensure sheets are bootstrapped
    
    const action = e.parameter.action;
    if (action === "ping") {
      return respond({ status: "success", connected: true });
    }
    
    if (action === "getAll") {
      return respond({ status: "success", data: getAllData() });
    }
    
    return respond({ status: "error", message: "Unknown GET action: " + action });
  } catch(err) {
    return respond({ status: "error", message: err.toString() });
  }
}

// Handle POST Requests
function doPost(e) {
  try {
    setupSpreadsheet(); // Ensure sheets are bootstrapped
    
    const action = e.parameter.action;
    if (action === "saveAll") {
      const dataStr = e.parameter.data;
      if (!dataStr) {
        return respond({ status: "error", message: "Missing payload data." });
      }
      const data = JSON.parse(dataStr);
      saveAllData(data);
      return respond({ status: "success", message: "Database synchronized successfully." });
    }
    
    return respond({ status: "error", message: "Unknown POST action: " + action });
  } catch(err) {
    return respond({ status: "error", message: err.toString() });
  }
}

// Response formatting helper
function respond(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// Read database from Spreadsheet rows
function getAllData() {
  const ss = getSpreadsheet();
  const db = {};
  
  // 1. Inventory
  db.inventory = readSheet(ss, "inventory", row => ({
    sku: row[0],
    name: row[1],
    category: row[2],
    fireClass: row[3],
    stock: parseFloat(row[4]) || 0,
    threshold: parseFloat(row[5]) || 0,
    price: parseFloat(row[6]) || 0,
    supplier: row[7],
    gstRate: parseFloat(row[8]) || 18,
    lastUpdated: row[9]
  }));
  
  // 2. Customers
  db.customers = readSheet(ss, "customers", row => ({
    id: row[0],
    name: row[1],
    email: row[2],
    phone: row[3],
    orders: parseInt(row[4]) || 0,
    totalSpent: parseFloat(row[5]) || 0,
    lastOrder: row[6]
  }));
  
  // 3. Vendors
  db.vendors = readSheet(ss, "vendors", row => ({
    id: row[0],
    name: row[1],
    emoji: row[2],
    contact: row[3],
    email: row[4],
    phone: row[5],
    products: row[6],
    lastRestock: row[7],
    rating: parseFloat(row[8]) || 0
  }));
  
  // 4. Quotes
  db.quotes = readSheet(ss, "quotes", row => ({
    id: row[0],
    customer: row[1],
    email: row[2],
    items: parseInt(row[3]) || 0,
    total: parseFloat(row[4]) || 0,
    status: row[5],
    created: row[6]
  }));
  
  // 5. Emails
  db.emails = readSheet(ss, "emails", row => ({
    timestamp: row[0],
    to: row[1],
    subject: row[2],
    type: row[3],
    status: row[4]
  }));
  
  // 6. Parties
  db.parties = readSheet(ss, "parties", row => ({
    name: row[0],
    gstin: row[1],
    gstType: row[2],
    state: row[3],
    phone: row[4],
    email: row[5],
    billingAddress: row[6],
    shippingAddresses: row[7] ? row[7].split("|") : [],
    items: row[8] ? JSON.parse(row[8]) : []
  }));
  
  // 7. Sales
  db.sales = readSheet(ss, "sales", row => ({
    id: row[0],
    customer: row[1],
    email: row[2],
    items: row[3] ? JSON.parse(row[3]) : [],
    amount: parseFloat(row[4]) || 0,
    status: row[5],
    date: row[6],
    notes: row[7] || ""
  }));
  
  return db;
}

// Generic sheet parser helper
function readSheet(ss, name, mapFn) {
  const sheet = ss.getSheetByName(name);
  if (!sheet) return [];
  const rows = sheet.getDataRange().getValues();
  if (rows.length <= 1) return []; // Only headers
  
  const data = [];
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] || rows[i][1]) { // Validate row is not completely empty
      data.push(mapFn(rows[i]));
    }
  }
  return data;
}

// Clear and Overwrite database tables in Spreadsheet
function saveAllData(db) {
  const ss = getSpreadsheet();
  
  // 1. Inventory
  writeSheet(ss, "inventory", db.inventory || [], item => [
    item.sku, item.name, item.category, item.fireClass, item.stock, item.threshold, item.price, item.supplier, item.gstRate, item.lastUpdated
  ]);
  
  // 2. Customers
  writeSheet(ss, "customers", db.customers || [], c => [
    c.id, c.name, c.email, c.phone, c.orders, c.totalSpent, c.lastOrder
  ]);
  
  // 3. Vendors
  writeSheet(ss, "vendors", db.vendors || [], v => [
    v.id, v.name, v.emoji, v.contact, v.email, v.phone, v.products, v.lastRestock, v.rating
  ]);
  
  // 4. Quotes
  writeSheet(ss, "quotes", db.quotes || [], q => [
    q.id, q.customer, q.email, q.items, q.total, q.status, q.created
  ]);
  
  // 5. Emails
  writeSheet(ss, "emails", db.emails || [], e => [
    e.timestamp, e.to, e.subject, e.type, e.status
  ]);
  
  // 6. Parties
  writeSheet(ss, "parties", db.parties || [], p => [
    p.name, p.gstin, p.gstType, p.state, p.phone, p.email, p.billingAddress,
    p.shippingAddresses ? p.shippingAddresses.join("|") : "",
    p.items && p.items.length > 0 ? JSON.stringify(p.items) : ""
  ]);
  
  // 7. Sales
  writeSheet(ss, "sales", db.sales || [], s => [
    s.id, s.customer, s.email, JSON.stringify(s.items || []), s.amount, s.status, s.date, s.notes || ""
  ]);
}

// Generic sheet writer helper
function writeSheet(ss, name, items, mapFn) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  } else {
    sheet.clearContents();
  }
  
  const headers = TABS[name];
  sheet.appendRow(headers);
  
  if (!items.length) return;
  
  const rows = items.map(mapFn);
  sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
}
