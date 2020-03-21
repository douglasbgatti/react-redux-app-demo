import React from "react";

import { connect } from "react-redux";

import { Button, Row } from "antd";

import actions from "../redux/index";

const CakeContainer = props => {
  return (
    <div>
      <Row justify="center" gutter={16}>
        <h2>Number of Cakes: {props.numOfCakes}</h2>
      </Row>
      <Row justify="center" gutter={16}>
        <Button type="primary" onClick={props.buyCake}>
          Buy Cake
        </Button>
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(actions.cakeActions.buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
