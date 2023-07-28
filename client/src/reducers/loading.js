//import the types of actions supported
import { START_LOADING, STOP_LOADING } from "../actions/types";

//Initial state of the reducer of type State
export const initialState = {
  loading: false,
};

//Loading reducer which takes a state and an action param
export const Loading = (state = initialState, action) => {
  //switch between action.type
  switch (action.type) {
    //if action is of type START_LOADING return the state by setting loading to true
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    //if action is of type STOP_LOADING return the state by setting loading to false
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };

    //return state as it is if action is not of any of the types
    default:
      return state;
  }
};
