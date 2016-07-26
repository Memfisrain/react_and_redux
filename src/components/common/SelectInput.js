import React from "react";

const SelectInput = ({name, label, value, defaultOption, options, onChange, error}) => {
  let wrapperCls = "form-group";
  if (error) {
    wrapperCls += " has-error";
  }
  
  let AuthorOption = function(author) {
    return (
      <option key={author.id} value={author.id}>{author.firstName + ' ' + author.lastName}</option>
    );
  };

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
    </div>
  );
};

export default SelectInput
