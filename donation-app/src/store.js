import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";

const composedEnhancer = compose(applyMiddleware(thunk))
const store = createStore(reducers, composedEnhancer);

export default store;