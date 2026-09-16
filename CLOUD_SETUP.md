# 小满账本云端配置

当前分支已包含数据库结构、手机号验证码接口、30 天会话和账目同步 API，但没有写入任何真实密钥，也未发布。

启用前需要：

1. 创建 D1 数据库并执行 `migrations/0001_initial.sql`。
2. 配置 `AUTH_PEPPER`，使用至少 32 字节随机值。
3. 接入短信服务，将 `SMS_API_URL` 指向兼容的 HTTPS 发送接口，并设置 `SMS_API_TOKEN`。接口接收 `{ phone, code, template }`。
4. 前端登录流程使用 `/api/auth/phone/request` 和 `/api/auth/phone/verify`，并把返回的会话令牌保存在设备安全存储策略中。

在真实短信服务密钥配置完成前，不应宣称手机号已经通过官方验证。
