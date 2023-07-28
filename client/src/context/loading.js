import React, { useReducer, createContext } from "react";
import { Loading, initialState } from "../reducers/loading";

//export the LoadingContext by creating a context which has a state (initial state)
export const LoadingContext = createContext({
  state: initialState,
  dispatch: () => null,
});

//export the LoadinContextProvider which is a component that takes the children prop
export const LoadingContextProvider = ({ children }) => {
  //get the state and the dispatch function from the useReducer hook by using the Loading reducer
  const [state, dispatch] = useReducer(Loading, initialState);
  //create an object called value which has the state and the dispatch function returned from the reducer
  const value = { state, dispatch };
  return (
    //wrap the children with the Provider component for the Loading Context and pass the value of the context
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
