import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CourseForm = ({course, allAuthors, errors, onChange, onSave, saving}) => {
	let isInvalid = Object.keys(errors).some((field) => errors[field].length);

	return (
		<form>
      <h1>Manage Course</h1>
			<TextInput
				name="title"
				label="Title"
				value={course.title}
				onChange={onChange}
				error={errors.title} />
			<SelectInput
				name="authorId"
				label="Author"
				value={course.authorId}
				defaultOption=""
				options={allAuthors}
				onChange={onChange}
				error={errors.authorId} />
			<TextInput
				name="category"
				label="Category"
				value={course.category}
				onChange={onChange}
				error={errors.category} />
			<TextInput
				name="length"
				label="Length"
				value={course.length}
				onChange={onChange}
				error={errors.length} />
			<TextInput
				name="watchHref"
				label="Link"
				value={course.watchHref}
				onChange={onChange}
				error={errors.watchHref} />
      <input className="btn btn-primary" disabled={saving || isInvalid} type="submit" value={saving? "Saving..." : "Save"} onClick={onSave} />
		</form>
	);
};

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array.isRequired,
  errors: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool.isRequired
};

export default CourseForm;
