# TON University

TON University 是一个现代化的 TON 区块链学习平台，提供从基础入门到高级开发的完整学习路径。

## 特性

- 🎓 **系统化学习路径** - 从基础概念到高级应用开发
- 💻 **实战项目** - 通过真实项目练习，掌握实际开发技能
- 👥 **社区支持** - 加入开发者社区，分享经验和解决问题
- 🚀 **最新技术** - 紧跟 TON 生态发展，学习最新技术和工具
- 📱 **响应式设计** - 完美适配各种设备
- 🔍 **SEO 友好** - 优化的搜索引擎可见性

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **组件**: shadcn/ui
- **图标**: Lucide React
- **类型**: TypeScript
- **部署**: Vercel (推荐)

## 快速开始

### 环境要求

- Node.js 18+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

### 启动生产服务器

```bash
npm start
# 或
yarn start
```

## 项目结构

```
ton-university/
├── app/                    # Next.js App Router
│   ├── courses/           # 课程页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页
├── components/            # React 组件
│   ├── ui/               # UI 组件库
│   ├── header.tsx        # 头部导航
│   └── footer.tsx        # 页脚
├── lib/                  # 工具函数
│   └── utils.ts          # 通用工具
├── public/               # 静态资源
└── content/              # 课程内容 (Markdown)
```

## 课程体系

### 初级课程
- **TON 基础入门** - 了解 TON 区块链的基本概念和架构
- **区块链基础** - 掌握区块链技术的核心原理

### 中级课程
- **智能合约开发** - 学习 FunC 和 Tact 语言
- **NFT 市场开发** - 构建 NFT 交易平台
- **钱包集成** - 学习钱包连接和交互

### 高级课程
- **DApp 开发实战** - 构建完整的去中心化应用
- **DeFi 协议开发** - 开发 DeFi 协议
- **智能合约安全审计** - 安全审计技术

## 贡献指南

我们欢迎社区贡献！请查看 [贡献指南](CONTRIBUTING.md) 了解如何参与项目开发。

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系我们

- 网站: [https://ton.university](https://ton.university)
- 邮箱: contact@ton.university
- GitHub: [https://github.com/ton-university](https://github.com/ton-university)

## 致谢

感谢 TON 基金会和所有为 TON 生态做出贡献的开发者们！
