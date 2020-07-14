import React from "react";
import Header from "./Header";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import Content from "../components/Content";
const App: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <Router history={history}>
                <Header />
                <Route path="/" exact component={Content} />
                <Switch></Switch>
            </Router>
        </React.Fragment>
    );
};

export default App;
