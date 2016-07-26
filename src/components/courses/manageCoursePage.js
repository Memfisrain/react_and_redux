/**
 * Created by Nikita_Kulazhenko on 7/25/2016.
 */
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../actions/courseActions";
import CourseForm from "./CourseForm";

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: Object.assign({}, props.errors),
      authors: [...props.authors]
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  updateCourseState(event) {
    let field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course})

    /*let course = Object.assign({}, this.state.course, {
      [field]: value
    });

    return this.setState(Object.assign({}, this.state, {
      course
    }));*/
  }

  onSave(e) {
    e.preventDefault();
    this.props.actions.saveCourse(this.state.course);
  }

  render() {
    let {course} = this.state;

    return (
      <div>
        <CourseForm course={course}
                    allAuthors={this.state.authors}
                    errors={this.state.errors}
                    onChange={this.updateCourseState}
                    onSave={this.onSave} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let course = {title: "", author: "", length: "", category: ""};
  let errors =  {title: "", category: "", authorId: "", length: ""};

  return {
    course,
    errors,
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
