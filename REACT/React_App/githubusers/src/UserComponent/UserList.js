import React from 'react'
import axios from 'axios'
import {Route,Link,BrowserRouter} from 'react-router-dom'
import UserDetails from './UserDetails'


export default class UserList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items : []
        };
         
    }
    componentDidMount(){
        let thePromise = axios.get('https://api.github.com/users')
         thePromise.then(
             (response)=>{this.setState({items : response.data})},
             (err)=>{}
         )
         
    }
    abc = i => {
        if(i%2==1)
        {   
            return 'success';
        }
        else {
            return 'warning';
        }
        
    }
    render(){
        return <BrowserRouter>
            <ul className="list-group">
  <li class="list-group-item list-group-item-success">First item</li>
  <li class="list-group-item list-group-item-info">Second item</li>
  <li class="list-group-item list-group-item-warning">Third item</li>
  <li class="list-group-item list-group-item-danger">Fourth item</li>
   {this.state.items.map(item => (
            <li  className={"list-group-item list-group-item-"+this.abc(item.id)} key={item.id}>
              <Link to={'/users/'+item.login}>{item.login}</Link>
            </li>
          ))}  
                  </ul>
 
         <Route path={'/users/:userid'} exact component={UserDetails}></Route>         
       <UserDetails />
        </BrowserRouter>
    }


}


