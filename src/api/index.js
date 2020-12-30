import { httpGet, httpPost } from "../utils/http"
import base from "./base"

// 这里不存在跨域访问, 如果要解决跨域访问, 参见 src\components\ProxyDomex.jsx
const api = {
    getChengPin() {
        return httpGet(base.ownUrl +  base.chengPin);
    },
    getLogin(params) {
        return httpPost(base.ownUrl +  base.login, params);
    }
}

export default api