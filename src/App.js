import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Route, Routes, Navigate } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate replice to="/home" />} />
          <Route path="/home" element={<Home />}>
            <Route index element={<Header />} />
          </Route>
          <Route path="/checkout" element={<Checkout />}>
            <Route index element={<Header />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
