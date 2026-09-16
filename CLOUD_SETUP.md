# 小满账本云端配置

当前分支已包含数据库结构、手机号验证码接口、微信 OAuth 接口、30 天会话和账目同步 API，但没有写入任何真实密钥，也未发布。

启用前需要：

1. 创建 D1 数据库并执行 `migrations/0001_initial.sql`。
2. 配置 `AUTH_PEPPER`，使用至少 32 字节随机值。
3. 接入短信服务，将 `SMS_API_URL` 指向兼容的 HTTPS 发送接口，并设置 `SMS_API_TOKEN`。接口接收 `{ phone, code, template }`。
4. 在微信开放平台配置网页授权回调域名，设置 `WECHAT_APP_ID`、`WECHAT_APP_SECRET` 和 `WECHAT_REDIRECT_URI`。
5. 将前端登录流程从现有本机 PIN 切换到 `/api/auth/phone/request`、`/api/auth/phone/verify` 和 `/api/auth/wechat/start`，并把返回的会话令牌保存在设备安全存储策略中。

在真实服务密钥和正式域名确定之前，不应宣称手机号或微信身份已经通过官方验证。
