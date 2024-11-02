// 初期設定を取得
let settings = {
    includeInputs: false,
    excludedSites: [],
    isEnabled: true
  };
  
  // 設定を取得
  chrome.storage.sync.get(['includeInputs', 'excludedSites'], (data) => {
    settings.includeInputs = data.includeInputs || false;
    settings.excludedSites = data.excludedSites || [];
  
    // 除外サイトの場合は処理を停止
    if (settings.excludedSites.some(site => location.href.includes(site))) {
      return;
    }
  
    // メインの処理を開始
    init();
  });
  
  // 拡張機能のオン/オフ状態を監視
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.isEnabled !== undefined) {
      settings.isEnabled = message.isEnabled;
      toggleCounters(settings.isEnabled);
    }
  });
  
  let counters = [];
  
  function init() {
    // 対象となる要素を取得
    let elements = document.querySelectorAll('textarea');
    if (settings.includeInputs) {
      elements = [...elements, ...document.querySelectorAll('input[type="text"]')];
    }
  
    elements.forEach(element => {
      // カウンター表示用の要素を作成
      const counter = document.createElement('div');
      counter.style.position = 'absolute';
      counter.style.right = '8px';
      counter.style.bottom = '8px';
      counter.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      counter.style.padding = '2px 6px';
      counter.style.borderRadius = '4px';
      counter.style.fontSize = '12px';
      counter.style.color = '#333';
      counter.style.zIndex = '1000';
  
      // 親要素を相対位置に設定
      const parent = element.parentNode;
      if (window.getComputedStyle(parent).position === 'static') {
        parent.style.position = 'relative';
      }
  
      // 親要素にカウンターを追加
      parent.appendChild(counter);
  
      // 文字数を更新する関数
      const updateCount = () => {
        const text = element.value;
        const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' });
        const count = [...segmenter.segment(text)].length;
        counter.textContent = `文字数: ${count}`;
      };
  
      // 入力イベント時に文字数を更新
      element.addEventListener('input', updateCount);
  
      // 初期表示
      updateCount();
  
      // カウンターを管理リストに追加
      counters.push({ counter, element });
    });
  
    // 初期状態でオフの場合、カウンターを非表示
    if (!settings.isEnabled) {
      toggleCounters(false);
    }
  }
  
  function toggleCounters(show) {
    counters.forEach(({ counter }) => {
      counter.style.display = show ? 'block' : 'none';
    });
  }