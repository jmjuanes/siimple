// Copy text to clipboard
export const copyTextToClipboard = text => {
    if (!navigator.clipboard) {
        // return fallbackCopyTextToClipboard(text);
        return Promise.resolve();
    }
    // Native copy to clipboard
    return navigator.clipboard.writeText(text);
};
