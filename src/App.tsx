import React from "react";
import "./App.css";
import { Body } from "./components/Body/body";
import NavBar from "./components/NavBar/navbar";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Body />  
    </>
  );
};

export default App;
