# Green Wang Portfolio

王格林的个人主页，用于对外展示 SaaS / AI 产品经理经历、vibe coding 项目、教育与工作履历，以及公开联系方式。

线上仓库：[https://github.com/Genlei-Wang/green-portfolio](https://github.com/Genlei-Wang/green-portfolio)

## 当前定位

这个网站面向创业者、产品同行、HR 和潜在合作方。首页参考 Paperfolio 的视觉语言：白底、黑色粗边框、硬阴影、高饱和色块、极简导航和大标题表达。

页面结构：

1. 首页：一句话介绍身份，右侧展示个人头像插画。
2. 关于我：总结 SaaS、AI 产品经验和关键结果。
3. Vibe coding 项目：展示独立开发项目和 GitHub 仓库。
4. 教育和工作经历：展示浙江大学本硕、帆软、影刀、美团等经历。
5. 联系方式：邮箱弹窗复制，GitHub 外链访问。

## 项目清单

| 项目 | 简介 | GitHub |
| --- | --- | --- |
| 网页暗黑主题插件 | 把加载异常的白屏网页一键变成可读的暗黑模式。 | [WebColorChange](https://github.com/Genlei-Wang/WebColorChange) |
| 网页随时记笔记插件 | 浏览网页时随手记录，并支持通过 API 同步到 flomo。 | [web-note-extention--](https://github.com/Genlei-Wang/web-note-extention--) |
| 个人主页 | 当前项目，用于介绍作品、沉淀复盘、发布自媒体内容。 | [green-portfolio](https://github.com/Genlei-Wang/green-portfolio) |
| 圣诞树 | 给家里人的节日小礼物，也作为轻量互动网页发布到 Vercel。 | [christmas-tree](https://github.com/Genlei-Wang/christmas-tree) |
| Boss直聘 Agent 插件 | 企业内部 HR 正在使用的招聘 Agent 插件，已分析 1900 份简历。 | [HR_Agent_Boss](https://github.com/Genlei-Wang/HR_Agent_Boss) |
| 同时问多个 AI LLM 插件 | 一次补充关键信息，同时让多个模型参与发散调研和头脑风暴。 | [MultiLLM-Connector](https://github.com/Genlei-Wang/MultiLLM-Connector) |
| 日报通 | 给银行职员使用的 Windows 自动日报软件，每天早上节省 10 分钟。 | [AutoDaily](https://github.com/Genlei-Wang/AutoDaily) |
| 破冰游戏汇总 | 围绕产品组高频玩法整理的破冰游戏工具，目前先做了海龟汤。 | [ice-breaker-collection](https://github.com/Genlei-Wang/ice-breaker-collection) |
| 高情商嘴替 | 微信小程序，把难开口的话改写成更得体的表达。 | [High-EQ-Responder](https://github.com/Genlei-Wang/High-EQ-Responder) |

## 关键内容

- 4 年 SaaS、AI 产品经验。
- 浙江大学本硕。
- 帆软简道云：负责国内 Top1 零代码平台流程模块，主导 BPMN 架构重构和 1w+ 付费企业迁移。
- 影刀：负责企业级 AI Agent 网页自动化搭建工具 0-1，推动 Chat + Workflow 和 Multi-Agent 架构。
- Vibe coding：持续使用 Cursor、Supabase 等工具独立开发真实可用的小产品。

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## 本地开发

```bash
npm install
npm run dev
```

默认会启动在 `http://localhost:3000`。如果端口被占用，Next.js 会自动切换到下一个可用端口，例如 `http://localhost:3001`。

常用命令：

```bash
npm run lint
./node_modules/.bin/tsc --noEmit
npm run build
```

## 部署

项目适合部署到 Vercel。

推荐方式：

1. 在 Vercel 中导入 GitHub 仓库 `Genlei-Wang/green-portfolio`。
2. Framework Preset 选择 Next.js。
3. Build Command 使用默认的 `npm run build`。
4. 每次推送到 `main` 分支后，Vercel 自动部署最新版本。

也可以使用 Vercel CLI：

```bash
vercel --prod
```

## 主要数据入口

- 项目数据：[data/projects.ts](data/projects.ts)
- 首页与主页面结构：[app/page.tsx](app/page.tsx)
- 弹窗按钮组件：[components/ActionModalButton.tsx](components/ActionModalButton.tsx)
- 个人头像：[public/images/personal-avatar.png](public/images/personal-avatar.png)

## 联系方式

- Email: `wanggenlei2022@163.com`
- GitHub: [https://github.com/Genlei-Wang](https://github.com/Genlei-Wang)
