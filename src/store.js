import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./store/reducers";
import thunk from "redux-thunk";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = () =>
  createStore(rootReducer, compose(applyMiddleware(thunk), composeEnhancers()));

const store = configureStore();

export default store;
