import React from "react";
import ReactDOM from "react-dom";

import Game from "./components/Game/Game";
import Welcome from "./components/Welcome/Welcome";

import "./index.css"

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <div>
        <Game />
        <Welcome />
    </div>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
