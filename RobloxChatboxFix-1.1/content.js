chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'reloadPage') {
        location.reload();
    } else if (message.action === 'toggleExtension') {
        const isEnabled = message.enabled;
        if (isEnabled) {
            // Apply changes when the extension is enabled
            // For your specific case, you can add logic to modify the chatbox UI here
         } else {
        }
        location.reload();
    }
});
