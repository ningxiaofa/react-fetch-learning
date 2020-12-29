import React from "react"

export default class ProxyDemo extends React.Component {

    // https://yunp.top/blog/index.php/2016/05/12/44/  // 跨域访问
    // https://yunp.top/blog/index.php/2017/12/25/271/   // 百度音乐接口 -- 服务已经失效, 这里选用知乎[专栏]接口
    // https://zhuanlan.zhihu.com/api/columns/zhihuadmin  // 知乎专栏

    /**
     * 跨域的解决方案:
     *  开发模式下: 
     *      利用环境解决: react / vue 常用框架, 都提供了解决方案
     *      react跨域解决方案: https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md
     *      Note: 
     *          1.每次修改配置文件, [package.json / webpack.config.js等配置文件, 都要重新启动开发服务器]
     * 
     *  生产模式下:
     *      jsonp cors ifame  postMessage
     *  npm run build: 打包 -> 生产模式
     */

    componentDidMount() {
        // proxy: https://zhuanlan.zhihu.com
        fetch('/api/columns/zhihuadmin')
        .then(
            res => res.json()
            // res => console.log(res)
        )
        .then(data => {
            console.log(data);
        })
        // 失败了, 如果修改了 package.json但没重启服务器,就会走catch分支.
        .catch(error => {
            console.error(new Error(error));
        })
    }

    render() {
        return (
            <div>
                Hello ProxyDemo, <span style={{color: "rgb(225, 112, 85)"}}>please see the console of devTool.</span>
            </div>
        )
    }
}