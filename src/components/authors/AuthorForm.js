import React from "react";
import TextInput from "../common/TextInput";

const AuthorForm = ({author, errors, saving, onAuthorChange, onAuthorSave}) => {
	return (
			<form>
        <TextInput name="firstName"
                   label="Author First Name"
                   value={author.firstName}
                   error={errors.firstName}
                   onChange={onAuthorChange} />
        <TextInput name="lastName"
                   label="Author Last Name"
                   value={author.lastName}
                   error={errors.lastName}
                   onChange={onAuthorChange} />
        <input className="btn btn-primary" value="Save Author" type="submit" onClick={onAuthorSave} disabled={saving}/>
      </form>
		);
};

AuthorForm.propTypes = {
	author: React.PropTypes.object.isRequired,
	errors: React.PropTypes.object.isRequired,
	onAuthorChange: React.PropTypes.func.isRequired,
	onAuthorSave: React.PropTypes.func.isRequired
};

export default AuthorForm;
