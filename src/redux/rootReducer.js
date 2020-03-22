import { combineReducers } from "redux";

import { reducer as cakeReducer } from "./cakes/cakeReducer";
import { reducer as iceCreamReducer } from "./iceCream/iceCreamReducer";
import { reducer as userReducer } from "./users/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer
});

export default rootReducer;
