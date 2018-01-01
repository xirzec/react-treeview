import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./data/store";

render((
    <Provider store={store}>
        <div>Hello world</div>
    </Provider>
), document.getElementById("app"));
