# DevTools MCP Workshop Site (本地静态站点)

这是一个极简的静态站点，用于记录我参加的 Google DevFest Workshop（主题：Chrome DevTools MCP Server）。

文件结构：
- index.html — 首页
- gdg.html — 介绍 GDG / DevFest
- mcp.html — 介绍 DevTools MCP
- about.html — 关于我（Bill Zhao）
- styles.css — 全局样式
- script.js — 简单交互

如何预览：
1. 推荐在项目目录启动一个本地静态服务器（相对路径引用已配置），步骤：

```bash
# 进入站点目录
cd /Users/xl/code/gdc/devtools-mcp-site
# 启动一个简单的 HTTP 服务器（Python 3）
python3 -m http.server 8080
# 在浏览器打开： http://localhost:8080
```

部署到 GitHub Pages（自动化）
1. 将此项目推送到你的 GitHub 上的新仓库（例如：`your-username/devtools-mcp-site`）。
2. 默认分支名应为 `main`（我们的工作流触发条件为 push 到 `main`）。
3. 我已经添加了 GitHub Actions 工作流：`.github/workflows/deploy.yml`，当你把仓库 push 到 GitHub 后，Actions 会把站点内容部署到 GitHub Pages（使用官方 `upload-pages-artifact` 与 `deploy-pages` 操作）。

注意（我可以用 DevTools MCP 自动在 GitHub 上创建仓库并提交文件，但前提是你已在当前浏览器会话中登录 GitHub。若需要我代为自动化，请回复“用 MCP 创建仓库”，并确保你在浏览器中已完成登录；如果登录/双因素验证出现提示我会暂停并向你确认）。

注意事项：如果需要我在页面上输入任何敏感信息（账号、密码、验证码等），我会先暂停并向你确认。