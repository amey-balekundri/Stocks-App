import { startLoading, stopLoading } from "./loading";
import axios from "axios";
import { API_URL } from "./serverConnection";
import { CLEAR_REDUCER, FETCH_STOCK_DATA, STOCK_ERROR } from "./types";

export const fetchStockData = (stocksTicker, date) => async (dispatch, loadingDispatch) => {
  try {
    //dispatch start loading
    startLoading(loadingDispatch);
    //fetch the results from api
    const result = await axios.post(`${API_URL}/api/fetchStockData`, {
      stocksTicker,
      date,
    });
    dispatch({
      type: FETCH_STOCK_DATA,
      payload: result.data.data,
    });

    //Stop loading
    stopLoading(loadingDispatch);
  } catch (err) {
    dispatch({
      type: STOCK_ERROR,
      payload: err.response.data.message,
    });
    stopLoading(loadingDispatch);
  }
};

export const clearReducer = () => async (dispatch) => {
  dispatch({
    type: CLEAR_REDUCER,
  });
};
