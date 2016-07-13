import React from "react";
import {connect} from "react-redux";
import * as courseActions from "../../actions/courseActions";

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {title: ""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onCourseSave = this.onCourseSave.bind(this);
  }

  onTitleChange(e) {
    let course = this.state.course;
    course.title = e.target.value;
    this.setState({course: course});
  }

  onCourseSave() {
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  courseRow(course, ind) {
    return (
      <div key={ind}>{course.title}</div>
    );
  }

	render() {
    debugger;
		return (
			<div>
				<h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          onClick={this.onCourseSave}
          value="Save" />
			</div>
		);
	}
}

CoursesPage.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  courses: React.PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  debugger;
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);
