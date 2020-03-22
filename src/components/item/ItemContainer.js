import React from "react";

import { connect } from "react-redux";

import actions from "../../redux/index";

import { Button, Row, Col } from "antd";

const ItemContainer = props => {
  return (
    <Row>
      <Col>
        <p>
          Item Container => Number of {props.itemType}: {props.item}
        </p>
      </Col>
      <Col>
        <Button type="primary" onClick={props.buyItem}>
          Buy {props.itemType}
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  const type = ownProps.cake ? "Cakes" : "Ice Creams";

  return {
    item: itemState,
    itemType: type
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(actions.cakeActions.buyCake())
    : () => dispatch(actions.iceCreamActions.buyIceCream());

  return {
    buyItem: dispatchFunction
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
