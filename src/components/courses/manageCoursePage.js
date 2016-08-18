/**
 * Created by Nikita_Kulazhenko on 7/25/2016.
 */
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../actions/courseActions";
import CourseForm from "./CourseForm";
import {authorsFormattedForDropdown} from "../../selectors/selectors";
import toastr from "toastr";

export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: Object.assign({}, props.errors),
      authors: [...props.authors],
      saving: false,
      dirty: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  componentDidMount() {
    if (!this.state.course || !this.state.course.id) {
      let unsavedCourse = localStorage.getItem("manageCoursePage");

      if (unsavedCourse) {
        unsavedCourse = JSON.parse(unsavedCourse);
        this.setState(unsavedCourse, this.courseFormIsValid);
      }
    }
  }

  componentWillUnmount() {
    if (this.state.dirty) {
      localStorage.setItem("manageCoursePage", JSON.stringify(this.state))
    }
  }

  updateCourseState(event) {
    let field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course, dirty: true}, this.courseFormIsValid);
  }

  onSave(e) {
    e.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }

    this.setState({
      saving: true
    });

    this.props.actions
      .saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(err => this.onSaveFailure(err));
  }

  courseFormIsValid() {
    let state = this.state;
    let course = state.course;
    let formIsValid = true;
    let errors = Object.assign({}, this.state.errors, {title: "", category: "", length: ""});

    if (course.title.length < 5) {
      errors.title = "Title must be at least 5 characters.";
      formIsValid = false;
    }

    if (course.category.length < 5) {
      errors.category = "Category must be at least 5 characters";
      formIsValid = false;
    }

    if (!course.length.match(/^\d+:\d+$/)) {
      errors.length = "Duration format should be m[m]:s[s]";
      formIsValid = false;
    }

    this.setState({errors});
    return formIsValid;
  }

  onSaveFailure(err) {
    toastr.error(err || "Error occured");
    this.setState({saving: false});
  }

  redirect() {
    toastr.success("Course successfully saved");
    localStorage.removeItem("manageCoursePage");
    this.setState({saving: false});
    this.context.router.push("/courses");
  }

  render() {
    let {course} = this.state;

    return (
      <div>
        <CourseForm course={course}
                    allAuthors={this.state.authors}
                    errors={this.state.errors}
                    onChange={this.updateCourseState}
                    onSave={this.onSave}
                    saving={this.state.saving}/>
      </div>
    );
  }
}

ManageCoursePage.contextTypes = {
  router: React.PropTypes.object
};


function getCourseById(courses, id) {
  let course = courses.filter(course => course.id === id);
  return course[0];
}

function mapStateToProps(state, ownProps) {
  let courseId = ownProps.params.id;
  let course = {title: "", authorId: "", length: "", category: ""};
  let errors = {title: "", category: "", authorId: "", length: ""};

  if (courseId && state.courses.length) {
    let courseById = getCourseById(state.courses, courseId);
    course = courseById || course;
  }

  return {
    course,
    errors,
    authors: authorsFormattedForDropdown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
