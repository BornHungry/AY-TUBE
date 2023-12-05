import React, { createContext, useReducer } from "react";

export const MyAuthContext = createContext();

const MyAuthProvider = ({ children }) => {
  const initialStateValue = {
    user: null, // veya başka bir değer
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "REGISTER":
        return { user: action.user };
      case "LOGIN":
        return { user: action.user };
      case "LOGOUT":
        return {
          user: null, // veya başka bir değer
        };
      default:
        return state;
    }
  };

  const [userInformation, dispatch] = useReducer(reducer, initialStateValue);
  console.log("userInformation", userInformation);
  const loginInformation = {
    user: userInformation.user,
    registerFunc: (user) => {
      dispatch({ type: "REGISTER", user });
    },
    loginFunc: (user) => {
      dispatch({ type: "LOGIN", user });
    },
    logoutFunc: () => {
      dispatch({ type: "LOGOUT" });
    },
  };

  return (
    <MyAuthContext.Provider value={loginInformation}>
      {children}
    </MyAuthContext.Provider>
  );
};

export default MyAuthProvider;
