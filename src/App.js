import React from "react";

import { Provider } from "react-redux";

import store from "./redux/store";

import "./App.css";
import CakeContainer from "./components/cake/CakeContainer";

import { Layout } from "antd";
import IceCreamContainer from "./components/iceCream/IceCreamContainer";
import InputCakeContainer from "./components/cake/InputCakeContainer";
import ItemContainer from "./components/item/ItemContainer";
import UserContainer from "./components/user/UserContainer";

const { Content } = Layout;

const App = () => {
  let title = "React Redux App demo";

  return (
    <div>
      <React.StrictMode>
        <Provider store={store}>
          <Layout>
            <Content>
              <div className="App">
                <h1>{title}</h1>

                <CakeContainer />

                <InputCakeContainer />

                <IceCreamContainer />

                <hr />

                <ItemContainer cake />
                <ItemContainer />

                <UserContainer />
              </div>
            </Content>
          </Layout>
        </Provider>
      </React.StrictMode>
    </div>
  );
};

export default App;
