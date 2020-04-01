import React, { useState } from "react";
import "./App.css";

//components
import Home from "./Home";
import Header from "./Header";
import Search from "./Search";

function App() {
  return (
    <>
      <Header />

      <Search />
    </>
  );
}

export default App;
