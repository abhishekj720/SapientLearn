import React from 'react'
// import './UserList'

export default class UserDetails extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            login: this.props.items
            // login : props.match.params.login,
            // details: []
        }
        console.log(props)
        

    }


    render(){
        return <div>
                {this.state.login}
        </div>
    //     return <div class="card" style="width:400px">
    //     <img class="card-img-top" src="img_avatar1.png" alt="Card image" />
    //     <div class="card-body">
    //       <h4 class="card-title">John Doe</h4>
    //       <p class="card-text">Some example text.</p>
    //       <a href="#" class="btn btn-primary">See Profile</a>
    //     </div>
    //   </div>
    }
}
