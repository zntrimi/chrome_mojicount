let isEnabled = true;

chrome.action.onClicked.addListener((tab) => {
  // オン/オフの状態を切り替え
  isEnabled = !isEnabled;

  // アイコンを変更
  const iconPath = isEnabled ? "icons/icon-on-48.png" : "icons/icon-off-48.png";
  chrome.action.setIcon({ path: iconPath, tabId: tab.id }, () => {
    if (chrome.runtime.lastError) {
      console.warn('Icon change failed:', chrome.runtime.lastError.message);
    }
  });

  // コンテンツスクリプトにメッセージを送信
  chrome.tabs.sendMessage(tab.id, { isEnabled }, (response) => {
    if (chrome.runtime.lastError) {
      console.warn('Could not send message to content script:', chrome.runtime.lastError.message);
    }
  });
});