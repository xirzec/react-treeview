import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./data/store";
import Main from "./ux/main";

render((
    <Provider store={store}>
        <Main/>
    </Provider>
), document.getElementById("app"));
