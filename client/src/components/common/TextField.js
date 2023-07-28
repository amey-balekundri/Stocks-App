import React from "react";
import "../styles/common/textfield.css";

//Common TextField Component
export const TextField = ({
  label,
  placeholder,
  name,
  handleChange,
  type,
  id,
  textFieldStyle,
  value,
  disabled,
  error,
  width,
  minChar,
  maxChar,
  textFieldContainerStyle,
  pattern,
}) => {
  return (
    <div className="main-container" style={width ? { width: width } : {}}>
      <div className="label-div">
        <label className={"label"} htmlFor={id + "_element"}>
          {label}
        </label>
      </div>
      <div
        style={textFieldContainerStyle ? textFieldContainerStyle : {}}
        // based on fields like disabled error and warning change the class names to present different
        //  styles to the user
        className={`${"text-field-container"} ${error ? " error-input" : ""}`}
      >
        <input
          value={value}
          id={id + "_element"}
          placeholder={placeholder}
          type={type ? type : "text"}
          pattern={pattern}
          className={"input-text-field"}
          name={name}
          style={textFieldStyle ? textFieldStyle : {}}
          onChange={handleChange}
          disabled={disabled ? true : false}
          minLength={minChar} //minimum number of inputs
          maxLength={maxChar} //maximum number of inputs
        />
      </div>
      {/* Display the error message if any */}
      {error ? (
        <span className={"input-error-message"} id={"error-message" + id} key={error}>
          {error}
        </span>
      ) : null}
    </div>
  );
};
