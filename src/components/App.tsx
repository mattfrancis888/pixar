import React from "react";
import Header from "./Header";
import { Route, Router, Switch } from "react-router-dom";
import history from "../browserHistory";
import Content from "./Content";
import Footer from "../components/Footer";
import featureFilms from "./FeatureFilms";
import SoulPreview from "./SoulPreview";
import OnwardPreview from "./OnwardPreview";
import Careers from "./Careers";
import About from "./About";
interface HeaderProps {
    headerOverlay: boolean;
    showHeaderOverlay(shouldShowHeaderOverlay: boolean): void;
}

const App: React.FC<{}> = () => {
    history.listen((_) => {
        window.scrollTo(0, 0);
    });
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
                    <Route
                        path="/onward-preview"
                        exact
                        component={OnwardPreview}
                    />
                    <Route path="/careers" exact component={Careers} />
                    <Route path="/about" exact component={About} />
                </Switch>
                <Footer />
            </Router>
        </React.Fragment>
    );
};

export default App;
