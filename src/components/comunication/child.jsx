import React from "react"

export default class Child extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isDispaly: false
        }
    }

    render() {
        return (
            <div style={{
                height: "200px",
                // background: "rgb(225, 112, 85)",
            }}>
                Child
                {this.state.isDispaly ? this.props.name : "nothing to show"}
                <div>
                    <button onClick={()=>{
                        console.log('child console') // 1
                        this.props.onClickHandler(function(){
                            console.log('child callback') // 即 parent 中 3 输出的内容
                            
                            // 这里会报错, 不论是 isDispaly1 还是 isDispaly, 但是执行是在 parent cb()
                            // this.setState({
                            //     isDispaly1: !this.state.isDispaly1
                            // })
                        })
                    }}>Click me</button>
                </div>
            </div>
        )
    }
}