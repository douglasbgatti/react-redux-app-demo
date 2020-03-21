import React from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";

const App = () => {
  let title = "React Redux App demo";

  return (
    <div className="App">
      <h1>{title}</h1>

      <CakeContainer />
    </div>
  );
};

export default App;
