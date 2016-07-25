import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import CourseList from "./courseList";

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

	render() {
		return (
			<div>
        <CourseList courses={this.props.courses} />
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
