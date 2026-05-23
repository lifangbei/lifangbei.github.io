# lifangbei-github.io

基于 GitHub Pages 的个人主页（纯静态：HTML/CSS/JS，无需构建工具）。

## 本地预览

直接双击打开 `index.html` 即可，或在仓库根目录启动一个本地静态服务器：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 自定义内容

主要修改以下文件：

- `index.html`
  - 基本信息：`#profile` 区块（昵称、简介、所在地、邮箱、社交链接）
  - 项目/作品：`#projects` 区块中的卡片
  - 技术栈：`#skills` 区块中的标签与进度条
  - 文章/动态：`#posts` 区块中的列表
- `assets/css/style.css`
  - 颜色、布局、卡片样式、响应式断点
- `assets/js/main.js`
  - 深浅色主题切换与记忆逻辑（`localStorage`）

## 部署说明

- 仓库为 `username.github.io` 形式，主页入口为根目录 `index.html`。
- 已添加 `.nojekyll`，避免 Jekyll 处理静态资源路径。
