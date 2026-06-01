/**
 * INVENTNF — API Configuration
 * Replace the URL below with your deployed Inventory GAS Web App URL.
 */
const INVENT_CONFIG = {
    GAS_URL: "https://script.google.com/macros/s/AKfycbwflsyzR4JbeEdjDng-hj6SjBCTC5QZzSQ7Iw1wAVYbJ4PPWVSsFJt2rz4cO4sVMnYRZw/exec",
    isSimulationMode: function () {
        return this.GAS_URL.includes('INVENT-SAMPLE-URL-REPLACE-ME');
    }
};
