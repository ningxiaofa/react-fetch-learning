import React from "react"

export default class ProxyDemo1 extends React.Component {

    componentDidMount() {
        // 使用 本地启动的 server 进行测试, 因为 端口不同, 仍然是跨域访问, 
        // 仍然可以通过方式一: "proxy": "http://localhost:3100" 解决.
        // 方式二: Configuring the Proxy Manually  // 手动配置代理  Note: 方式一与方式二可以同时使用, 但是, 同时使用, /api, 跨域访问两个源, 其中一个出现报错, 原因与解决办法TBD.
        //更加推荐方式二, 更加灵活, 功能更强
        // https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md

        // Note:
        // 方式一: package.json 中 proxy 属性没有删除

        // http://localhost:3100/api/list
        fetch('/api/list')
        // fetch('/api/list.php') // 这里使用 PHP 自带的server进行跨域访问测试, 一直失败, 报告504 Gateway Timeout, 原因应是, PHP web server 主动拒绝响应. [Closed without sending a request; it was probably just an unused speculative preconnection], 解决办法TBD, 而且 PHP web server 并不会在生产环境中使用.
        // https://nodejs.org/api/errors.html#errors_common_system_errors  // 关于报错的详细意义
        .then(
            res => res.json()
        )
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(new Error(error));
        })
    }

    render() {
        return (
            <div>
                Hello ProxyDemo1, <span style={{color: "rgb(225, 112, 85)"}}>please see the console of devTool.</span>
            </div>
        )
    }
}