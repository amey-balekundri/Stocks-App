import React, { useState } from "react";
import { Button } from "../common/Button";
import { TextField } from "../common/TextField";
import { CommonDatePicker } from "../common/DatePicker";

export const StockForm = ({ onSubmit }) => {
  const [date, setDate] = useState();
  const [stockTicker, setStockTicker] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    onSubmit(stockTicker, date);
  };
  return (
    <div>
      <form>
        <TextField
          value={stockTicker}
          id={"stockTextField"}
          placeholder={"Please Enter Stock Ticker Symbol"}
          label={"Stock Ticker"}
          width={"400px"}
          handleChange={(e) => setStockTicker(e.target.value)}
        />
        <CommonDatePicker value={date} maxDate={new Date()} onChange={(date) => setDate(date)} />
        <Button id={"getStockData"} value={"Get Data"} handleClick={handleClick} />
      </form>
    </div>
  );
};
