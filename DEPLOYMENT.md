# TON University 部署指南

## 本地开发

### 环境要求
- Node.js 18+
- npm 或 yarn

### 安装和运行
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 部署到 Vercel (推荐)

### 1. 准备部署
确保你的代码已经推送到 GitHub 仓库。

### 2. 连接 Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "New Project"
4. 选择你的 TON University 仓库
5. 配置项目设置：
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: .next
   - Install Command: `npm install`

### 3. 环境变量配置
在 Vercel 项目设置中添加以下环境变量：
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 4. 自定义域名
1. 在 Vercel 项目设置中点击 "Domains"
2. 添加你的自定义域名
3. 配置 DNS 记录

## 部署到其他平台

### Netlify
1. 连接 GitHub 仓库
2. 构建命令: `npm run build`
3. 发布目录: `.next`

### Railway
1. 连接 GitHub 仓库
2. 自动检测 Next.js 项目
3. 配置环境变量

### 传统服务器
```bash
# 构建项目
npm run build

# 复制文件到服务器
scp -r .next package.json package-lock.json user@server:/path/to/app

# 在服务器上安装依赖
npm install --production

# 启动服务
npm start
```

## SEO 优化

### 1. 更新元数据
在 `app/layout.tsx` 中更新以下信息：
- 网站 URL
- Google Analytics ID
- 社交媒体链接

### 2. 添加 Google Analytics
```bash
npm install @vercel/analytics
```

在 `app/layout.tsx` 中添加：
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 3. 提交 Sitemap
1. 访问 Google Search Console
2. 添加你的网站
3. 提交 sitemap.xml

## 性能优化

### 1. 图片优化
- 使用 Next.js Image 组件
- 压缩图片文件
- 使用 WebP 格式

### 2. 代码分割
- 使用动态导入
- 优化包大小
- 启用 gzip 压缩

### 3. 缓存策略
- 设置适当的缓存头
- 使用 CDN
- 优化静态资源

## 监控和维护

### 1. 错误监控
推荐使用 Sentry：
```bash
npm install @sentry/nextjs
```

### 2. 性能监控
- Vercel Analytics
- Google PageSpeed Insights
- Web Vitals

### 3. 定期更新
- 更新依赖包
- 检查安全漏洞
- 优化性能

## 故障排除

### 常见问题

1. **构建失败**
   - 检查 Node.js 版本
   - 清理 node_modules 重新安装
   - 检查 TypeScript 错误

2. **样式问题**
   - 确保 Tailwind CSS 配置正确
   - 检查 CSS 导入顺序

3. **SEO 问题**
   - 验证 meta 标签
   - 检查 robots.txt
   - 测试 sitemap

### 获取帮助
- 查看 [Next.js 文档](https://nextjs.org/docs)
- 参考 [Vercel 文档](https://vercel.com/docs)
- 提交 GitHub Issue
