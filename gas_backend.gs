/**
 * Google Apps Script backend for NF Admin Login
 * 
 * INSTRUCTIONS FOR DEPLOYMENT:
 * 1. Go to https://script.google.com/ and create a new project.
 * 2. Paste this entire code into `Code.gs`.
 * 3. Save the project.
 * 4. Click "Deploy" -> "New deployment" at the top right.
 * 5. Select type: "Web app" (click the gear icon to add it if missing).
 * 6. Execute as: "Me".
 * 7. Who has access: "Anyone".
 * 8. Click "Deploy". Authorize permissions if prompted.
 * 9. Copy the generated "Web app URL" and paste it into `index.html` (GAS_WEB_APP_URL).
 */

// ==========================================
// DEVELOPER SETTINGS:
// Set the valid admin email and password here.
// ==========================================
const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "adminpassword123";

// System Administrator Credentials
const SYSADMIN_USERNAME = "h@rsh@dteli";
const SYSADMIN_PASSWORD = "harshadteli2472";
// ==========================================

function doPost(e) {
  // Handle CORS (Cross-Origin Resource Sharing)
  // When a fetch request is made from a different domain, GAS needs to return a proper JSON response.
  
  try {
    // Check if parameters exist
    if (e && e.parameter) {
      const type = e.parameter.type || "admin"; // 'admin' or 'sysadmin'
      const name = e.parameter.name || "Unknown";
      const email = e.parameter.email || ""; // Can act as username for sysadmin
      const password = e.parameter.password || "";
      
      // Basic validation based on action type
      if (type === "update_log" || type === "delete_log") {
        const sysUser = e.parameter.sys_username;
        const sysPass = e.parameter.sys_password;
        if (!sysUser || !sysPass) {
          return createResponse({
            status: "error",
            message: "System Admin credentials required for this action."
          });
        }
      } else {
        if (!email || !password) {
          return createResponse({
            status: "error",
            message: "Email/Username and password are required."
          });
        }
      }
      
      // Log the login attempt in GAS execution logs
      console.log(`Login attempt by: ${email} (Type: ${type})`);
      
      const props = PropertiesService.getScriptProperties();
      
      if (type === "sysadmin") {
        // Verify System Admin Credentials
        if (email === SYSADMIN_USERNAME && password === SYSADMIN_PASSWORD) {
          // Retrieve login history
          const logsStr = props.getProperty('admin_logs');
          const logs = logsStr ? JSON.parse(logsStr) : [];
          
          // Success
          return createResponse({
            status: "success",
            message: "System Admin Login successful",
            data: {
              role: "System Administrator",
              username: email,
              password: password, // Crucial: required by frontend for subsequent CRUD ops
              loginTime: new Date().toLocaleString(),
              logs: logs // Return the history to the frontend
            }
          });
        } else {
          return createResponse({
            status: "error",
            message: "Invalid System Administrator credentials."
          });
        }
      } else if (type === "update_log" || type === "delete_log") {
        // Authenticate Sysadmin for CRUD ops
        const sysUser = e.parameter.sys_username;
        const sysPass = e.parameter.sys_password;
        
        if (sysUser !== SYSADMIN_USERNAME || sysPass !== SYSADMIN_PASSWORD) {
           return createResponse({ status: "error", message: "Unauthorized CRUD attempt." });
        }
        
        const timestamp = e.parameter.timestamp;
        let logsStr = props.getProperty('admin_logs');
        let logs = logsStr ? JSON.parse(logsStr) : [];
        
        if (type === "delete_log") {
           logs = logs.filter(log => log.timestamp !== timestamp);
           props.setProperty('admin_logs', JSON.stringify(logs));
           return createResponse({ status: "success", message: "Log deleted", data: { logs: logs } });
        }
        
        if (type === "update_log") {
           const newName = e.parameter.newName;
           const newUsername = e.parameter.newUsername;
           const newPassword = e.parameter.newPassword;
           
           for (let i = 0; i < logs.length; i++) {
              if (logs[i].timestamp === timestamp) {
                 logs[i].name = newName;
                 logs[i].username = newUsername;
                 logs[i].password = newPassword;
                 break;
              }
           }
           props.setProperty('admin_logs', JSON.stringify(logs));
           return createResponse({ status: "success", message: "Log updated", data: { logs: logs } });
        }
        
      } else {
        // Verify Regular Admin Credentials
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
          
          // Save this login to history
          const logsStr = props.getProperty('admin_logs');
          let logs = logsStr ? JSON.parse(logsStr) : [];
          
          logs.push({
            role: "Admin",
            name: name,
            username: email,
            password: password,
            timestamp: new Date().toLocaleString(),
            status: "SUCCESS"
          });
          
          // Keep only the last 50 logs to avoid property size limits
          if (logs.length > 50) logs = logs.slice(-50);
          props.setProperty('admin_logs', JSON.stringify(logs));

          // Success
          return createResponse({
            status: "success",
            message: "Login successful",
            data: {
              role: "Admin",
              name: name,
              email: email,
              password: password
            }
          });
        } else {
          // Invalid credentials
          return createResponse({
            status: "error",
            message: "Invalid email or password. Access Denied."
          });
        }
      }
      
    } else {
      return createResponse({
        status: "error",
        message: "No data received in request."
      });
    }
    
  } catch (error) {
    return createResponse({
      status: "error",
      message: "Server error: " + error.toString()
    });
  }
}

/**
 * Helper function to create JSON response
 */
function createResponse(responseObject) {
  return ContentService.createTextOutput(JSON.stringify(responseObject))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle GET requests (e.g., if someone visits the URL directly in a browser)
 */
function doGet(e) {
  return ContentService.createTextOutput("NF Admin Login API is running. Please use POST to submit data.")
    .setMimeType(ContentService.MimeType.TEXT);
}
