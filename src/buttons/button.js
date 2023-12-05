import React from "react";
import "../css/button.css";
function Button({ children, disabled, onClick }) {
  return (
    <button onClick={onClick} disabled={disabled} className="button">
      {children}
    </button>
  );
}

export default Button;
