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
      course: Object.assign({}, this.props.course),
      errors: Object.assign({}, this.props.errors),
      authors: [...this.props.authors]
    };

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(course) {

  }

  onSave(course) {

  }

  render() {
    let {course} = this.props;

    return (
      <div>
        <CourseForm course={course}
                    allAuthors={this.state.authors}
                    errors={this.state.errors}
                    onChange={this.onChange}
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
