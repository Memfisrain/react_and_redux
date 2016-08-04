import expect from "expect";
import * as types from "./actionTypes";
import * as courseActions from "./courseActions";

describe("Course Actions", () => {
  describe("createCourseSuccess", () => {
    it("should create a ADD_COURSE_SUCCESS action", () => {
      const course = {id: "mock-course"};

      const expected = {
        type: types.ADD_COURSE_SUCCESS, course
      };

      expect(courseActions.addCourseSuccess(course)).toEqual(expected);
    });
  });
});
