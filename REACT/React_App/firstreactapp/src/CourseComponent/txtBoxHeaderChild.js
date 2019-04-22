import React from 'react'

export default class txtBoxHeaderChild extends React.Component{

    
    render(){
       return <div>
            <h1>{this.props.header}</h1>
        </div>
    }
}