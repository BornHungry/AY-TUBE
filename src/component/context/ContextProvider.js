import React, { cloneElement, createContext, useReducer } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from "../FireBase";
export const MyContext = createContext();
const MyProvider = ({ children }) => {
  const db = getFirestore(app);
  /** useReducer tanımlandı */

  /**UseReducerin başlangıç değeri ayarlandı */
  const reducerOriginValue = {
    items: [],
  };
  /* useReducerin fonksiyonu tanımlandı */
  const reducer = (state, action) => {
    switch (action.type) {
      /*Favori film ekleme fonksiyonu */
      case "ADD":
        let getItem = [...state.items, action.favorites];
        const postFavorites = async () => {
          try {
            const docRef = await addDoc(collection(db, "favorites"), getItem);
            console.log("Document written with ID: ", docRef.id);
            return docRef;
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        };

        return postFavorites;
      /*favori filmi kaldırma fonksiyonu */
      case "REMOVE":
        const putFavorites = async () => {
          try {
            const docRef = await addDoc(
              cloneElement(db, "favorites"),
              filtered
            );
            return docRef;
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        };
        const filtered = state.items.filter((item) => item.id !== action.id);
        return putFavorites;
      case "GETITEM":
        const favoritesFilm = async () => {
          const querySnapshot = await getDocs(collection(db, "users"));
          return querySnapshot;
        };
        return { items: favoritesFilm };

      default:
        return state;
    }
  };
  /*useRedcuer tanılaması */
  const [cartList, cartListActions] = useReducer(reducer, reducerOriginValue);
  console.log(cartList.items);
  /*Context API' ın value değeri */
  const FavoritesContext = {
    addItem: (favorites) => {
      cartListActions({ type: "ADD", favorites });
    },
    removeItem: (id) => {
      cartListActions({ type: "REMOVE", id });
    },
    getFireStore: () => {
      cartListActions({ type: "GETITEM" });
    },
  };
  return (
    <MyContext.Provider value={FavoritesContext}>{children}</MyContext.Provider>
  );
};
export default MyProvider;
