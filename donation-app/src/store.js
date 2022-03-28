import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const composedEnhancer = compose(applyMiddleware(thunk))
const store = createStore({}, composedEnhancer);

export default store;