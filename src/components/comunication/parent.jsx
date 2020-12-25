import React from "react"
import Child from "./child"

export default class Patent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isDispaly1: false
        }
    }

    render() {
        return (
            <div style={{
                height: "200px",
                background: "pink",
            }}>
                Patent
                <Child
                    name={"parent-name"}
                    onClickHandler={(cb)=>{
                        console.log("parent console")  // 2
                        cb() // 3
                        console.log('cb() in parent'); // 4
                        this.props.onClickHandler(function(){
                            console.log('parent callback')
                        });
                    }}
                />
                {this.state.isDispaly1 ? "something of parent" : "nothing of parent"}
            </div>
        )
    }
}