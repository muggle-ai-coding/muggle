# 🧙 Muggle's AI Coding Path

> Automate Daily Office Work via AI Coding

一個幫助沒有編程經驗的人學習使用 AI 進行編程，自動化辦公室例行工作的教學網站。

A learning website to help people with no coding experience learn AI-assisted programming to automate routine office tasks.

## 🚀 Quick Start

### Prerequisites

- Node.js 18 或更新版本
- npm 或 yarn

### Local Development

1. **安裝依賴 / Install dependencies**
```bash
npm install
```

2. **啟動開發伺服器 / Start development server**
```bash
npm run dev
```

3. **在瀏覽器開啟 / Open in browser**
```
http://localhost:4321
```

現在你可以在 Cursor 編輯 Markdown 檔案，儲存後瀏覽器會自動重新載入！

Now you can edit Markdown files in Cursor, and the browser will auto-reload when you save!

### Building for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
Muggle/
├── public/              # 靜態檔案
├── src/
│   ├── components/      # 可重用元件
│   ├── content/
│   │   └── blog/        # 部落格文章（Markdown）
│   │       ├── en/      # 英文文章
│   │       └── zh/      # 中文文章
│   ├── layouts/         # 頁面佈局
│   ├── pages/           # 頁面路由
│   │   ├── index.astro  # 英文首頁
│   │   ├── blog/        # 英文部落格
│   │   └── zh/          # 中文版本
│   └── styles/          # 全域樣式
├── astro.config.mjs     # Astro 設定
└── package.json
```

## ✍️ Writing Content

### 新增英文文章 / Add English Article

1. 在 `src/content/blog/en/` 建立新的 `.md` 檔案
2. 加入 frontmatter：

```markdown
---
title: "Your Article Title"
description: "Brief description"
pubDate: 2025-11-07
category: "cloud"  # cloud, desktop, web, core-concepts, more-cases
lang: "en"
featured: false
---

Your content here...
```

### 新增中文文章 / Add Chinese Article

1. 在 `src/content/blog/zh/` 建立新的 `.md` 檔案
2. 加入 frontmatter（使用 `lang: "zh"`）

## 🌐 Categories

- `cloud` - ☁️ Cloud Automation (Google Workspace)
- `desktop` - 💻 Desktop Automation (Microsoft Office)
- `web` - 🌐 Web Development
- `core-concepts` - 📚 Core Concepts
- `more-cases` - 💡 More Cases

## 🚢 Deployment to GitHub Pages

### Initial Setup

1. **更新 `astro.config.mjs`**
   - 將 `site` 改為你的 GitHub Pages URL
   - 例如：`https://yourusername.github.io`

2. **在 GitHub 建立 Repository**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/muggle-ai-coding/muggle.git
git push -u origin main
```

3. **啟用 GitHub Pages**
   - 前往 GitHub repository Settings
   - 點選 Pages
   - Source: GitHub Actions

4. **推送程式碼後自動部署**
```bash
git add .
git commit -m "Update content"
git push
```

網站會在 1-2 分鐘內自動部署到 `https://yourusername.github.io/Muggle`

## 📊 Analytics

### 設定 Google Analytics

1. 前往 [Google Analytics](https://analytics.google.com) 建立帳號
2. 取得你的 GA4 Measurement ID (格式：G-XXXXXXXXXX)
3. 編輯 `src/layouts/BaseLayout.astro`
4. 取消註解 Google Analytics 區塊並填入你的 ID

## 🎨 Customization

### 修改顏色主題

編輯 `src/styles/global.css` 中的 `:root` 變數：

```css
:root {
  --color-primary: #3b82f6;      /* 主要顏色 */
  --color-primary-dark: #2563eb; /* 主要顏色（深色） */
  /* ... */
}
```

### 修改網站名稱

編輯以下檔案中的網站名稱：
- `src/components/Header.astro`
- `src/pages/index.astro`
- `src/pages/zh/index.astro`

## 🔧 Tech Stack

- **Framework:** [Astro](https://astro.build) - 靜態網站生成器
- **Styling:** CSS (原生，不需額外框架)
- **Deployment:** GitHub Pages (免費)
- **Content:** Markdown + MDX

## 📝 License

MIT

## 🤝 Contributing

歡迎提交 Issue 或 Pull Request！

---

**建立日期：** 2025-11-07  
**最後更新：** 2025-11-07  
**網站狀態：** 正在部署中

