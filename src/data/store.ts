import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { IAppState } from "./interfaces";
import reducers from "./reducers";

const store = createStore<IAppState>(
    reducers,
    compose(applyMiddleware(thunk)),
);

export default store;
