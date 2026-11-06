# Docker 独立部署

无需 ChatGPT / OpenAI 账号、API Key 或 Sites 托管。容器托管网站，计算和记录仍在访问者浏览器中完成。

## 一键启动

需要 Docker Engine 或 Docker Desktop（Linux 容器）及 Compose v2。
解压完整部署包，进入 compose.yaml 所在目录：

```sh
docker compose config
docker compose up -d --build
docker compose ps
```

访问 `http://服务器IP:8080`。放行服务器对应端口。`/healthz` 应返回 `ok`，容器应显示 healthy。
默认 Dockerfile 直接打包已构建的 dist，不需要服务器安装 Node 或访问 npm，但首次构建仍需拉取 Nginx 镜像。

可将 `.env.example` 复制为 `.env` 后修改 `HTTP_PORT`。例如改为 8090，就访问 8090 端口。
Linux 使用 `cp .env.example .env`，PowerShell 使用 `Copy-Item .env.example .env`。
`NGINX_IMAGE` 可指定可访问的可信镜像源，生产环境可固定已验证的镜像 digest。

## 日志、更新与回退

```sh
docker compose logs --tail=100 web
docker compose exec web nginx -t
# 更新 dist 或源码重新构建后
docker compose up -d --build
# 停止
docker compose down
```

升级前保留旧目录或镜像标签。回退时恢复旧目录和 `.env` 的 IMAGE_TAG，再重新启动。
默认非 root、只读运行，临时文件写 /tmp，日志自动轮转。无需数据库或数据卷。
容器升级不清除用户浏览器记录，但换域名、换浏览器、清理站点数据会影响记录。请导出勘察报告作为备份。

## 源码构建（可选）

```sh
npm ci
npm run build
docker compose up -d --build
```

或全部在 Docker 中构建：

```sh
docker build -f Dockerfile.build -t xuandao-yishu:source .
docker run -d --name xuandao-yishu-source --restart unless-stopped -p 8080:8080 xuandao-yishu:source
```

二选一，避免端口冲突。源码构建需要 npm 网络，可传 `--build-arg NPM_REGISTRY=https://registry.npmjs.org` 指定 registry。
多阶段构建参考 [Docker 官方文档](https://docs.docker.com/build/building/multi-stage/)。

## 域名及 HTTPS

本版按域名根路径部署，使用哈希路由，不存在的资源返回 404。静态路由参考 [Nginx 文档](https://nginx.org/en/docs/http/ngx_http_core_module.html#try_files)。
正式使用建议在已有反向代理配置域名和证书，网站容器提供 HTTP。
同机宿主反向代理可将 BIND_ADDRESS 改为 127.0.0.1，代理到 `http://127.0.0.1:8080`。
反向代理若也在容器中，需加入相同 Docker 网络，通过服务名 `http://web:8080` 访问，不能使用代理容器自己的 127.0.0.1。
公网剪贴板等浏览器功能可能要求 HTTPS。

## 国内与离线服务器

Google 字体依赖已移除。当前阅读器、电子文本与奇门原书图页均从本站本地加载；出处核验链接仍指向外部网站，点击来源页时才需要访问外站。
镜像源不通时，可在可联网、与服务器相同架构的机器构建并搬运：

```sh
docker build -t xuandao-yishu:release .
docker save -o xuandao-yishu-image.tar xuandao-yishu:release
# 在目标机器
docker load -i xuandao-yishu-image.tar
docker run -d --name xuandao-yishu --restart unless-stopped -p 8080:8080 xuandao-yishu:release
```

amd64 与 arm64 不能直接混用；跨平台构建需使用 Docker buildx 指定目标平台并验证。
本次 ZIP 是部署源码包，不是可通过 docker load 导入的镜像 tar。

## 验收

2026-11-06 已通过 [GitHub Actions 容器验收](https://github.com/SRL-Development/Taoist-studies/actions/runs/42140474059)：默认镜像构建、Compose 启动、nginx -t、健康端点、静态资源检查与 Dockerfile.build 源码构建。目标服务器仍需按上文核对端口、域名与网络。
另提供 Node.js 18+ 可运行的响应检查脚本：

```sh
node scripts/smoke-docker.mjs http://127.0.0.1:8080
```

随后在浏览器验证：紫微排盘、照片选择、符箓搜索、勘察模板、本机保存和报告导出。照片是环境像素指标初筛，未接入 AI 视觉模型。
