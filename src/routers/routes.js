import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";

import Home from "../pages/Home";
import Details from "../pages/Details";
import Register from "../pages/Register";
import Artesanais from "../pages/Categorys";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/:nome/details" component={Details} />
        <Route path="/register" component={Register} />
        <Route path={"/:categoria"} component={Artesanais}/>
      </Switch>
    </BrowserRouter>
  );
}
