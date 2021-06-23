import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Cart from "../pages/cart";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="" component={Details} />
        <Route exact path="/about" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}
