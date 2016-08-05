import expect from "expect";
import * as types from "./actionTypes";
import * as courseActions from "./courseActions";

import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";

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


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Async Actions", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("Should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses", done => {
    const expectedActions = [
      {type: types.BEGIN_AJAX_REQUEST},
      {type: types.AJAX_REQUEST_SUCCESS},
      {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: "clean-code", title: "Clean Code"}]}}
    ];

    const store = mockStore({courses: []}, expectedActions);

    store
      .dispatch(courseActions.loadCourses())
      .then(() => {
        const actions = store.getActions();

        expect(actions[0].type).toEqual(types.BEGIN_AJAX_REQUEST);
        expect(actions[1].type).toEqual(types.AJAX_REQUEST_SUCCESS);
        expect(actions[2].type).toEqual(types.LOAD_COURSES_SUCCESS);

        done();
      });
  });
});
