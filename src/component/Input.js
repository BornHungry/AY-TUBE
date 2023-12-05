import React from "react";
const Input = ({ type, placeholder }) => {
  return (
    <>
      <input className="input-block" type={type} placeholder={placeholder} />
    </>
  );
};

export default Input;
