import "../styles/stocks/stockdata.css";

export const StockData = ({ data }) => {
  return (
    <div>
      <div class="card">
        <h2>Stock Data</h2>
        <p>
          <strong>High : </strong>
          {data.high}
          <span id="high"></span>
        </p>
        <p>
          <strong>Low : </strong>
          {data.low}
          <span id="low"></span>
        </p>
        <p>
          <strong>Open : </strong>
          {data.open}
          <span id="open"></span>
        </p>
        <p>
          <strong>Close : </strong>
          {data.close}
          <span id="close"></span>
        </p>
        <p>
          <strong>Volume : </strong>
          {data.volume}
          <span id="volume"></span>
        </p>
      </div>
    </div>
  );
};
