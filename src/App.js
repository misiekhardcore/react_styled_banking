import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages";
import SigninPage from "./pages/signin";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SigninPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
