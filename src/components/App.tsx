import React from "react";
import Header from "./Header";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import Content from "../components/Content";
import Footer from "../components/Footer";
import featureFilms from "../components/FeatureFilms";
const App: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/" exact component={Content} />
                    <Route
                        path="/featured-films"
                        exact
                        component={featureFilms}
                    />
                </Switch>
                <Footer />
            </Router>
        </React.Fragment>
    );
};

export default App;
