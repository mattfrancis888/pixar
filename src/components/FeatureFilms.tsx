import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Films, fetchFilms } from "../actions";
import { StoreState } from "../reducers";
import onwardHero from "../img/onward_hero.jpg";
import { Image, CloudinaryContext } from "cloudinary-react";
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
                    <div className="film" key={film.id.toString()}>
                        {/* <img src={toystory} alt="film" /> */}
                        <CloudinaryContext cloudName="du8n2aa4p">
                            <Image publicId={film.image}></Image>
                        </CloudinaryContext>
                        <h2>{film.title}</h2>
                    </div>
                );
            });
    };
    return (
        <div>
            <div className="heroContainer">
                <img className="heroImage" src={onwardHero} alt=" scene" />
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
