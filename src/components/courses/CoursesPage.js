import React from "react";

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {title: ""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onCourseSave = this.onCourseSave.bind(this);
  }

  onTitleChange(e) {
    let course = this.state.course;
    course.title = e.target.value;
    this.setState({course: course});
  }

  onCourseSave() {
    alert(`save ${this.state.course.title}`);
  }

	render() {
		return (
			<div>
				<h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          onClick={this.onCourseSave}
          value="Save" />
			</div>
		);
	}
}

export default CoursesPage;
