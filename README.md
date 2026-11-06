# 玄道易术

主仓库：[SRL-Development/Taoist-studies](https://github.com/SRL-Development/Taoist-studies)。后续功能迭代与 Docker 部署配置均在此仓库维护。

当前包括紫微个人排盘、梅花起卦、六爻模拟、干支年序、照片环境初筛、六类堪舆模板和报告导出。本地书库包含11部古籍电子录入本及1925年《奇门遁甲统宗》全408页影印，支持翻页和进度保存。电子本未逐字校勘，具体版本与收录边界见阅读器说明。

符箓专题已用所选奇门底本的原页图式与符法文字替换旧主题示意，阅读图版不依赖境外图片链接；直符图、排布局法与神咒分别标示，不将其冒称为佩带符。来源及校核范围见 [内容来源说明](docs/CONTENT-SOURCES.md)。

```sh
git clone https://github.com/SRL-Development/Taoist-studies.git
cd Taoist-studies
docker compose up -d --build
```

访问 `http://服务器IP:8080`。GitHub Actions 会检查 Docker 构建、Nginx 配置、容器启动及 HTTP 健康状态；实际运行结果见仓库 Actions 页面。

## Docker 独立部署

在本目录执行 `docker compose up -d --build`，访问 `http://服务器IP:8080`。
不需要 ChatGPT 登录或 API Key。默认使用已构建的 dist 文件，无需服务器安装 Node。

详见 [Docker 发布说明](docs/DOCKER.md) 与 [微信小程序适配计划](docs/MINIPROGRAM.md)。
Docker 镜像构建、Compose 启动、Nginx 配置、健康检查、静态资源与源码构建已通过 [GitHub Actions 验证](https://github.com/SRL-Development/Taoist-studies/actions/runs/42140474059)。目标服务器的网络、域名和端口仍需部署时确认。

周易、六爻、梅花易数、四柱八字、三式与堪舆等传统术数的一站式学习与工具平台原型。

## 本地预览

直接以静态服务器托管 `dist/` 目录即可。

## 早期原型功能（现已扩展）

- 12 门术数导航与筛选搜索
- 梅花易数数字起卦
- 六爻三钱法模拟
- 六十甲子年序计算
- 古籍书库与本地阅读进度
- 桌面端与移动端响应式界面

> 排盘结果仅供传统文化研习与个人反思，不替代医疗、法律、财务等专业意见。
