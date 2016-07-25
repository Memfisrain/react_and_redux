/**
 * Created by Nikita_Kulazhenko on 7/25/2016.
 */
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../actions/courseActions";

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: this.props.actions.loadCourse(this.props.params.id)
    };
  };


  render() {
    return (
      <h1>
        Manage Course
      </h1>
    );
  }
}

function mapStateToProps(state, ownProps) {
  debugger;
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
