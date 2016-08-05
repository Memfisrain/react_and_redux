import expect from "expect";
import {createStore} from "redux";
import rootReducer from "../reducers";
import * as actions from "../actions/courseActions";
import * as types from "../actions/actionTypes.js";
import initialState from "./initialState.js";

describe("Store", () => {
  it("Should handle creating store and adding course", () => {
    //arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: "TEST"
    };

    //act
    const addCourseAction = actions.addCourseSuccess(course);
    store.dispatch(addCourseAction);

    //assert
    const courses = store.getState().courses;
    const actual = courses[0];

    expect(actual.title).toEqual(course.title);

    //act
    const expectedCourses = [];
    const deleteCoursesAction = actions.deleteCoursesSuccess(expectedCourses);
    store.dispatch(deleteCoursesAction);

    //assert
    const newCourses = store.getState().courses;
    expect(newCourses.length).toEqual(0);
  });

});
