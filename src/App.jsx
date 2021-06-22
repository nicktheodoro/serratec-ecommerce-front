import React from "react";

import PrimarySearchAppBar from "./components/Header";

import Cart from "./pages/Cart";

import "./global.css"

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Cart />
    </div>
  );
}

export default App;
