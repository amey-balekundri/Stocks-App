import React from "react";
import "../styles/common/button.css";

// Common Button Component
export const Button = ({ handleClick, value, id, styles, disabledButton }) => {
  return (
    <button
      id={id + "_element"}
      className={"button"}
      style={styles ? styles : {}}
      onClick={handleClick ? handleClick : null}
      disabled={disabledButton}
    >
      {value}
    </button>
  );
};
