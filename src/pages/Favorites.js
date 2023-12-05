import React from "react";
import Layouts from "../component/Layouts";

const FavoritesPage = ({ user }) => {
  return (
    <div>
      <Layouts login="login">
        <h3>{user}'s Favorites </h3>
      </Layouts>
    </div>
  );
};

export default FavoritesPage;
