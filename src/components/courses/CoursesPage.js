import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import CourseList from "./courseList";
import {browserHistory} from "react-router";
import toastr from "toastr";

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.onCourseDelete = this.onCourseDelete.bind(this);
  }

  onCourseDelete(courseId) {
    if (!courseId) {
      console.log("CourseId was not be passed into onCourseDelete.");
    }

    this.props.actions.deleteCourse(courseId)
      .then(() => {
        toastr.success("Course has been deleted successfully.");
      })
      .catch((err) => {
        toastr.error(err || "Error occured at course deleting operation.");
      })
  }

  redirectToAddCoursePage(event) {
    event.preventDefault();
    browserHistory.push("/course");
  }

	render() {
		return (
			<div>
        <h1>Courses</h1>
        <input className="btn btn-primary" type="button" onClick={this.redirectToAddCoursePage} value="Add Course" />
        <CourseList courses={this.props.courses} onCourseDelete={this.onCourseDelete}/>
      </div>
		);
	}
}


function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
