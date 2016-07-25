import React from "react";

export default function ({error, onChange, value, name, label}) {
	return (
			<div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input id={name} className="form-control" name={name} value={value} onChange={onChange} />
      </div>
	);
}