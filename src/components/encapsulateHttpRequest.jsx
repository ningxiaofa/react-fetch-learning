// encapsulate: 英 /ɪnˈkæpsjuleɪt/  美 /ɪnˈkæpsjuleɪt/ 
// vt. 压缩；将…装入胶囊；将…封进内部；概述
// vi. 形成胶囊
// 第三人称单数 encapsulates现在分词 encapsulating过去式 encapsulated过去分词 encapsulated

import React from "react"
import Api from "../api"

export default class EncapsulateHttpRequest extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            data: [],
            isLogin: false
        }
    }

    componentDidMount() {

        // Get 请求
        Api.getChengPin()
        .then(res => res.json())
        .then(data => {
            // throw new Error("Actively throw an error")
            // console.log(data)

            // 将请求回来的数据, 展示在界面上
            this.setState({
                data: data.chengpinInfo
            })
            // console.log(this.state.data)
        })
        .catch(error => {
            console.error(new Error(error));
        })

        // Post 请求
        const params = {
            user_id: "iwen@qq.com",
            password: "iwen123",
            verification_code: "crfvw"
        }
        Api.getLogin(params)
        .then(res => res.json())
        .then(data => {
            console.log(data) // Out: {success: true, msg: "", msg_code: ""}

            // 视图提醒:
            this.setState({
                isLogin: true
            })
            
        })
        .catch(
            error => {
                console.log(new Error(error));
            }
        )
    }
    
    render() {
        const { data, isLogin } = this.state
        return (
            <div>
                hello <span style={{color: "rgb(0, 184, 148)"}}>封装http request</span>
                <ul>
                    {
                        data.length > 0 ? (
                            data.map((ele, index) => {
                                return <li key={index} style={{fontSize: "14px", lineHeight: "24px", color: "rgb(225, 112, 85)"}}>
                                    {
                                        ele.title
                                    }
                                </li>
                            })
                        ) : (
                            <span style={{fontSize: "14px", lineHeight: "24px", color: "rgb(225, 112, 85)"}}>loading...</span>
                        )
                    }
                </ul>

                <div>
                    <span style={{fontSize: "14px", lineHeight: "24px", color: "rgb(232, 67, 147)"}}>是否登录: {isLogin ? "yep" :  "nope"}</span>
                </div>
            </div>
        )
    }
}