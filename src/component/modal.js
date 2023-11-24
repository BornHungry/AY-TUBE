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
              <div className="close">
                <button
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  Geri
                </button>
              </div>
              <div className="modal__text">
                <h4>{modalData.title}</h4>
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
