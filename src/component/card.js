import React from "react";
import "../css/card.css";
export default function Cards({
  name,
  src,
  originalName,
  setModal,
  item,
  setModalData,
}) {
  return (
    <div
      className="card-container"
      id="card-container"
      onClick={() => {
        setModalData(item);
        setModal(true);
      }}
    >
      <div className="card-container__img-container">
        <img
          className="film-img"
          src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + src}
          alt="movies"
        />
      </div>
      <div>
        <h2 className="film-name">
          {name} {originalName}
        </h2>
      </div>
    </div>
  );
}
