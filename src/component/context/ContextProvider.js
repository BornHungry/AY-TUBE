import React, { createContext, useContext, useReducer } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  where,
} from "firebase/firestore";
import { app } from "../FireBase";
import { MyAuthContext } from "./ContextAuth";

export const MyContext = createContext();
const MyProvider = ({ children }) => {
  const db = getFirestore(app);
  const { user } = useContext(MyAuthContext);
  console.log("SELAM BEN DENEME", user);
  const reducerOriginValue = {
    items: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newItem = { ...action.favorites, userEmail: user.email };
        addFavoriteToFirestore(newItem); // Firestore'a ekleme işlemi
        return { items: [...state.items, newItem] };

      case "REMOVE":
        const idToRemove = action.id;
        removeFavoriteFromFirestore(idToRemove); // Firestore'dan kaldırma işlemi
        const filtered = state.items.filter((item) => item.id !== idToRemove);
        return { items: filtered };

      case "GETITEM":
        getFavoritesFromFirestore(); // Firestore'dan verileri çekme işlemi
        return state;

      default:
        return state;
    }
  };

  const addFavoriteToFirestore = async (newItem) => {
    try {
      // Eklenen favori filmi veritabanına ekleyin
      const docRef = await addDoc(collection(db, "favorites"), newItem);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const removeFavoriteFromFirestore = async (idToRemove) => {
    try {
      const favoriteRef = doc(db, "favorites", idToRemove);
      await deleteDoc(favoriteRef);
      console.log("Document with ID: ", idToRemove, " successfully deleted");
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };

  const getFavoritesFromFirestore = async () => {
    try {
      // Favori filmleri veritabanından çekin
      const querySnapshot = await getDocs(
        collection(db, "favorites"),
        where("userEmail", "==", user.email)
      );
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Favorites retrieved from Firestore: ", items);
    } catch (e) {
      console.error("Error getting documents: ", e);
    }
  };

  const [cartList, cartListActions] = useReducer(reducer, reducerOriginValue);
  console.log("CART LİST BURADAAAAA0", cartList);
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
    cartList: cartList.items,
  };

  return (
    <MyContext.Provider value={FavoritesContext}>{children}</MyContext.Provider>
  );
};

export default MyProvider;
