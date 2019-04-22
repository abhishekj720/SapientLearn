import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import ListOfButton from './CourseComponent/listOfButtons'
// import DynamicHeader from './CourseComponent/textBoxONHeader'
// import PostsComponent from './CourseComponent/ajaxComponenet'
// import {Blog,Form} from './CourseComponent/functionalComponent'
import {RouterApp} from './CourseComponent/routing.component'

// var BlogWithFormOnly = <Blog>
//                             <Form />
// </Blog>
// ReactDOM.render(<Blog msg="HEY this is me \n NEW" />, document.getElementById('root'));
// ReactDOM.render(<Blog />, document.getElementById('root'));
// ReactDOM.render(BlogWithFormOnly, document.getElementById('root'));
ReactDOM.render(<RouterApp />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
