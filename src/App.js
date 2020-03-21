import React from "react";

import { Provider } from "react-redux";

import store from "./redux/store";

import "./App.css";
import CakeContainer from "./components/CakeContainer";

import { Layout, Row } from "antd";
import HooksCakeContainer from "./components/HooksCakeContainer";

const { Content } = Layout;

const App = () => {
  let title = "React Redux App demo";

  return (
    <Provider store={store}>
      <Layout>
        <Content>
          <div className="App">
            <h1>{title}</h1>

            <div justify="center">
              <h3>Connect store Cake Container</h3>
              <CakeContainer />
            </div>
            <div justify="center">
              <h3>Store Hooks Cake Container</h3>
              <HooksCakeContainer />
            </div>
          </div>
        </Content>
      </Layout>
    </Provider>
  );
};

export default App;
