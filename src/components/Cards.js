import React from 'react'
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    
    function getCourses () {
        const allCourse = []; 
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourse.push(courseData);
            })
        })

        return allCourse;
    }
    return (

    <div>
        {
            getCourses().map((course)=>{
                <Card key={courses.id} course={course}/>
            })
        } 
    </div>

  )
}

export default Cards 
