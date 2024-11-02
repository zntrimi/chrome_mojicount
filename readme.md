Textarea文字数カウンター (Textarea Character Counter)

概要 (Overview)

このChrome拡張機能は、ウェブページ上のtextarea要素に現在の文字数を自動的に表示します。特にGoogleフォームなど、文字数制限があるが現在の入力文字数が表示されない場合に便利です。日本語の特殊な文字や絵文字も正確にカウントできるように設計されています。

This Chrome extension automatically displays the current character count in textarea elements on web pages. It is useful for sites like Google Forms, where there is a character limit but no display of the current character count. The extension is designed to handle Japanese special characters and emojis accurately.

特徴 (Features)

	•	日本語と絵文字に対応した正確な文字数カウント。
	•	入力中にリアルタイムで文字数が更新されます。
	•	拡張機能をインストールするだけで、自動的にすべてのtextareaに適用されます。
	•	Accurate character count that supports Japanese and emojis.
	•	Real-time character count update while typing.
	•	Automatically applies to all textarea elements after installation.

インストール方法 (Installation)

	1.	このリポジトリをローカルにクローンまたはダウンロードします。
	2.	Chromeブラウザで拡張機能の管理ページにアクセスします。
	3.	右上の「デベロッパーモード」をオンにします。
	4.	「パッケージ化されていない拡張機能を読み込む」をクリックし、拡張機能のフォルダを選択します。
	5.	インストールが完了すると、拡張機能がアクティブになり、textarea内で文字を入力すると文字数が表示されます。
	6.	Clone or download this repository locally.
	7.	Go to the Chrome Extensions page.
	8.	Enable “Developer mode” on the top right.
	9.	Click “Load unpacked” and select the folder of this extension.
	10.	Once installed, the extension will be active, and the character count will be displayed as you type in any textarea.

ファイル構成 (File Structure)

	•	manifest.json: Chrome拡張機能の設定ファイル。
	•	content.js: textareaに文字数を表示するメインスクリプト。
	•	manifest.json: Configuration file for the Chrome extension.
	•	content.js: Main script to display character count in textarea.

注意事項 (Notes)

	•	最新バージョンのChromeでの使用を推奨します。Intl.Segmenterを使用しているため、古いバージョンでは動作しない可能性があります。
	•	文字数カウンターの位置やスタイルを調整したい場合は、content.js内でcounter.styleプロパティを変更してください。
	•	This extension is recommended for use with the latest version of Chrome, as it uses Intl.Segmenter, which may not work in older versions.
	•	If you want to adjust the position or style of the character counter, modify the counter.style properties in content.js.
# chrome_mojicount
