# Textarea文字数カウンター (Textarea Character Counter)

このChrome拡張機能は、ウェブページ上の`textarea`および`input[type="text"]`に文字数を表示します。入力フィールドにリアルタイムで現在の文字数が表示されるため、文字数制限がある場合などに便利です。

This Chrome extension displays the character count in `textarea` and `input[type="text"]` elements on webpages. It shows the current character count in real time, making it useful for fields with character limits.

---

## 機能 (Features)

- `textarea`および`input[type="text"]`要素に文字数カウンターを表示します。
- 除外したいサイトを設定ページで指定できます。
- ブラウザのツールバーのアイコンをクリックして、文字数カウンターの表示をオン/オフできます。
- 設定ページで`input[type="text"]`要素にも表示するか選択可能です。

- Display a character counter for `textarea` and `input[type="text"]` elements.
- Set specific sites to exclude in the settings page.
- Toggle the character counter on or off by clicking the extension icon in the browser toolbar.
- Choose in settings whether to include `input[type="text"]` elements.

---

## インストール方法 (Installation)

1. このリポジトリをクローンまたはダウンロードします。
2. Chromeの拡張機能管理ページ（`chrome://extensions/`）を開きます。
3. 右上の「デベロッパーモード」をオンにします。
4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、ダウンロードしたフォルダを選択します。

1. Clone or download this repository.
2. Open the Chrome extensions management page (`chrome://extensions/`).
3. Enable "Developer mode" in the upper-right corner.
4. Click "Load unpacked" and select the folder you downloaded.

---

## 使い方 (Usage)

### 文字数カウンターのオン/オフ (Toggle Character Counter)

ブラウザのツールバーに表示される拡張機能のアイコンをクリックすると、文字数カウンターの表示をオン/オフできます。アイコンが点灯している場合はカウンターがオン、消灯している場合はオフです。

Click the extension icon in the browser toolbar to toggle the character counter on or off. The icon is lit when the counter is on and unlit when it is off.

### 設定ページ (Settings Page)

1. Chromeの拡張機能管理ページ（`chrome://extensions/`）を開きます。
2. インストールした「Textarea文字数カウンター」の「詳細」をクリックします。
3. 「拡張機能のオプション」をクリックします。

1. Open the Chrome extensions management page (`chrome://extensions/`).
2. Click "Details" on the installed "Textarea Character Counter" extension.
3. Click "Extension options."

### 設定項目 (Settings Options)

- **`input[type="text"]`要素にも文字数カウンターを表示**：チェックを入れると、`input[type="text"]`にもカウンターが表示されます。
- **除外するサイト**：除外したいサイトのURLをカンマ区切りで入力します。例：`example.com, sample.org`

- **Show character counter on `input[type="text"]` elements**: Check this box to display the counter on `input[type="text"]` elements.
- **Excluded sites**: Enter URLs of sites to exclude, separated by commas. Example: `example.com, sample.org`

---

## 開発 (Development)

### アイコンの変更 (Changing Icons)

アイコン画像は `icons/` フォルダに配置しています。アイコンを変更する場合は、以下のファイル名とサイズに合わせて画像を追加してください：

- icon-on-16.png, icon-on-32.png, icon-on-48.png, icon-on-128.png
- icon-off-16.png, icon-off-32.png, icon-off-48.png, icon-off-128.png

Icons are located in the `icons/` folder. To change the icons, add images with the following file names and sizes:

- icon-on-16.png, icon-on-32.png, icon-on-48.png, icon-on-128.png
- icon-off-16.png, icon-off-32.png, icon-off-48.png, icon-off-128.png

### 開発用のヒント (Development Tips)

- **`chrome.storage.sync`** を使用して、設定を保存し、すべてのタブで共有します。
- **`chrome.runtime.lastError`** を使用して、アイコンやメッセージの送信時にエラーチェックを行います。
- `manifest.json` で `permissions` に `"storage"`, `"activeTab"`, `"scripting"` を指定しています。必要に応じて追加/削除してください。

- Use **`chrome.storage.sync`** to save and share settings across tabs.
- Check for errors using **`chrome.runtime.lastError`** when setting icons or sending messages.
- In `manifest.json`, permissions include `"storage"`, `"activeTab"`, and `"scripting"`. Add or remove as needed.

---

## 注意点 (Notes)

- 一部のウェブサイト（例：Chrome Web Store、内部ページ、`file://`ページ）では、拡張機能のコンテンツスクリプトを実行できません。
- コンテンツスクリプトは、特定のタイミングでロードされるため、場合によってはタブを再読み込みする必要があります。

- Some websites, like the Chrome Web Store, internal pages, and `file://` pages, do not allow content scripts.
- Content scripts load at a specific timing, so you may need to reload the tab occasionally.

---

## ライセンス (License)

MIT License

---