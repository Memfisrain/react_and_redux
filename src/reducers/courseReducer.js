import * as types from "../actions/actionTypes";
import initialState from "../store/initialState";

export default function courseReducer(courses = initialState.courses, action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.DELETE_COURSES_SUCCESS:
    	return action.courses;

    case types.LOAD_COURSE_SUCCESS:
    	return action.course;

    case types.UPDATE_COURSE_SUCCESS:
    	return [
        ...courses.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    case types.ADD_COURSE_SUCCESS:
      return [
        ...courses,
        Object.assign({}, action.course)
      ];

    default:
      return courses;
  }
}
