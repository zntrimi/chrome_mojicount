// すべてのtextarea要素を取得
const textareas = document.querySelectorAll('textarea');

textareas.forEach(textarea => {
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

  // 親要素を相対位置に設定（位置指定の基準にするため）
  const parent = textarea.parentNode;
  if (window.getComputedStyle(parent).position === 'static') {
    parent.style.position = 'relative';
  }

  // 親要素にカウンターを追加
  parent.appendChild(counter);

  // 文字数を更新する関数
  const updateCount = () => {
    const text = textarea.value;
    const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' });
    const count = [...segmenter.segment(text)].length;
    counter.textContent = `文字数: ${count}`;
  };

  // 入力イベント時に文字数を更新
  textarea.addEventListener('input', updateCount);

  // 初期表示のために文字数を更新
  updateCount();
});