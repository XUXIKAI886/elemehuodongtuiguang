# 饿了么活动推广知识

基于 VitePress 构建的知识手册，整理饿了么平台的活动运营与推广提量实战经验。文档内容按照“活动运营 / 推广提量”两大模块组织，帮助门店快速定位策略、配置建议与指标监控方法。

## 快速开始

```bash
npm install
npm run docs:dev
```

> 启动前请先执行 `netstat -ano | findstr :3000` 确认端口未被占用，并在 `AGENTS.md` 记录检测与启动命令。

## 项目结构

```
├─ docs
│  ├─ .vitepress
│  │  ├─ config.ts        # 站点配置（导航、品牌信息、搜索等）
│  │  └─ theme/           # 自定义主题与样式
│  ├─ 活动/               # 活动运营模块：立减、满减、返券等专题
│  ├─ 推广/               # 推广提量模块：推广魔方、斗金推广等专题
│  └─ public/images       # 站点图片资源
├─ .github/workflows      # GitHub Actions 部署工作流
├─ AGENTS.md              # 端口检测与启动记录
├─ package.json           # 项目依赖与脚本
└─ README.md
```

## 部署说明

仓库已配置 GitHub Actions（`.github/workflows/deploy.yml`），推送到 `main` 分支后会自动执行以下流程：

1. `npm ci` 安装依赖
2. `npm run docs:build` 构建静态站点
3. 将 `docs/.vitepress/dist` 发布到 GitHub Pages

请在仓库设置的 Pages 菜单中选择“GitHub Actions”作为发布来源。若仓库名不是根仓库（`username.github.io`），可根据实际路径在 `docs/.vitepress/config.ts` 中设置 `base` 值。

## 贡献建议

- 所有文档、注释需使用中文。
- 每个文件行数（Markdown/TypeScript/CSS 等）需遵守项目行数上限规范。
- 提交前确认 `docs/.vitepress/cache` 与 `docs/.vitepress/dist` 未被纳入版本控制。
- 若需新增端口或启动流程，请同步更新 `AGENTS.md`。
