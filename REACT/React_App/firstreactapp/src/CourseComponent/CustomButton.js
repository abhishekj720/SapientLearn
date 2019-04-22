import React from 'react' ;


export class CustomButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:this.props.buttonValue}
    }

    IncrementCount(){
        this.setState({count:this.state.count+2})
        console.log("U clicked")
    }       

    render(){
      
        return <button className="btn btn-primary mt-4 col-sm-4 mr-2 col-md-2" onClick={this.IncrementCount.bind(this)}>
            {this.state.count}
                </button>
    }
}


//state in react is immutable property whereas props are the readonly property