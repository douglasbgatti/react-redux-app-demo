import { combineReducers } from "redux";

import { reducer as cakeReducer } from "./cakes/cakeReducer";
import { reducer as iceCreamReducer } from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

export default rootReducer;
