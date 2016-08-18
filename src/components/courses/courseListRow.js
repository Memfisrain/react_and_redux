import React from "react";
import {Link} from "react-router";

export default ({course, onCourseDelete}) => {
  console.log(course);
  return (
    <tr>
      <td><a href="javascript: void(0)" onClick={onCourseDelete.bind(null, course.id)}>delete</a></td>
      <td><a href={course.watchHref} target="_blank">watch</a></td>
      <td><Link to={`/course/${course.id}`}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.length}</td>
      <td>{course.category}</td>
    </tr>
  );
}
