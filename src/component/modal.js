import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import "../css/modal.css";

function Modal({ modalData, setModal }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    console.log("çalıştı");
    return () => {
      document.body.style.overflow = "";
      console.log("durdu");
    };
  }, []);
  return (
    <>
      {ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-new">
            <div className="modal__img">
              <img
                className="poster-path"
                src={
                  "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
                  modalData.poster_path
                }
                alt="movie"
              />
            </div>
            <div>
              <div
                style={{
                  padding: "0px",
                  justifyContent: "end",
                  display: "flex",
                  width: "20%",
                }}
                onClick={() => {
                  setModal(false);
                }}
                className="close"
              >
                <div style={{ cursor: "pointer" }}>x</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  wordWrap: "break-word",
                  width: "20%",
                }}
                className="modal__text"
              >
                <h4>{modalData.title}</h4>
                <p>{modalData.overview}</p>
                <p>
                  <strong>Release Date: </strong>
                  {modalData.release_date}
                </p>
                <p>
                  <strong>out of 10: </strong>
                  {modalData.vote_average}
                </p>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById("details")
      )}
    </>
  );
}

export default Modal;
