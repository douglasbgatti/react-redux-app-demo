import React from "react";

import { Provider } from "react-redux";

import store from './redux/store';

import "./App.css";

import CakeContainer from "./components/CakeContainer";

const App = () => {
  let title = "React Redux App demo";

  return (
    <Provider store={store}>
      <div className="App">
        <h1>{title}</h1>

        <CakeContainer />
      </div>
    </Provider>
  );
};

export default App;
