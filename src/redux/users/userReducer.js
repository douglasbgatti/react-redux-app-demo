import { constants } from "./userActions";

const initialState = {
  loading: false,
  users: [],
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_USER_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case constants.FETCH_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: ""
      };
    }
    case constants.FETCH_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload
      };
    }
    default:
      return state;
  }
};
