let extensionEnabled = false;

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'toggleExtension') {
        extensionEnabled = message.enabled;

        // Update extension state without refreshing the page
        updateExtensionState(extensionEnabled);

        sendResponse({ enabled: extensionEnabled });
    } else if (message.action === 'checkExtensionStatus') {
        sendResponse({ enabled: extensionEnabled });
    }
});

// Check the current URL and execute extension logic only on the Roblox website
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentUrl = new URL(tabs[0].url);
    if (currentUrl.hostname === "https://www.roblox.com/*") {
        // Your extension logic for the Roblox website
    }
});

function updateExtensionState(enabled) {
    chrome.tabs.query({ url: 'https://www.roblox.com/*' }, function (tabs) {
        tabs.forEach(function (tab) {
            if (enabled) {
                chrome.scripting.insertCSS({
                    target: { tabId: tab.id },
                    files: ['main.css']
                });
            } else {
                chrome.scripting.removeCSS({
                    target: { tabId: tab.id },
                    files: ['main.css']
                });
            }
        });
    });
}
