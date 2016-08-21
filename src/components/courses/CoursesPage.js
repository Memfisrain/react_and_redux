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
      reverse: false,
      numberOfVisibleCourses: 5
    }

    this._COURSES_PER_PAGE = 5;

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.onCourseDelete = this.onCourseDelete.bind(this);
    this.sortCourses = this.sortCourses.bind(this);
    this.changeSortRule = this.changeSortRule.bind(this);
    this.revertCourses = this.revertCourses.bind(this);
    this.loadCourses = this.loadCourses.bind(this);
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

  loadCourses(e) {
    e.preventDefault();
    let visibleCourses = this.state.numberOfVisibleCourses;
    let newVisibleCourses = visibleCourses + this._COURSES_PER_PAGE;

    newVisibleCourses = newVisibleCourses > this.state.courses.length? this.state.courses.length : newVisibleCourses;

    this.setState({numberOfVisibleCourses: newVisibleCourses});
  }

  changeSortRule(e) {
    e.preventDefault();

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

      if (sortBy === "length") {
        let aVal = a.match(/\d+/)[0];
        let bVal = b.match(/\d+/)[0];

        a = aVal.length === 2? a : "0" + a;
        b = bVal.length === 2? b : "0" + b;
      }

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
    let btnDisplay = this.state.numberOfVisibleCourses === this.state.courses.length? "none" : "block";

		return (
			<div>
        <h1>{this.state.courses.length || "There are no "} Courses</h1>
        <input className="btn btn-primary" type="button" onClick={this.redirectToAddCoursePage} value="Add Course" />
        <div className="sort">Sort By: {this.state.sortBy}
          <div>Reverse: {this.state.reverse? "true" : "false"}</div>
        </div>
        <CourseList courses={this.state.courses.slice(0, this.state.numberOfVisibleCourses)} 
                    onCourseDelete={this.onCourseDelete}
                    onSortRuleChanged={this.changeSortRule} />
        <input style={{display: btnDisplay, margin: "0 auto"}} type="button" className="btn btn-primary" value="Load More Courses" onClick={this.loadCourses}/>
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
