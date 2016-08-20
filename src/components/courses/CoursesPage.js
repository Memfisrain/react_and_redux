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

    this.state = {
      courses: [...this.props.courses],
      sortBy: "title",
      reverse: false
    }

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.onCourseDelete = this.onCourseDelete.bind(this);
    this.sortCourses = this.sortCourses.bind(this);
    this.changeSortRule = this.changeSortRule.bind(this);
    this.revertCourses = this.revertCourses.bind(this);
  }

  componentWillReceiveProps(newProps, oldProps) {
    if (newProps.courses) {
      this.setState({courses: newProps.courses}, this.sortCourses);
    }
  }

  componentDidMount() {
    this.sortCourses();
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

  changeSortRule(e) {
    let sortRule = this.state.sortBy;
    let newSortRule = e.target.dataset.sortBy;

    if (sortRule != newSortRule) {
      this.setState({sortBy: newSortRule}, this.sortCourses);
    } else {
      this.revertCourses();
    }
  }

  sortCourses() {
    let courses = this.state.courses;
    let sortBy = this.state.sortBy;

    let newCourses = courses.sort((courseA, courseB) => {
      let a = courseA[sortBy];
      let b = courseB[sortBy];

      return a > b? 1 : (a === b? 0 : -1);
    });

    this.state.reverse && newCourses.reverse();

    this.setState({courses: newCourses});
  }

  revertCourses(courses) {
    courses = courses || this.state.courses;
    let reversedCourses = [...courses].reverse();
    this.setState({reverse: !this.state.reverse, courses: reversedCourses});
  }

	render() {
		return (
			<div>
        <h1>{this.state.courses.length || "There are no "} Courses</h1>
        <input className="btn btn-primary" type="button" onClick={this.redirectToAddCoursePage} value="Add Course" />
        <span style={{float: "right"}}>Sort By: {this.state.sortBy}. Reverse: {this.state.reverse? "true" : "false"}</span>
        <CourseList courses={this.state.courses} 
                    onCourseDelete={this.onCourseDelete}
                    onSortRuleChanged={this.changeSortRule} />
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
