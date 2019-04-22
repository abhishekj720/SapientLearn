import React from "react";

import TxtBoxHeaderChild from "./txtBoxHeaderChild"

export default class DynamicHeader extends React.Component{
    constructor(props){
        super(props);
        this.state={header: ""}
        console.log("Within constructor")
    }

    onTextChange(event){
        this.setState({header: event.target.value})
        console.log("Within On TextChamngerd")

    }

    componentWillMount(){
        console.log("Within componentWillMount");
    }
    componentDidMount(){
        console.log("within componentDidMount")
    }
    shouldComponentUpdate(){
        console.log(arguments)
        console.log("Within     shouldComponentUpdate")

        if(arguments[1].header.length <10){
            console.log("INDIA")
            return true;
      
        }
        else{
            return false;
        }
      
            }
    render(){
        console.log("Within render")
        return <div>
                    Enter text: <input type="text" onChange={this.onTextChange.bind(this)}/>
                    <br></br><label>You entered</label>
                    <TxtBoxHeaderChild header={this.state.header}></TxtBoxHeaderChild> 
                </div>
    }
}