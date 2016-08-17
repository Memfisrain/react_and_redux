import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import TextInput from "../common/TextInput.js";
import * as AuthorActions from "../../actions/authorActions";

class ManageAuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      author: {
        id: props.author.id,
        firstName: props.author.firstName,
        lastName: props.author.lastName
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
      debugger;
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
    return (
      <div>
        <h2>Manage Author Page</h2>
        <form>
          <TextInput name="firstName"
                     label="Author First Name"
                     value={this.state.author.firstName}
                     error={this.state.errors.firstName}
                     onChange={this.onAuthorChange} />
          <TextInput name="lastName"
                     label="Author Last Name"
                     value={this.state.author.lastName}
                     error={this.state.errors.lastName}
                     onChange={this.onAuthorChange} />
          <input value="Save Author" type="submit" onClick={this.onAuthorSave}/>
        </form>
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
