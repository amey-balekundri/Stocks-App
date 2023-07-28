import { START_LOADING, STOP_LOADING } from "./types"; //Import action types

//startLoading function will dispatch a START_LOADING type action
export const startLoading = (dispatch) => {
  dispatch({
    type: START_LOADING,
  });
};

//stopLoading function will dispatch a STOP_LOADING type action
export const stopLoading = (dispatch) => {
  dispatch({
    type: STOP_LOADING,
  });
};
