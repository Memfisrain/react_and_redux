/**
 * Created by Nikita_Kulazhenko on 7/25/2016.
 */

import React from "react";
import CourseListRow from "./courseListRow";

function createCourse(onCourseDelete, course) {
  return <CourseListRow key={course.id} course={course} onCourseDelete={onCourseDelete}/>
}

export default ({courses, onCourseDelete}) => {
  let display = courses && courses.length? "" : "none";

  return (
    <table style={{display}} className="table">
      <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Title</th>
        <th>Author</th>
        <th>Length</th>
        <th>Category</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(createCourse.bind(null, onCourseDelete))}
      </tbody>
    </table>
  );
}
