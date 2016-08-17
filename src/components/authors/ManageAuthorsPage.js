import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import AuthorForm from "./AuthorForm";
import * as AuthorActions from "../../actions/authorActions";

class ManageAuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      author: {
        id: props.author.id || "",
        firstName: props.author.firstName || "",
        lastName: props.author.lastName || ""
      },
      errors: {
        firstName: "",
        lastName: ""
      }
    };

    this.onAuthorChange = this.onAuthorChange.bind(this);
    this.onAuthorSave = this.onAuthorSave.bind(this);
  }


  onAuthorChange(e) {
    let author = this.state.author;
    let field = e.target.name;
    let newValue = e.target.value;

    if (author[field] !== newValue) {
      let newAuthor = Object.assign({}, author, {[field]: newValue});
      this.setState({author: newAuthor}, this.validateForm);
    }
  }

  onAuthorSave(e) {
    e.preventDefault();
    let isValid = this.validateForm();

    if (isValid) {
      this.props.authorActions.saveAuthor(this.state.author);
    }
  }

  validateForm() {
    let isValid = true;
    let author = this.state.author;
    let errors = this.state.errors;

    errors.firstName = "";

    if (!author.firstName || author.firstName.length < 3) {
      isValid = false;
      errors.firstName = "First Name should contain at least 3 characters.";
    }

    errors.lastName = "";

    if (!author.lastName || author.lastName.length < 4) {
      isValid = false;
      errors.lastName = "Last Name should contain at least 4 characters.";
    }

    this.setState(Object.assign({}, errors));
    return isValid;
  }

  render() {
    let state = this.state;
    return (
      <div>
        <h2>Manage Author Page</h2>
        <AuthorForm author={state.author}
                    errors={state.errors}
                    onAuthorChange={this.onAuthorChange}
                    onAuthorSave={this.onAuthorSave} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let authorId = ownProps.params.id;
  let [author] = authorId? state.authors.filter(author => author.id === authorId) : [{}];

  return {
    author
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authorActions: bindActionCreators(AuthorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorsPage);
