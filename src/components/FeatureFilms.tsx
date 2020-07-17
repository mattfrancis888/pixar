import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Films, fetchFilms } from "../actions";
import { StoreState } from "../reducers";
import onwardsHero from "../img/onwards_hero.jpg";
import toystory from "../img/toystory.jpg";

export interface FeatureFilmsProps {
    fetchFilms(): any;
    films: Films[];
}
const FeatureFilms: React.FC<FeatureFilmsProps> = (props) => {
    useEffect(() => {
        props.fetchFilms();
    }, []);
    // console.log(props);

    const renderList = (): JSX.Element => {
        if (props.films.length === 0) return <div>Loading</div>;
        else
            return (
                <div>
                    <div className="heroContainer">
                        <img
                            className="heroImage"
                            src={onwardsHero}
                            alt="onwards scene"
                        />
                        <h1>Featured Films</h1>
                    </div>

                    <div className="filmsContainer">
                        <div className="film">
                            <img src={toystory} alt="film" />
                            <h2>{props.films[0].title}</h2>
                        </div>
                        <div className="film">
                            <img src={toystory} alt="film" />
                            <h2>{props.films[1].title}</h2>
                        </div>
                        <div className="film">
                            <img src={toystory} alt="film" />
                            <h2>{props.films[2].title}</h2>
                        </div>
                    </div>
                </div>
            );
    };
    return <React.Fragment>{renderList()}</React.Fragment>;
};

const mapStateToProps = (state: StoreState): { films: Films[] } => {
    return {
        films: state.films,
    };
};
export default connect(mapStateToProps, { fetchFilms })(FeatureFilms);
