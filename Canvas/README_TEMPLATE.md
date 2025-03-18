# Canvas个人学习

## 🚀 项目概览

### 项目介绍
这是一个基于 Vue3 + TypeScript 的企业级前端工程化模板，集成了最佳实践方案，包含：

- **现代技术栈**：Vue3 Composition API + TypeScript + Vite4
- **状态管理**：Pinia 状态管理方案
- **路由方案**：Vue Router 4 路由系统
- **代码规范**：ESLint + Prettier + Stylelint 三件套
- **测试方案**：Vitest + Testing Library 单元测试
- **工程配置**：环境变量管理、代理配置、路径别名等

### 核心特性
- ✅ 完全 TypeScript 开发支持
- ✅ 组件自动化按需导入
- ✅ 智能 SVG 图标处理方案
- ✅ 现代化 CSS 解决方案（PostCSS + CSS Modules）
- ✅ 多环境构建配置（开发/测试/生产）
- ✅ 完善的 Git 提交规范（Commitizen + Commitlint）

## 📁 项目结构

```bash
.
├── .github/                  # GitHub 工作流配置
├── .husky/                   # Git hooks 配置
├── public/                   # 静态资源
│   └── favicon.ico
├── src/
│   ├── assets/               # 动态资源
│   │   ├── styles/           # 全局样式
│   │   └── svg/              # SVG 图标目录
│   ├── components/           # 公共组件
│   │   └── Base/             # 基础组件（命名规范）
│   ├── composables/          # 组合式函数
│   ├── layouts/              # 布局组件
│   ├── router/               # 路由配置
│   │   └── index.ts
│   ├── stores/               # Pinia 状态管理
│   │   └── modules/          # 模块化状态
│   ├── types/                # 类型定义
│   ├── utils/                # 工具函数
│   ├── views/                # 页面组件
│   ├── App.vue               # 根组件
│   └── main.ts               # 入口文件
├── tests/                    # 测试目录
│   ├── unit/                 # 单元测试
│   └── e2e/                  # E2E 测试
├── .env.development          # 开发环境变量
├── .env.production           # 生产环境变量
├── vite.config.ts            # Vite 核心配置
├── tsconfig.json             # TypeScript 配置
├── package.json              # 项目依赖
└── README.md                 # 项目文档