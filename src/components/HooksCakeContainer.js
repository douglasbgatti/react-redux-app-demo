import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { Button, Row } from "antd";

import actions from "../redux/index";

const HooksCakeContainer = props => {
  const numOfCakes = useSelector(state => state.numOfCakes);

  const dispatch = useDispatch();

  return (
    <div>
      <Row justify="center" gutter={16}>
        <h2>Number of Cakes: {numOfCakes}</h2>
      </Row>
      <Row justify="center" gutter={16}>
        <Button
          type="primary"
          onClick={() => dispatch(actions.cakeActions.buyCake())}
        >
          Buy Cake
        </Button>
      </Row>
    </div>
  );
};

export default HooksCakeContainer;
