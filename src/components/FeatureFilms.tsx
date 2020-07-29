import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Film, fetchFilms } from "../actions";
import { StoreState } from "../reducers";
import onwardHero from "../img/onward_hero.jpg";
import { Image, CloudinaryContext } from "cloudinary-react";
import Loading from "./Loading";
export interface FeatureFilmsProps {
    // fetchFilms: Function;
    fetchFilms(): void;
    films: Film[];
}
const FeatureFilms: React.FC<FeatureFilmsProps> = (props) => {
    useEffect(() => {
        props.fetchFilms();
    }, []);

    const renderList = (): JSX.Element | JSX.Element[] => {
        if (props.films.length === 0)
            return (
                <div className="loadingCenter">
                    <Loading />
                </div>
            );
        else
            return props.films.map((film) => {
                return (
                    <CloudinaryContext
                        cloudName="du8n2aa4p"
                        key={film.id.toString()}
                    >
                        <div className="film">
                            <Image
                                className="filmImage"
                                publicId={film.image}
                            ></Image>

                            <h2>{film.title}</h2>
                        </div>
                    </CloudinaryContext>
                );
            });
    };
    return (
        <React.Fragment>
            <div className="heroParallaxContainer">
                <img
                    className="heroParallaxImage"
                    src={onwardHero}
                    alt=" scene"
                />
                <h1 className="heroParallaxTitle">Featured Films</h1>
            </div>
            <div className="filmsContainer">{renderList()}</div>
        </React.Fragment>
    );
};

const mapStateToProps = (state: StoreState): { films: Film[] } => {
    return {
        films: state.films,
    };
};
export default connect(mapStateToProps, { fetchFilms })(FeatureFilms);
