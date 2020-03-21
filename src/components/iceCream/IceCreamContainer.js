import React from "react";

import { connect } from "react-redux";

import { Button, Row } from "antd";

import actions from "../../redux/index";

const IceCreamContainer = props => {
  return (
    <div>
      <Row justify="center" gutter={16}>
        <h2>Number of Ice Creams: {props.numOfIceCreams}</h2>
      </Row>
      <Row justify="center" gutter={16}>
        <Button type="primary" onClick={props.buyIceCream}>
          Buy Ice Cream
        </Button>
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(actions.iceCreamActions.buyIceCream())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
