/**
 * Created by Nikita_Kulazhenko on 7/25/2016.
 */
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../actions/courseActions";
import CourseFOrm from "./CourseForm";

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    var courseId = this.props.params.id,
      [course] = this.props.courses.filter((course) => {
        return course.id === courseId;
      });

    this.state = {
      course: course,
      authors = 
    }
  };

  static onChange(course) {

  }

  static onSave(course) {

  }


  render() {
    return (
      <div>
        <h1>Manage Course</h1>
        <CourseForm 
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses,
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
