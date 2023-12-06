import React, { useContext, useEffect } from "react";
import { MyContext } from "./context/ContextProvider";
const FavoritesList = () => {
  const { getFireStore } = useContext(MyContext);
  useEffect(() => {
    getFireStore();
  }, []);

  return <div>FavoritesList</div>;
};

export default FavoritesList;
