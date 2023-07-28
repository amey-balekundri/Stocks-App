import React, { useReducer, createContext } from "react";
import { Stocks, initialState } from "../reducers/stocks";

//export the StocksContext by creating a context which has a state (initial state)
export const StocksContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const StocksContextProvider = ({ children }) => {
  //get the state and the dispatch function from the useReducer hook by using the Loading reducer
  const [state, dispatch] = useReducer(Stocks, initialState);
  //create an object called value which has the state and the dispatch function returned from the reducer
  const value = { state, dispatch };
  return (
    //wrap the children with the Provider component for the Loading Context and pass the value of the context
    <StocksContext.Provider value={value}>{children}</StocksContext.Provider>
  );
};
