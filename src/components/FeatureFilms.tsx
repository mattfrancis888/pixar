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

    const renderList = (): JSX.Element | JSX.Element[] => {
        if (props.films.length === 0) return <div>Loading</div>;
        else
            return props.films.map((film) => {
                return (
                    <div className="film">
                        <img src={toystory} alt="film" />
                        <h2>{film.title}</h2>
                    </div>
                );
            });
    };
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
            <div className="filmsContainer">{renderList()}</div>
        </div>
    );
};

const mapStateToProps = (state: StoreState): { films: Films[] } => {
    return {
        films: state.films,
    };
};
export default connect(mapStateToProps, { fetchFilms })(FeatureFilms);
