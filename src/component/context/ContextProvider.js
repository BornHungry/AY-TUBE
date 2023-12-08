import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { app } from "../FireBase";
import { MyAuthContext } from "./ContextAuth";

export const MyContext = createContext();
const MyProvider = ({ children }) => {
  const db = getFirestore(app);
  const { user } = useContext(MyAuthContext);
  if (user) {
    console.log("SELAM BEN DENEME XXXXXXXXXXXXXXXXXXXXXXXXX", user.email);
  }

  const reducerOriginValue = {
    items: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newItem = {
          ...action.favorites,
          userEmail: user.email,
        };
        addFavoriteToFirestore(newItem);
        return { items: [...state.items, newItem] };

      case "REMOVE":
        /** KALDIRMA İŞLEMİ TAM YAPILMIYOR ONU HALLET */
        const idToRemove = action.id;
        removeFavoriteFromFirestore(idToRemove);
        const filtered = state.items.filter((item) => item.id !== idToRemove);
        return { items: filtered };

      case "GETITEM_SUCCESS":
        return { items: action.items }; // items: action.items şeklinde kullanabilirsiniz

      case "GETITEM_FAILURE":
        console.error("Error getting documents: ", action.error);
        return state;

      default:
        return state;
    }
  };

  const addFavoriteToFirestore = async (newItem) => {
    const userFavoritesCollection = collection(
      db,
      "users",
      user.email,
      "favorites"
    );
    try {
      const docRef = await addDoc(userFavoritesCollection, newItem);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const removeFavoriteFromFirestore = async (idToRemove) => {
    const userFavoritesCollection = collection(
      db,
      "users",
      user.email,
      "favorites"
    );
    try {
      // favorites koleksiyonundaki belgeler içinde idToRemove adlı alanı arayarak sorgu yapın
      const querySnapshot = await getDocs(userFavoritesCollection);

      querySnapshot.forEach(async (doc) => {
        const data = doc.data();

        // Belge içinde id alanı kontrol edilir
        if (data.id === idToRemove) {
          // Belgeyi silme işlemi
          await deleteDoc(doc.ref);
          console.log(
            "Document with ID: ",
            idToRemove,
            " successfully deleted"
          );
        }
      });
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };

  const getFavoritesFromFirestore = useCallback(async () => {
    if (user) {
      const userFavoritesCollection = collection(
        db,
        "users",
        user.email,
        "favorites"
      );
      try {
        const querySnapshot = await getDocs(userFavoritesCollection);

        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Favorites retrieved from Firestore: ", items);
        return items;
      } catch (e) {
        console.error("Error getting documents: ", e);
        throw e; // Hata durumunda istisna fırlat
      }
    }
  }, [user, db]);

  const [cartList, cartListDispatch] = useReducer(reducer, reducerOriginValue);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await getFavoritesFromFirestore();
        cartListDispatch({ type: "GETITEM_SUCCESS", items });
      } catch (error) {
        cartListDispatch({ type: "GETITEM_FAILURE", error });
      }
    };

    fetchData();
  }, [user, getFavoritesFromFirestore]); // user değiştiğinde fetchData fonksiyonunu tekrar çağır

  const FavoritesContext = {
    addItem: (favorites) => {
      cartListDispatch({ type: "ADD", favorites });
    },
    removeItem: (id) => {
      cartListDispatch({ type: "REMOVE", id });
    },
    getFireStore: () => {
      cartListDispatch({ type: "GETITEM" });
    },
    cartList: cartList.items,
  };

  return (
    <MyContext.Provider value={FavoritesContext}>{children}</MyContext.Provider>
  );
};

export default MyProvider;
