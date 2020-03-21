import React, { useState } from "react";

import { connect } from "react-redux";

import { Button, Input, Form, Row } from "antd";

import actions from "../../redux/index";

const { Item } = Form;

const InputCakeContainer = props => {
  const [numberOfCakes, setNumberOfCakes] = useState(0);

  const onNumberOfCakesEntered = event => {
    const numb = event.target.value;

    setNumberOfCakes(numb);
  };

  const onFinish = () => {
    props.buyCake(numberOfCakes);
  };

  return (
    <Row justify="center" gutter={(12, 32)}>
      <Form layout="inline" onFinish={onFinish}>
        <Item label="Amount of cakes to buy">
          <Input
            placeholder="Enter the amount of cakes to buy"
            value={numberOfCakes}
            onChange={e => onNumberOfCakesEntered(e)}
            type="number"
          />
        </Item>
        <Item>
          <Button type="primary" htmlType="submit">
            Buy {numberOfCakes} Cake
          </Button>
        </Item>
      </Form>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(actions.cakeActions.buyCake(number))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputCakeContainer);
