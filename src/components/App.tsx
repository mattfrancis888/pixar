import React from "react";
import Header from "./Header";
import { Route, Router, Switch } from "react-router-dom";
import history from "../browserHistory";
import Content from "./Content";
import Footer from "../components/Footer";
import featureFilms from "./FeatureFilms";
import SoulPreview from "./SoulPreview";
const App: React.FC<{}> = () => {
    console.log(history);
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
                    <Route path="/soul-preview" exact component={SoulPreview} />
                </Switch>
                <Footer />
            </Router>
        </React.Fragment>
    );
};

export default App;
