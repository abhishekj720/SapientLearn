import React from 'react' ;

import './courseComponent.css'

export class CourseComponent extends React.Component{

           
    render(){
      
        return <div className="CourseStyle col-md-3">
            <h1>{this.props.coursedetails.name}</h1>
            <h5> Duration:</h5>{this.props.coursedetails.duration}
        
        </div>
    }
}