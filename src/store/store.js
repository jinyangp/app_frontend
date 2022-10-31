import React, { createContext, useReducer } from "react";

import reducer from "./reducer";

const assignItem = (keyName) => {
  const value = localStorage.getItem(keyName);

  if (value == undefined) {
    return null;
  } else {
    if (keyName == "token") {
      return value;
    } else {
      return JSON.parse(value);
    }
  }
};

const initialState = {
  userDetails: {
    userId: assignItem("userId"),
    userName: assignItem("userName"),
    userImage: assignItem("userImage"),
    token: assignItem("token"),
    wishlistIds: assignItem("wishlistIds"),
  },
};

export const Context = createContext(initialState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;
