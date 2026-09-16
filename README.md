# Dear Prof. 校园英文邮件助手

为日常沟通而做的静态网页工具，可安装为 PWA。

## 功能

- 请假说明、询问评分、预约答疑。
- 姓名、老师称呼、课程、学号等必填校验。
- 三种邮件语气，支持编辑、复制和下载草稿。
- 添加到桌面；首次联网完成缓存后支持离线使用。
- 表单在浏览器内处理，不上传或保存个人信息。

当前使用场景模板生成英文邮件，不调用 AI API；自定义信息需填写英文。此仓库是网页版/PWA，不是微信小程序。

## 本地运行

安装 Python 后，在仓库目录执行：

```sh
python -m http.server 4173 --directory dist
```

打开 http://localhost:4173 。不需要安装项目依赖。

## 部署

将 `dist` 目录作为静态网站发布目录。PWA 需要 HTTPS（本地 localhost 除外）。当前资源路径以 `/` 开头，部署在域名根目录；若部署到 GitHub Pages 的仓库子路径，需要同时调整 manifest、service worker 和安装脚本中的路径及作用域。

## 文件

- `dist/index.html`：界面。
- `dist/style.css`：响应式样式。
- `dist/app.js`：邮件模板与表单逻辑。
- `dist/install.js`：安装引导及离线注册。
- `dist/sw.js`：离线缓存。更新缓存资源时需递增缓存版本，并关闭旧窗口使新版本激活。
- `dist/manifest.webmanifest`：应用名称、图标、启动方式。

安装支持因浏览器而异；尚未完成真实手机兼容性测试。

