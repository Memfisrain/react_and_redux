import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";


const CourseForm = ({course, allAuthors, errors, onChange, onSave}) => {
	return (
		<form>
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
				defaultOption="Select Author"
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
      <input className="btn btn-primary" type="submit" value="Save" onClick={onSave} />
		</form>
	);
};

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array.isRequired,
  errors: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired
};

export default CourseForm
