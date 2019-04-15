import React from 'react';
import { CourseComponent } from './course.component';

export class ListOfCourses extends React.Component {

    constructor() {
        super()
        // this.courseOne = "React"
        // this.courseTwo = "Angular in constructor"
        // this.courseThree = "Node"
        this.courses = [{ name: "React", duration: "3 Days" }, { name: "Angular", duration: "5 Days" }, { name: "Node", duration: "3 Days" }];
    }

    render() {

        var coursesToBeCreated = this.courses.map(c => <CourseComponent coursedetails={c} />)
        return <div className="container">
        <div className="row">
            {coursesToBeCreated}
                    {/* <CourseComponent coursename="REACT" duration="3 Days"/>
                    <CourseComponent coursename={this.courseTwo} />
                    <CourseComponent coursename="Node" />
                    <CourseComponent />
                     */}
        </div>
        </div>
    }
}

var add = (x, y) => {
    return x + y;
}

export { add }
// export default ListOfCourses;