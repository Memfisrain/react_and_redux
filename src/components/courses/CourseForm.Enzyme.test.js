import React from "react";
import expect from "expect";
import {mount, shallow} from "enzyme";
import TestUtils from "react-addons-test-utils";
import CourseForm from "./CourseForm";

function setup(saving) {
  let props = {
    course: {},
    saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

describe("CourseForm test via Enzyme", () => {
  it("renders form and h1", () => {
    let wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual("Manage Course");
  });

  it("input labeled as 'Save' when not saving", () => {
    let wrapper = setup(false);
    expect(wrapper.find("input").prop("value")).toBe("Save");
  });

  it("input labeled as 'Saving...' when saving", () => {
    let wrapper = setup(true);
    expect(wrapper.find("input").prop("value")).toBe("Saving...");
  });
});
