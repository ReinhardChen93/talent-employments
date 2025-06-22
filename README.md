# talent-employments

## 项目简介

本项目为"才人库劳务管理系统"前端，基于 [uni-app](https://uniapp.dcloud.io/) + [uni-ui](https://ext.dcloud.net.cn/plugin?id=55) 实现，适配多端（H5、小程序、App）。主要用于劳务人才的展示、招聘、消息沟通及个人中心管理。

## 主要页面

- **首页**：职位推荐、搜索、快速入口。
- **登录页**：支持手机号+密码、微信一键登录。
- **市场页**：人才列表浏览、分类筛选、技能标签展示。
- **消息页**：系统通知、沟通消息列表。
- **我的页**：用户信息、合同、收藏、实名认证、设置等。

## 技术栈

- uni-app (Vue3)
- uni-ui 组件库（已通过 uni_modules 集成）
- 原生 CSS + uni-scss

## 目录结构

```
talent-employments/
├── pages/                # 业务页面
│   ├── index/            # 首页
│   ├── login/            # 登录
│   ├── market/           # 市场/人才列表
│   ├── messages/         # 消息
│   └── my/               # 个人中心
├── static/               # 静态资源（图片、图标等）
├── uni_modules/          # uni-ui 及其依赖组件
├── App.vue               # 应用入口
├── main.js               # 入口JS
├── manifest.json         # 项目配置
├── pages.json            # 路由配置
└── README.md             # 项目说明
```

## 快速启动

1. 使用 HBuilderX 或 `npm` 导入本项目。
2. 确保已安装 `uni-ui` 组件库（已集成在 `uni_modules` 目录）。
3. 运行到 H5、小程序或App平台：
   - HBuilderX：点击"运行"按钮选择目标平台。
   - CLI：`npm run dev:%PLATFORM%`（如 `dev:h5`、`dev:mp-weixin`）。

## 依赖说明

- 主要UI依赖：[uni-ui](https://ext.dcloud.net.cn/plugin?id=55)
- 组件如 uni-card、uni-list、uni-tag、uni-forms、uni-icons 等均已通过 easycom 自动引入。
- 推荐使用 HBuilderX 或 `npm` 安装/升级 uni-ui 及其依赖。

## 页面功能说明

- **首页**：职位推荐、热门职位、搜索功能。
- **登录页**：手机号+密码登录、微信一键登录。
- **市场页**：人才列表、技能标签、分段筛选。
- **消息页**：系统通知、沟通消息。
- **我的页**：用户信息、合同、收藏、实名认证、设置、退出登录。

## 扩展与自定义

- 页面样式可通过 `uni-scss` 或自定义 CSS 修改。
- 新增页面请在 `pages/` 目录下创建，并在 `pages.json` 配置。
- 组件扩展建议优先使用 `uni_modules` 生态。

## 参考文档

- [uni-app 官方文档](https://uniapp.dcloud.io/)
- [uni-ui 组件文档](https://uniapp.dcloud.io/component/uniui/uni-ui)

---

如有问题或建议，欢迎反馈！
