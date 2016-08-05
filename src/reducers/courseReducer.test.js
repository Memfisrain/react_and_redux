import expect from "expect";
import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";

describe("Course Reducer", () => {
  it("should add course when passed ADD_COURSE_SUCCESS", () => {
    //arrange;
    const initialState = [
      {title: "A"},
      {title: "B"}
    ];
    const newCourse = {title: "C"};
    const action = actions.addCourseSuccess(newCourse);

    //act
    const newState = courseReducer(initialState, action);

    //assert
    expect(newState.length).toBe(3);
    expect(newState[0].title).toBe("A");
    expect(newState[1].title).toBe("B");
    expect(newState[2].title).toBe("C");
  });

  it("Should update course when passed UPDATE_COURSE_SUCCESS", () => {
    //arrange
    const initialState = [
      {id: "A", title: "A"},
      {id: "B", title: "B"},
      {id: "C", title: "C"}
    ];

    const course = {id:"A", title: "NewTitle"};
    const action = actions.updateCourseSuccess(course);

    //act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(v => v.id === course.id);
    const untouchedCourse = newState.find(v => v.id === "B");

    //assert
    expect(updatedCourse.title).toEqual(course.title);
    expect(untouchedCourse.title).toEqual("B");
    expect(newState.length).toEqual(3);
  });
});

