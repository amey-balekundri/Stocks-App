import React, { useContext, useEffect } from "react";
import { StockForm } from "./StockForm";
import "../styles/stocks/main.css";
import { StocksContext } from "../../context/stocks";
import { LoadingContext } from "../../context/loading";
import { Loader } from "../common/Loader";
import { fetchStockData, clearReducer } from "../../actions/stocks";
import { StockData } from "./StockData";
import swal from "sweetalert2";

export function Stocks() {
  const { state: stockState, dispatch: stockDispatch } = useContext(StocksContext);
  const { state: loadingState, dispatch: loadingDispatch } = useContext(LoadingContext);

  function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const getStockData = async (stockTicker, date) => {
    const formattedDate = formatDateToYYYYMMDD(date);

    clearReducer()(stockDispatch);
    await fetchStockData(stockTicker, formattedDate)(stockDispatch, loadingDispatch);
  };

  useEffect(() => {
    // If there is error then show error message
    if (stockState.stockError) {
      swal.fire({
        toast: true,
        showConfirmButton: false,
        icon: "error",
        text: stockState.stockError,
        timer: 1500,
        timerProgressBar: true,
      });
    }
  }, [stockState.stockError]);

  return (
    <div>
      <div className="stocks-main-container">
        {loadingState.loading && <Loader />}
        <div className="stocks-left-container">
          <StockForm onSubmit={getStockData} />
        </div>
        <div className="stocks-right-container">
          {Object.keys(stockState.stockData).length > 0 && <StockData data={stockState.stockData} />}
        </div>
      </div>
    </div>
  );
}
