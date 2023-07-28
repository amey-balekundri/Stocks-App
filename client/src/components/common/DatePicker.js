import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/common/datepicker.css";

export const CommonDatePicker = ({ value, startDate, endDate, maxDate, onChange }) => {
  return (
    <>
      <div className="label-div">
        <label className={"label"}>Date</label>
      </div>
      <DatePicker
        selected={value}
        placeholderText="Please Select Date"
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
        maxDate={maxDate}
        dateFormat={"dd/MM/yyyy"}
      />
    </>
  );
};
