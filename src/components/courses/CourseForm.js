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
      <input type="submit" value="Save" onClick={onSave} />
		</form>
	);
};

export default CourseForm