import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
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
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, ind) {
    return (
      <div key={ind}>{course.title}</div>
    );
  }

	render() {
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
  courses: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

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
