# 部署指南

## 部署到Vercel

### 方法一：通过Vercel Dashboard

1. 访问 [Vercel](https://vercel.com) 并登录（使用GitHub账号）
2. 点击 "Add New Project"
3. 导入你的GitHub仓库
4. Vercel会自动检测Next.js项目
5. 点击 "Deploy" 即可

### 方法二：通过Vercel CLI

```bash
# 安装Vercel CLI
npm i -g vercel

# 在项目目录下运行
vercel

# 按照提示完成部署
```

## 环境变量（可选）

如果需要使用GitHub API获取项目实时数据，可以在Vercel项目设置中添加环境变量：

- `GITHUB_TOKEN`: GitHub Personal Access Token（可选，用于提高API请求限制）

## 自定义域名

1. 在Vercel项目设置中，进入 "Domains"
2. 添加你的自定义域名
3. 按照提示配置DNS记录

## GitHub仓库设置

### 创建GitHub仓库

1. 在GitHub上创建新仓库（例如：`green-portfolio`）
2. 将本地代码推送到GitHub：

```bash
git add .
git commit -m "Initial commit: Personal portfolio website"
git branch -M main
git remote add origin https://github.com/Genlei-Wang/green-portfolio.git
git push -u origin main
```

### 连接Vercel

1. 在Vercel中导入GitHub仓库
2. Vercel会自动检测Next.js配置
3. 每次推送到main分支，Vercel会自动部署

## 更新项目信息

### 更新项目数据

编辑 `data/projects.ts` 文件，更新项目信息：

- 添加GitHub仓库URL
- 添加项目预览图片
- 更新项目描述和标签

### 更新联系方式

编辑 `app/contact/page.tsx`，更新：
- 邮箱地址
- GitHub用户名
- LinkedIn链接

### 更新个人信息

编辑 `app/about/page.tsx`，更新：
- 个人简介
- 工作经历
- 技能描述

## 性能优化

项目已包含以下优化：

- ✅ Next.js SSR/SSG
- ✅ 图片优化（Next.js Image组件）
- ✅ 代码分割
- ✅ 响应式设计
- ✅ 深色模式支持

## 故障排除

### 构建失败

检查：
1. 所有依赖是否已安装
2. TypeScript类型错误
3. 环境变量配置

### 图片不显示

确保：
1. 图片路径正确（相对于public目录）
2. 图片文件存在
3. 图片格式支持（建议使用PNG或WebP）

