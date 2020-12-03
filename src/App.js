import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
