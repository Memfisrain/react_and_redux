/**
 * Created by Nikita_Kulazhenko on 7/25/2016.
 */

import React from "react";
import CourseListRow from "./courseListRow";

function createCourse(onCourseDelete, course) {
  return <CourseListRow key={course.id} course={course} onCourseDelete={onCourseDelete}/>
}

export default ({courses, onCourseDelete, onSortRuleChanged}) => {
  let display = courses && courses.length? "" : "none";

  return (
    <table style={{display}} className="table">
      <thead>
      <tr>
        <th></th>
        <th></th>
        <th><a href="#" data-sort-by="title" onClick={onSortRuleChanged}>Title</a></th>
        <th><a href="#" data-sort-by="authorId" onClick={onSortRuleChanged}>Author</a></th>
        <th><a href="#" data-sort-by="length" onClick={onSortRuleChanged}>Length</a></th>
        <th><a href="#" data-sort-by="category" onClick={onSortRuleChanged}>Category</a></th>
      </tr>
      </thead>
      <tbody>
      {courses.map(createCourse.bind(null, onCourseDelete))}
      </tbody>
    </table>
  );
}
