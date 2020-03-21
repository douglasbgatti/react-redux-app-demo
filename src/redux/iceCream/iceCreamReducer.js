import { constants } from "./iceCreamActions";

const initialState = {
  numOfIceCreams: 30
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.BUY_ICE_CREAM: {
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      };
    }
    default:
      return state;
  }
};
