import React from 'react'
//msg has to be written in index.js where component is render
// export default function FunctionalComponent(props){
//     return <h1>FunctionalComponent! {props.msg}!!!! 
//     </h1>
// 

// var FunctionalComponent = (props)=><h1>FunctionalComponent NOOOOOOOO {props.msg}</h1>

// export default FunctionalComponent;


const txtStyle = {
    border:'1px solid black',
    backgroundColor:'lightgreen'
}

export var Comment = () => <ul>
    <li>First Comment</li>
    <li>Second Comment</li>
    <li>Third Comment</li>
</ul>

export var Form = () => <React.Fragment>
    <input type='text' style={txtStyle}/>
    <input type="button" value="Using Fragment" />
</React.Fragment>

// export var  Blog = () => <React.Fragment>
//     <Comment />
//     <Form />
// </React.Fragment>



export class Blog extends React.Component{
    render(){
        return <React.Fragment>
            {this.props.children}
        </React.Fragment>
    }
}

export default Blog