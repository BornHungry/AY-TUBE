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
        <div className="modal" style={{ zIndex: "9999" }}>
          <div
            class="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            {/* <!--
                                                Background backdrop, show/hide based on modal state.

                                                Entering: "ease-out duration-300"
                                                  From: "opacity-0"
                                                  To: "opacity-100"
                                                Leaving: "ease-in duration-200"
                                                  From: "opacity-100"
                                                  To: "opacity-0"
                                              --> */}
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div
              onClick={() => {
                setModal(false);
              }}
              class="fixed inset-0 z-10 w-screen overflow-y-auto"
            >
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                {/* <!--
                                      Modal panel, show/hide based on modal state.

                                      Entering: "ease-out duration-300"
                                        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                        To: "opacity-100 translate-y-0 sm:scale-100"
                                      Leaving: "ease-in duration-200"
                                        From: "opacity-100 translate-y-0 sm:scale-100"
                                        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    --> */}
                <div class="relative transform overflow-hidden rounded-lg bg-white text-left  shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left md:flex lg:flex sm:block gap-5  ">
                        <div
                          class="text-base font-semibold leading-6 text-gray-900 md:w-1/2 lg:w-1/2 sm:w-[100%] "
                          id="modal-title"
                        >
                          <img
                            src={
                              "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
                              modalData.poster_path
                            }
                            alt="film-img"
                          />
                        </div>
                        <div class="mt-2 md:w-1/2 lg:w-1/2 sm:w-[100%]">
                          <h4 className="text-gray-700 font-semibold">
                            {modalData.title}
                          </h4>
                          <p class="text-sm text-gray-500">
                            {modalData.overview}
                          </p>
                          <span className="text-gray-700">
                            <p>
                              <strong>Release Date: </strong>
                              {modalData.release_date}
                            </p>
                            <p>
                              <strong>Score:{""} </strong>
                              {modalData.vote_average.toFixed(1)}
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => {
                        setModal(false);
                      }}
                      type="button"
                      class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Kapat
                    </button>
                  </div>
                </div>
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
