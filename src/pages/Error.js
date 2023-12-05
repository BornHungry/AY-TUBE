import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h3>Sayfa Bulunamadı.</h3>
      <Link to={"/"}>Geri Dönmek için Tıklayınız</Link>
    </>
  );
};

export default ErrorPage;
