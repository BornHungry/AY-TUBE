import React from "react";
import Layouts from "../component/Layouts";
import FavoritesList from "../component/FavoritesList";

const FavoritesPage = ({ user }) => {
  return (
    <div>
      <Layouts login="login">
        <h3>{user}'s Favorites </h3>
        <FavoritesList />
      </Layouts>
    </div>
  );
};

export default FavoritesPage;
