/**
 * API Configuration File
 * 
 * Centralized configuration for Google Apps Script (GAS) connections.
 * Include this script in any HTML file that needs to communicate with the backend.
 */

const CONFIG = {
    // Central Auth & Audit Database URL
    GAS_WEB_APP_URL: "https://script.google.com/macros/s/AKfycbxfWh-hpT1fzHbrGMas3DvSfgltQAZ2rBsNyUqwM2BdJyfyAhbE_IyUPlyQWvPSqbMQ/exec",

    // Default URLs for GST and WGST servers (helps bypass isolated localStorage origins in local filesystem browsers)
    GST_SERVER_URL: "https://script.google.com/macros/s/AKfycbygnpuU6tzp1gaUDYKsbtIGYsBZ4BWm5qmMx04vxoe5aQCxmWvl3mwZxCnQsCX_74MLKA/exec",
    WGST_SERVER_URL: "https://script.google.com/macros/s/AKfycbzJz3il8IDkCzyTBISoQhUaw2rt-Ha34WFRlC53lUIG-M19la29rFYcAYCEgVkXIZBkGw/exec",

    // Helper function to check if we are running in simulation mode
    isSimulationMode: function() {
        return this.GAS_WEB_APP_URL.includes('sample-url-replace-me');
    }
};
