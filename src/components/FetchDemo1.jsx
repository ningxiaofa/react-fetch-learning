import { Component } from "react"
import qs from "querystring" // 来自于nodeJS

export default class FetchDemo1 extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            banners: []
        }
    }

    componentDidMount(){
        // Get
        fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
        .then(res => res.json())
        .then(res => {
            // console.log(res) // 这里的参数res, 名称任意
            this.setState({
                banners: res.banner
            })
        })

        // Post
        // 参数类型:
        // ajax: 对象类型的参数
        // body: 字符串类型
        fetch("http://iwenwiki.com/api/blueberrypai/login.php", {
            method: 'POST',
            headers: {
                'Accept': 'application/json,text/plAnimation,*/*',
                'Content-type': "application/x-www-form-urlencoded"
            },
            // 对象类型: 输出报错: {success: false, msg: "参数缺失，请传递完整参数", msg_code: 10001} 就是参数的问题
            // body: {
            //     user_id: "iwen@qq.com",
            //     password: "iwen123",
            //     verification_code: "crfvw"
            // }
            // 字符串类型, 正确方式[缺点手动拼接]
            // body: "user_id=iwen@qq.com&password=iwen123&verification_code=crfvw",
            // 优化, 仍然使用对象, 借助库去解析 或者自己去写一个函数去拼接
            body: qs.stringify({
                user_id: "iwen@qq.com",
                password: "iwen123",
                verification_code: "crfvw"
            }),
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
    }

    render() {
        const { banners } = this.state
        return (
            <div style={{
                height: "200px",
                background: "pink",
            }}>
                FetchDemo1
                <div>
                    {
                        banners.length > 0 ? 
                        <ul>
                            {
                                banners.map(function(ele, index){
                                    return (
                                        <li key={index}>
                                            {
                                                ele.title
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul> : "loading..."
                    }
                </div>
            </div>
        )
    }
}