import React from "react";
import Header from "./Header";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";

const App = () => {
    return (
        <React.Fragment>
            <Router history={history}>
                <Header />
                <Switch></Switch>
            </Router>
        </React.Fragment>
    );
};

export default App;
