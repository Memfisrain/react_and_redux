import React from "react";

const SelectInput = ({name, label, value, defaultOption, options, onChange, error}) => {
  let wrapperCls = "form-group";
  if (error) {
    wrapperCls += " has-error";
  }

  function AuthorOption(author, ind) {
    return (
      <option key={ind} value={author.value}>{author.text}</option>
    );
  }

  return (
    <div className={wrapperCls}>
      <label htmlFor={name}>{label}</label>
      <select className="form-control"
              name={name}
              value={value}
              onChange={onChange}>
        <option value={defaultOption}>Select Author</option>
        {options.map(AuthorOption)}
      </select>
      {error && error.length && <span className="help-block">{error}</span>}
    </div>
  );
};

SelectInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  defaultOption: React.PropTypes.string,
  value: React.PropTypes.string,
  error: React.PropTypes.string,
  options: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default SelectInput;
