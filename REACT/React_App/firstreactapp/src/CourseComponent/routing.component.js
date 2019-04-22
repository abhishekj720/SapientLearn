import React from 'react'
import { Route, BrowserRouter, Link } from 'react-router-dom';

var HomePage = () => <div className="jumbotron">Home Page!</div>
var UsersPage = () => <div className="jumbotron">Users Page!!!!!!</div>
var UserPage = (props) =>{ 
    // it is destructuring below
    var {match:{params}}= props;
    console.log(props)
    return <div className="jumbotron">specific Page! for {params.userid}</div>
}

var MainLayout = () => (
    <div className='container'>
        {/* <nav>
        <a href='/'>Home</a>
        <a href='/users'>Users</a>
    </nav> */}


     
        <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">YO</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><Link to='/'>Home</Link></li>
      <li><Link to='/users'> User</Link></li>
      <li> <Link to='/users/10'> A specific User</Link></li>
     
    </ul>
  </div>
</nav>
        <Route path="/" exact component={HomePage} />
        <Route path="/users" exact component={UsersPage} />
        <Route path="/users/:userid" exact component={UserPage} />

    </div>
);

export var RouterApp = () => (
    <BrowserRouter>
        <MainLayout />
    </BrowserRouter>
)

// export default RouterApp;