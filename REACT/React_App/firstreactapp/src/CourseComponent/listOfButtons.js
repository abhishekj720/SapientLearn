import React from 'react';
import { CustomButton } from './CustomButton';

export default class ListOfButton extends React.Component {

    constructor() {
        super()
        this.state = {butval:[10,20,30,40,50]};
    }
    AddNewButton(){
            this.setState({butval:[...this.state.butval,+(this.refs.txtInput.value)]});

            // +(this.refs.txtInput.value) it means same as converting into int ..u can also use it through parseInt
            // ... 3 dots are used for spreading values...or u can say to concatenate

    }
    DeleteAButton(){
        let butonToBeDeleted = this.refs.txtInput.value;
        var theNewList = this.state.butval.filter(v => v!= butonToBeDeleted);
        this.setState({butval:theNewList});
    }

    render() {

        var buttonsToBeCreated = this.state.butval.map(c => <CustomButton buttonValue={c} key={c} />)
        return <div className="container">
        <label>Enter:</label>
        <input type="text" ref="txtInput" />
        <button className="btn btn-success" onClick={this.AddNewButton.bind(this)}>
        ADD <span className="glyphicon glyphicon-globe"></span> </button>
        <button className="btn btn-danger" onClick={this.DeleteAButton.bind(this)}>Remove</button> <br/>
        <div className="mt-3">
            {buttonsToBeCreated}
                   
        </div>
        </div>
    }
}
