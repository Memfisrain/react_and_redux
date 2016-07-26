import * as types from "./actionTypes";
import CourseApi from "../api/mockCourseApi";

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function deleteCoursesSuccess(courses) {
  return {type: types.DELETE_COURSES_SUCCESS, courses}
}

export function loadCourseSuccess(course) {
  return {type: types.LOAD_COURSE_SUCCESS, course}
}

export function saveCourseSuccess(course) {
  return {type: types.SAVE_COURSE_SUCCESS, course};
}

//action creator
export function loadCourses() {
  return function (dispatch) {
    return CourseApi
      .getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw(error);
      });
  }
}

export function deleteCourses() {
  return function (dispatch) {
    return CourseApi.deleteCourses()
      .then(courses => {
        dispatch(deleteCoursesSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  }
}

export function saveCourse(course) {
  return function(dispatch) {
    return CourseApi
      .saveCourse(course)
      .then(course => {
        dispatch(saveCourseSuccess(course));
      })
      .catch(err => {
        throw err;
      })
  }
}


export function loadCourse(id) {
  return function (dispatch) {
    return CourseApi
      .getCourse(id)
      .then((course) => {
        dispatch(loadCourseSuccess(course));
      })
      .catch((err) => {
        throw err;
      });
  }
}
