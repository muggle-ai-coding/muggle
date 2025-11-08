# 🗺️ 網站地圖 - 所有頁面網址參考

> 更新日期：2025-11-08

本文件列出網站所有可訪問的頁面及其對應的原始檔案位置。

---

## 🏠 首頁

### 英文首頁
- **線上網址**：https://muggle-ai-coding.github.io/muggle/
- **本地網址**：http://localhost:4321/muggle/
- **原始檔案**：`src/pages/index.astro`

### 中文首頁
- **線上網址**：https://muggle-ai-coding.github.io/muggle/zh/
- **本地網址**：http://localhost:4321/muggle/zh/
- **原始檔案**：`src/pages/zh/index.astro`

---

## 📝 部落格文章列表

### 英文文章列表（所有分類）
- **線上網址**：https://muggle-ai-coding.github.io/muggle/blog
- **本地網址**：http://localhost:4321/muggle/blog
- **原始檔案**：`src/pages/blog/index.astro`

### 中文文章列表（所有分類）
- **線上網址**：https://muggle-ai-coding.github.io/muggle/zh/blog
- **本地網址**：http://localhost:4321/muggle/zh/blog
- **原始檔案**：`src/pages/zh/blog/index.astro`

---

## 🔍 按分類過濾的文章列表

### Cloud（雲端自動化）

#### 英文
- **線上網址**：https://muggle-ai-coding.github.io/muggle/blog?category=cloud
- **本地網址**：http://localhost:4321/muggle/blog?category=cloud
- **原始檔案**：`src/pages/blog/index.astro`（透過 URL 參數過濾）

#### 中文
- **線上網址**：https://muggle-ai-coding.github.io/muggle/zh/blog?category=cloud
- **本地網址**：http://localhost:4321/muggle/zh/blog?category=cloud
- **原始檔案**：`src/pages/zh/blog/index.astro`（透過 URL 參數過濾）

### Desktop（桌面自動化）

#### 英文
- **線上網址**：https://muggle-ai-coding.github.io/muggle/blog?category=desktop
- **本地網址**：http://localhost:4321/muggle/blog?category=desktop
- **原始檔案**：`src/pages/blog/index.astro`（透過 URL 參數過濾）

#### 中文
- **線上網址**：https://muggle-ai-coding.github.io/muggle/zh/blog?category=desktop
- **本地網址**：http://localhost:4321/muggle/zh/blog?category=desktop
- **原始檔案**：`src/pages/zh/blog/index.astro`（透過 URL 參數過濾）

### Web（網頁開發）

#### 英文
- **線上網址**：https://muggle-ai-coding.github.io/muggle/blog?category=web
- **本地網址**：http://localhost:4321/muggle/blog?category=web
- **原始檔案**：`src/pages/blog/index.astro`（透過 URL 參數過濾）

#### 中文
- **線上網址**：https://muggle-ai-coding.github.io/muggle/zh/blog?category=web
- **本地網址**：http://localhost:4321/muggle/zh/blog?category=web
- **原始檔案**：`src/pages/zh/blog/index.astro`（透過 URL 參數過濾）

---

## 📚 核心概念頁面

### 英文版
- **線上網址**：https://muggle-ai-coding.github.io/muggle/core-concepts
- **本地網址**：http://localhost:4321/muggle/core-concepts
- **原始檔案**：`src/pages/core-concepts/index.astro`

### 中文版
- **線上網址**：https://muggle-ai-coding.github.io/muggle/zh/core-concepts
- **本地網址**：http://localhost:4321/muggle/zh/core-concepts
- **原始檔案**：`src/pages/zh/core-concepts/index.astro`

---

## 📖 範例文章

### Google Sheets 自動化教學

#### 英文版
- **線上網址**：https://muggle-ai-coding.github.io/muggle/blog/en/example-automate-google-sheets
- **本地網址**：http://localhost:4321/muggle/blog/en/example-automate-google-sheets
- **原始檔案**：`src/content/blog/en/example-automate-google-sheets.md`

