# 项目协作约定

- 此仓库 `SRL-Development/Taoist-studies` 是玄道易术后续开发的主仓库。
- 保留独立 Docker 部署能力，访客无需 ChatGPT 登录。
- 默认 Dockerfile 打包 `dist/`；修改 `src/tools-pro.js` 后运行 `npm ci` 和 `npm run build` 并同步提交成品。
- 运行 `node scripts/check-dist.mjs`，对修改的 JavaScript 执行语法检查。
- 有 Docker 时构建并启动容器，再运行 `node scripts/smoke-docker.mjs`。没有 Docker 时明确报告未完成容器实测，依靠 CI 验证，不宣称已通过。
- 不提交 node_modules、.env、凭据、用户照片、出生资料、勘察档案或 Sites 平台标识。
- 符箓资料保留来源，区分历史图版、原创示意与传统信仰用途。
- 后续原生小程序适配方案见 `docs/MINIPROGRAM.md`；当前不是原生小程序工程。
