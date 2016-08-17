import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router";
import AuthorsList from "./AuthorsList";
import {deleteAuthor} from "../../actions/authorActions";

class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onAuthorDelete = this.onAuthorDelete.bind(this);
  }

  onAuthorDelete(authorId) {
    if (authorId) {
      this.props.deleteAuthor(authorId);
    } else {
      console.log("Author cannot be deleted due-to param 'authorId' wasn't be passed.")
    }
  }

  render() {
    let showAuthors = this.props.authors && this.props.authors.length;

    return (
      <div>
        <h1>Authors</h1>
        <Link style={{background: "#666", color: "#FFF", borderRadius: "5px", padding: "5px"}} to="/author">Add Authors</Link>
        <AuthorsList authors={this.props.authors}
                     onAuthorDelete={this.onAuthorDelete}
                     show={showAuthors} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteAuthor: bindActionCreators(deleteAuthor, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