#### 中文版
- **線上網址**：https://muggle-ai-coding.github.io/muggle/blog/zh/example-automate-google-sheets
- **本地網址**：http://localhost:4321/muggle/blog/zh/example-automate-google-sheets
- **原始檔案**：`src/content/blog/zh/example-automate-google-sheets.md`

---

## 📝 如何新增文章

### 新增英文文章
1. 在 `src/content/blog/en/` 建立新的 `.md` 檔案
2. 使用以下 frontmatter：
   ```markdown
   ---
   title: "Your Article Title"
   description: "Brief description"
   pubDate: 2025-11-08
   category: "cloud"  # cloud, desktop, web, core-concepts, more-cases
   lang: "en"
   featured: false
   ---
   ```
3. 文章會自動出現在：
   - 文章列表：https://muggle-ai-coding.github.io/muggle/blog
   - 文章頁面：https://muggle-ai-coding.github.io/muggle/blog/en/你的檔名

### 新增中文文章
1. 在 `src/content/blog/zh/` 建立新的 `.md` 檔案
2. 使用 `lang: "zh"` 在 frontmatter 中
3. 文章會自動出現在：
   - 文章列表：https://muggle-ai-coding.github.io/muggle/zh/blog
   - 文章頁面：https://muggle-ai-coding.github.io/muggle/blog/zh/你的檔名

---

## 🎨 元件檔案位置

### 可重用元件
- **Header（導航列）**：`src/components/Header.astro`
- **Footer（頁尾）**：`src/components/Footer.astro`
- **CategoryCard（首頁卡片）**：`src/components/CategoryCard.astro`

### 佈局檔案
- **基礎佈局**：`src/layouts/BaseLayout.astro`
- **部落格文章佈局**：`src/layouts/BlogPost.astro`

### 樣式檔案
- **全域樣式**：`src/styles/global.css`

---

## 🔄 URL 結構說明

### 文章 URL 格式
```
/{語言}/blog/{分類}/{檔名}

範例：
/blog/en/my-first-automation     (英文文章)
/blog/zh/my-first-automation     (中文文章)
```

### 語言切換
- 英文頁面不需要語言前綴（例如：`/blog`）
- 中文頁面需要 `/zh/` 前綴（例如：`/zh/blog`）
- 導航列右上角有語言切換按鈕

### 分類過濾
使用 URL 參數 `?category=分類名稱` 來過濾文章：
- `?category=cloud` - 雲端自動化
- `?category=desktop` - 桌面自動化
- `?category=web` - 網頁開發
- `?category=core-concepts` - 核心概念
- `?category=more-cases` - 更多案例

---

## 🚀 快速測試連結

### 本地開發（需先執行 `npm run dev`）
- 英文首頁：http://localhost:4321/muggle/
- 中文首頁：http://localhost:4321/muggle/zh/
- 範例文章（中文）：http://localhost:4321/muggle/blog/zh/example-automate-google-sheets

### 線上網站
- 英文首頁：https://muggle-ai-coding.github.io/muggle/
- 中文首頁：https://muggle-ai-coding.github.io/muggle/zh/
- 範例文章（中文）：https://muggle-ai-coding.github.io/muggle/blog/zh/example-automate-google-sheets

---

## 📱 測試建議

1. **桌面版測試**
   - 導航列功能
   - 語言切換
   - 卡片點擊
   - 文章連結

2. **手機版測試**（在瀏覽器按 F12 切換）
   - 選擇不同裝置（iPhone、iPad、Android）
   - 測試響應式佈局
   - 測試觸控互動

3. **功能測試**
   - 分類過濾是否正常
   - 文章內程式碼高亮是否顯示
   - 內部連結是否正確
   - 語言切換是否保持在相同頁面類型

---

## 🔗 相關文件

- **快速開始**：`QUICK_START.md`
- **設定總結**：`SETUP_SUMMARY.md`
- **專案說明**：`README.md`
- **新手指南**：`00-START_HERE.md`

---

**提示**：複製任何網址時，記得檢查是要使用本地網址（開發時）還是線上網址（分享給他人時）！

