import React from "react";
import "../css/header.css";
function Header(props) {
  return (
    <div>
      <h1 className="general-header">{props.title}</h1>
    </div>
  );
}

export default Header;
