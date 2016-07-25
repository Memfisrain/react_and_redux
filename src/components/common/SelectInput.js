import React from "react";

const SelectInput = ({name, label, value, defaultOption, options, onChange, error}) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<select className="form-control"
			 name={name}
			 value={value}
			 options={options}
			 defaultOption={defaultOption}
			 onChange={onChange} />
		</div>
	);
}

export default SelectInput