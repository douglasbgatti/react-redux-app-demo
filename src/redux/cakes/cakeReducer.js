import { constants } from "./cakeActions";

const initialState = {
  numOfCakes: 10
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.BUY_CAKE: {
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
    }
    default:
      return state;
  }
};
