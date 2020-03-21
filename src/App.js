import React from "react";

import { Provider } from "react-redux";

import store from "./redux/store";

import "./App.css";
import CakeContainer from "./components/cake/CakeContainer";

import { Layout } from "antd";
import IceCreamContainer from "./components/iceCream/IceCreamContainer";

const { Content } = Layout;

const App = () => {
  let title = "React Redux App demo";

  return (
    <Provider store={store}>
      <Layout>
        <Content>
          <div className="App">
            <h1>{title}</h1>

            <CakeContainer />

            <IceCreamContainer />
          </div>
        </Content>
      </Layout>
    </Provider>
  );
};

export default App;
