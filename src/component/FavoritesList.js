import React, { useContext, useState } from "react";
import { MyAuthContext } from "./context/ContextAuth";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from "./context/ContextProvider";
import Modal from "./modal";
import "../css/favoritesList.css";
const FavoritesList = () => {
  const [isFavorites, setIsFavorites] = useState(true);
  const [modalData, setModalData] = useState([]);
  const [modal, setModal] = useState(false);
  const { removeItem } = useContext(MyContext);
  const { user } = useContext(MyAuthContext);
  const { cartList } = useContext(MyContext);
  const userEmail = user.email;

  const filteredFavorites = cartList.filter(
    (item) => item.userEmail === userEmail
  );
  return (
    <div className="favoritesList">
      {filteredFavorites &&
        filteredFavorites.map((item, i) => (
          <div key={i} className="favorites" id="card-container">
            <div
              onClick={() => {
                setModalData(item);
                setModal(true);
              }}
              className="card-container__img-container"
            >
              <img
                className="film-img"
                src={
                  "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
                  item.poster_path
                }
                alt="movies"
              />
            </div>
            <div>
              <h2 className="film-name">{item.original_title}</h2>
              <FontAwesomeIcon
                style={{ color: "red" }}
                onClick={() => {
                  setIsFavorites(false);
                  removeItem(item.id);
                }}
                icon={faHeart}
              />
            </div>
          </div>
        ))}
      {modal && <Modal modalData={modalData} setModal={setModal} />}
    </div>
  );
};

export default FavoritesList;
