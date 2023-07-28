import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Stocks } from "./components/stocks";
import { StocksContextProvider } from "./context/stocks";
import { LoadingContextProvider } from "./context/loading";
import { Loader } from "./components/common/Loader";

const App = () => {
  return (
    <div className="App">
      <LoadingContextProvider>
        <StocksContextProvider>
          <Router>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route exact path="/" Component={Stocks} />
              </Routes>
            </Suspense>
          </Router>
        </StocksContextProvider>
      </LoadingContextProvider>
    </div>
  );
};

export default App;
