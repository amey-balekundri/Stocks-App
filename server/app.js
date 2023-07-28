// DO NOT MODIFY ANYTHING HERE, THE PLACE WHERE YOU NEED TO WRITE CODE IS MARKED CLEARLY BELOW

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const isValidDateFormat = require("./utils/date");

const app = express();

app.use(function (req, res, next) {
  const allowedOrigins = ["http://localhost:3000"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());

app.enable("trust proxy");

app.post("/api/fetchStockData", async (req, res) => {
  // YOUR CODE GOES HERE, PLEASE DO NOT EDIT ANYTHING OUTSIDE THIS FUNCTION
  try {
    const { POLYGON_URL, POLYGON_API_KEY } = process.env;

    if (!POLYGON_URL || !POLYGON_API_KEY) {
      throw {
        status: 500,
        message: "something went wrong, please try again later",
      };
    }

    const { stocksTicker, date } = req.body;

    if (!stocksTicker || !date) {
      throw {
        status: 400,
        message: "stocksTicker and date are requried",
      };
    }

    if (!isValidDateFormat(date)) {
      throw {
        status: 400,
        message: "Invalid date format, date format should be yyyy-MM-dd",
      };
    }

    if (Date.parse(date) > new Date()) {
      throw {
        status: 400,
        message: "Invalid date, date cannot be in future",
      };
    }

    const stock = await axios
      .get(`${POLYGON_URL}/v1/open-close/${stocksTicker}/${date}`, {
        headers: {
          Authorization: `Bearer ${POLYGON_API_KEY}`,
        },
      })
      .catch((error) => {
        throw {
          status: error?.response?.status,
          message: error?.response?.data?.message ?? "Failed to fetch data",
        };
      });

    const { open, high, low, close, volume } = stock.data;

    res.status(200).json({
      status: 200,
      data: { open, high, low, close, volume },
      message: `${stocksTicker} stock details fetched successfully for date ${date}`,
    });
  } catch (error) {
    res.status(error.status ?? 500).json({
      status: error.status ?? 500,
      message: error.message ?? "Internal Server Error",
    });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
