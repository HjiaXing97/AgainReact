import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import aboutReducer from "./feature/about";
import counterReducer from "./feature/counter";

const reducer = combineReducers({
  counter: counterReducer,
  about: aboutReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
