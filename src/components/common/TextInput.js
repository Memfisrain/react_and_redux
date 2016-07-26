import React from "react";

const TextInput = function ({error, onChange, value, name, label}) {
  let wrapperCls = "form-group";

  if (error) {
    wrapperCls += " has-error";
  }

	return (
			<div className={wrapperCls}>
        <label htmlFor={name}>{label}</label>
        <input id={name} className="form-control" name={name} value={value} onChange={onChange} />
      </div>
	);
};

TextInput.propTypes = {
  error: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default TextInput;


