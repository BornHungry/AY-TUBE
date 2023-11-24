import Cards from "./card";
import "../css/discover.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import GetData from "./GetData";
import { useState } from "react";
import Modal from "./modal";

function Discover({ url, idRow }) {
  const [modalData, setModalData] = useState([]);
  const [modal, setModal] = useState(false);

  let container;
  // veriyi saklamak için tanımladığım state
  const { data, loading, error } = GetData(url);
  if (loading) {
    return <div>Veri Yükleniyor.</div>;
  }
  if (error) {
    return <div>Hata: {error.message}</div>;
  }

  let cardIndex = 0;
  const previousBtn = () => {
    if (data.length !== 0) {
      container = document.getElementById("container" + idRow);
      if (cardIndex > 0) {
        cardIndex--;
        updateVisibleCard();
      }
    }
  };
  const nextBtn = () => {
    if (data.length !== 0) {
      container = document.getElementById("container" + idRow);
      if (cardIndex < container.children.length - 5) {
        cardIndex++;
        updateVisibleCard();
      }
    }
  };

  function updateVisibleCard() {
    const xxx = document.getElementById("card-container");
    const allWidth = xxx.offsetWidth;
    const offset = -cardIndex * (allWidth + 5);
    container.style.transform = `translateX(${offset}px)`;
  }

  return (
    <div className="movie-parent-container">
      <FontAwesomeIcon
        icon={faChevronLeft}
        onClick={previousBtn}
        className="icon-item"
      />
      <div className="movie-big-container" id="big-container">
        <div className="movie-container" id={"container" + idRow}>
          {data !== "" &&
            data.map((item, index) => (
              <Cards
                key={index}
                name={item.title}
                originalName={item.original_name}
                src={item.poster_path}
                setModal={setModal}
                item={item}
                setModalData={setModalData}
              />
            ))}
        </div>
      </div>
      <FontAwesomeIcon
        icon={faChevronRight}
        onClick={nextBtn}
        className="icon-item"
      />
      {modal && <Modal modalData={modalData} setModal={setModal} />}
    </div>
  );
}

export default Discover;
