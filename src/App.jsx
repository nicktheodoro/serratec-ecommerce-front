import React from "react";

import PrimarySearchAppBar from "./components/Header";

import Cart from "./pages/Cart";

import styles from "./global.scss"

function App() {
  return (
    <div className={styles}>
      <PrimarySearchAppBar />
      <Cart />
    </div>
  );
}

export default App;
