import React, { useContext } from "react";
import Layouts from "../component/Layouts";
import FavoritesList from "../component/FavoritesList";
import { MyAuthContext } from "../component/context/ContextAuth";

const FavoritesPage = () => {
  const { user } = useContext(MyAuthContext);
  return (
    <div>
      <Layouts login="login">
        <h3>{user.email}'s Favorites </h3>
        <FavoritesList />
      </Layouts>
    </div>
  );
};

export default FavoritesPage;
