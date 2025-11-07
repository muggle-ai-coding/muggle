# 🚀 快速開始指南

## 🎯 你的工作流程

### 1️⃣ 啟動開發伺服器（只需做一次）

在終端機執行：
```bash
cd "/Users/lopei-chi/Library/CloudStorage/GoogleDrive-peggylo.tw@gmail.com/我的雲端硬碟/AI Coding/Muggle"
npm run dev
```

✅ 你會看到類似這樣的訊息：
```
🚀 astro v4.0.7 started in XXXms

  ┃ Local    http://localhost:4321/
  ┃ Network  use --host to expose
```

### 2️⃣ 在瀏覽器開啟

打開瀏覽器，前往：
```
http://localhost:4321/Muggle/
```

> 注意：如果你之後會部署到 GitHub Pages，URL 會包含 `/Muggle/`

### 3️⃣ 編輯內容（就像在 HackMD！）

#### 📝 新增文章

**英文文章：**
1. 在 Cursor 中建立檔案：`src/content/blog/en/your-article-name.md`
2. 複製這個模板：

```markdown
---
title: "Your Amazing Tutorial"
description: "A brief description of what readers will learn"
pubDate: 2025-11-07
category: "cloud"
lang: "en"
featured: false
---

## Introduction

Your content here...

### Step 1

Details...

## Conclusion

More content...
```

3. **儲存檔案** → 瀏覽器自動重新載入 ✨
4. 刷新瀏覽器看到你的新文章！

**中文文章：**
- 在 `src/content/blog/zh/` 建立檔案
- 使用 `lang: "zh"` 在 frontmatter

#### 🎨 修改首頁

- 英文首頁：`src/pages/index.astro`
- 中文首頁：`src/pages/zh/index.astro`

編輯這些檔案，儲存，瀏覽器就會立即更新！

### 4️⃣ 預覽你的修改

開發伺服器執行時：
- 左側螢幕：Cursor 編輯器
- 右側螢幕：瀏覽器顯示網站
- **存檔 = 即時看到變化** 🎉

## 📊 Categories 分類

選擇正確的分類很重要：

- `cloud` - ☁️ 雲端自動化（Google Workspace）
- `desktop` - 💻 桌面自動化（Microsoft Office）
- `web` - 🌐 網頁開發
- `core-concepts` - 📚 核心概念
- `more-cases` - 💡 更多案例

## 🌍 多語言

網站已經設定好雙語支援：

- `yoursite.com/Muggle/` - 英文首頁
- `yoursite.com/Muggle/zh/` - 中文首頁
- `yoursite.com/Muggle/blog/your-post` - 英文文章
- `yoursite.com/Muggle/zh/blog/your-post` - 中文文章

切換語言按鈕會自動顯示在導航列！

## 🚢 發布到網路

### 第一次設定

1. **更新 GitHub 設定**

編輯 `astro.config.mjs`：
```javascript
export default defineConfig({
  site: 'https://你的GitHub帳號.github.io',
  base: '/Muggle',
  // ...
});
```

2. **建立 GitHub Repository**

```bash
git init
git add .
git commit -m "Initial commit: Muggle's AI Coding Path"
git branch -M main
git remote add origin https://github.com/你的帳號/Muggle.git
git push -u origin main
```

3. **啟用 GitHub Pages**

- 前往 GitHub → Repository → Settings
- 點選左側的 "Pages"
- Source 選擇：**GitHub Actions**
- 儲存

### 之後的更新（每次新增文章）

```bash
git add .
git commit -m "新增文章：你的文章標題"
git push
```

⏱️ 等待 1-2 分鐘，網站就會自動更新！

你的網站網址：`https://你的帳號.github.io/Muggle/`

## 📊 設定 Google Analytics

想要追蹤訪客統計？

1. 前往 [Google Analytics](https://analytics.google.com)
2. 建立新資源，取得 Measurement ID（格式：`G-XXXXXXXXXX`）
3. 編輯 `src/layouts/BaseLayout.astro`
4. 找到這一段，取消註解並填入你的 ID：

```html
<!-- Google Analytics - Replace with your GA4 ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); // 改成你的 ID
</script>
```

5. 儲存並部署

現在你可以在 Google Analytics 看到：
- 訪客人數
- 哪些頁面最受歡迎
- 訪客來自哪些國家
- 更多數據...

## 🎥 嵌入影片、圖片

### YouTube 影片

在 Markdown 文章中：

```markdown
## Watch the Demo

<iframe width="100%" height="400" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

### 圖片

```markdown
![描述文字](https://example.com/image.png)

或使用本地圖片：
![描述文字](/Muggle/images/your-image.png)
```

（本地圖片放在 `public/images/` 資料夾）

### GIF 動畫

```markdown
![操作示範](https://your-gif-url.gif)
```

## 🆘 常見問題

### Q: 開發伺服器沒有啟動？
```bash
# 確保你在正確的目錄
cd "/Users/lopei-chi/Library/CloudStorage/GoogleDrive-peggylo.tw@gmail.com/我的雲端硬碟/AI Coding/Muggle"

# 重新安裝依賴
npm install

# 啟動
npm run dev
```

### Q: 修改後瀏覽器沒有更新？
- 確保檔案有儲存
- 手動重新整理瀏覽器（⌘+R 或 Ctrl+R）
- 檢查終端機是否有錯誤訊息

### Q: 如何停止開發伺服器？
在終端機按 `Ctrl+C`

### Q: 文章沒有顯示？
檢查 frontmatter：
- `pubDate` 格式正確嗎？（YYYY-MM-DD）
- `category` 是否為有效值？
- `lang` 設定正確嗎？（"en" 或 "zh"）

### Q: 我想要自訂域名怎麼辦？
1. 購買域名（例如 Namecheap、GoDaddy）
2. 在 GitHub Repository 設定中加入 Custom domain
3. 在域名服務商設定 DNS 指向 GitHub Pages
4. 更新 `astro.config.mjs` 中的 `site` 和移除 `base`

## 💡 小技巧

### 寫作流程建議

1. **先用中文/英文腦力激盪** → 列出大綱
2. **用 AI 協助產生草稿** → 複製到 AI (ChatGPT/Claude)：
   ```
   幫我寫一篇關於「XXX」的教學文章，
   目標讀者是完全沒有編程經驗的人，
   需要包含詳細步驟和截圖說明。
   ```
3. **修改和調整** → 加入你的個人經驗
4. **加入實際的截圖和範例程式碼**
5. **儲存 → 預覽 → 發布**

### 多裝置開發

開發伺服器啟動後，在同一個 Wi-Fi 下的其他裝置也可以預覽：

```bash
npm run dev -- --host
```

然後在手機/平板瀏覽器輸入你電腦的 IP（終端機會顯示）

---

## ✅ 確認清單

部署前檢查：

- [ ] 更新 `astro.config.mjs` 中的 GitHub 帳號
- [ ] 所有文章的 frontmatter 正確
- [ ] 測試英文和中文版本都能正常顯示
- [ ] 檢查連結都可以正常點擊
- [ ] 加入 Google Analytics ID（選用）
- [ ] README.md 中填寫正確的資訊

---

**祝你建立一個超棒的教學網站！** 🎉

有問題隨時使用 AI 協助除錯，或查看 [Astro 文件](https://docs.astro.build)。

