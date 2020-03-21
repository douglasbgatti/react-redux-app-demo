import { createStore } from "redux";

import { reducer as cakeReducer } from "./cakes/cakeReducer";

const store = createStore(cakeReducer);

export default store;
