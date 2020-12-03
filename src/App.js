import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Route link="/" component={Home} />
    </BrowserRouter>
  );
};

export default App;
