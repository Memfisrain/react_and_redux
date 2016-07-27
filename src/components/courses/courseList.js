/**
 * Created by Nikita_Kulazhenko on 7/25/2016.
 */

import React from "react";
import CourseListRow from "./courseListRow";


function createCourse(course) {
  return <CourseListRow key={course.id} course={course}/>
}

export default (obj) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Author</th>
        <th>Length</th>
        <th>Category</th>
      </tr>
      </thead>
      <tbody>
      {obj.courses.map(createCourse)}
      </tbody>
    </table>
  );
}
