import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router";
import AuthorsList from "./AuthorsList";
import {deleteAuthor} from "../../actions/authorActions";
import toastr from "toastr";

class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onAuthorDelete = this.onAuthorDelete.bind(this);
  }

  onAuthorDelete(authorId) {
    if (!authorId) {
      console.log("Author cannot be deleted due-to param 'authorId' wasn't be passed.");
    }

    if (this.isAuthorHasCourses(authorId)) {
      toastr.error("Author can't be deleted because he has a courses. Firstly delete author's courses.");
      return;
    }

    this.props.deleteAuthor(authorId)
      .then(() => {
        toastr.success(`Author ${authorId} has been successfully deleted`);
      })
      .catch(() => {
        toastr.error(`Error occured at deleting author ${authorId}`);
      });
  }

  isAuthorHasCourses(authorId) {
    let courses = this.props.courses;
    console.log(courses);
    if (courses && courses.length) {
      return !!courses.filter(course => course.authorId === authorId).length;
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
    authors: state.authors,
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteAuthor: bindActionCreators(deleteAuthor, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
