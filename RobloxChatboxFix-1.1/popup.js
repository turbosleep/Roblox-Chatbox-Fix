// popup.js

document.addEventListener('DOMContentLoaded', function () {
    const enableDisableToggle = document.getElementById('enable-disable-toggle');
    const extensionStatus = document.getElementById('extension-status');

    enableDisableToggle.addEventListener('change', function () {
        const isEnabled = enableDisableToggle.checked;
        toggleExtensionForRoblox(isEnabled);
    });

    function toggleExtensionForRoblox(isEnabled) {
        chrome.runtime.sendMessage({ action: 'toggleExtension', enabled: isEnabled }, function (response) {
            if (response.enabled) {
                extensionStatus.textContent = '(Enabled)';
            } else {
                extensionStatus.textContent = '(Disabled)';
            }
        });
    }

    // Retrieve the extension status when the popup opens
    chrome.runtime.sendMessage({ action: 'checkExtensionStatus' }, function (response) {
        enableDisableToggle.checked = response.enabled;
        if (response.enabled) {
            extensionStatus.textContent = '(Enabled)';
        } else {
            extensionStatus.textContent = '(Disabled)';
        }
    });
});



