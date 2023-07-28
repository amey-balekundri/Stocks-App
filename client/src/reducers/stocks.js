//import the types of actions supported
import { FETCH_STOCK_DATA, CLEAR_REDUCER, STOCK_ERROR } from "../actions/types";

//Initial state of the reducer of type State
export const initialState = {
  stockData: {},
  stockError: "",
};

//Stocks reducer which takes a state and an action param
export const Stocks = (state = initialState, action) => {
  //switch between action.type
  switch (action.type) {
    case FETCH_STOCK_DATA:
      return {
        ...state,
        stockData: action.payload,
      };
    case STOCK_ERROR:
      return {
        ...state,
        stockError: action.payload,
      };
    case CLEAR_REDUCER:
      return {
        stockData: {},
        stockError: "",
      };

    //return state as it is if action is not of any of the  types
    default:
      return state;
  }
};
