import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import AuthorsList from "./AuthorsList";

class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <Link style={{background: "#666", color: "#FFF", borderRadius: "5px", padding: "5px"}} to="/author">Add Authors</Link>
        <AuthorsList authors={this.props.authors}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    authors: state.authors
  };
}

export default connect(mapStateToProps)(AuthorsPage);
