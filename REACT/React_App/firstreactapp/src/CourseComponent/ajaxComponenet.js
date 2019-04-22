import React from 'react';
import axios from 'axios';

export default class PostComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {items : []};
         
    }
    componentDidMount(){
        let thePromise = axios.get('https://jsonplaceholder.typicode.com/posts')
         thePromise.then(
             (response)=>{this.setState({items : response.data})},
             (err)=>{}
         )
         
    }
    render(){
        return <div>
                <h1>POSTS:</h1>
                <ul>
                {this.state.items.map(item => (
            <li key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>               
        </div>
    }
}