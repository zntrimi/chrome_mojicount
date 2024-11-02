// 保存された設定を読み込み
function restoreOptions() {
    chrome.storage.sync.get(['includeInputs', 'excludedSites'], (data) => {
      document.getElementById('includeInputs').checked = data.includeInputs || false;
      document.getElementById('excludedSites').value = (data.excludedSites || []).join(', ');
    });
  }
  
  // 設定を保存
  function saveOptions() {
    const includeInputs = document.getElementById('includeInputs').checked;
    const excludedSites = document.getElementById('excludedSites').value
      .split(',')
      .map(site => site.trim())
      .filter(site => site);
  
    chrome.storage.sync.set({
      includeInputs,
      excludedSites
    }, () => {
      const status = document.getElementById('status');
      status.textContent = '設定が保存されました。';
      setTimeout(() => {
        status.textContent = '';
      }, 2000);
    });
  }
  
  document.getElementById('saveButton').addEventListener('click', saveOptions);
  document.addEventListener('DOMContentLoaded', restoreOptions);