import React from "react";

interface FilmPreviewProps {
    filmLogo: string;
    trailerLinks: string[];
    trailerParagraphFormat: JSX.Element;
}

const FilmPreview: React.FC<FilmPreviewProps> = (props) => {
    const renderFilmTrailers = (): JSX.Element[] => {
        return props.trailerLinks.map((link) => {
            return (
                <div className="filmPreviewTrailerContainer">
                    <iframe
                        className="filmPreviewTrailer"
                        title="film trailer"
                        src={link}
                        frameBorder="0"
                        allow="accelerometer; autoplay; 
        encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            );
        });
    };
    return (
        <React.Fragment>
            <div className="filmPreviewLogoContainer">
                <img src={props.filmLogo} alt="film logo" />
            </div>
            <div className="filmPreviewDescriptionContainer">
                {props.trailerParagraphFormat}
            </div>

            <div className="filmPreviewTrailersSection">
                <h1>Trailers</h1>
                <div className="filmPreviewTrailerWrap">
                    {renderFilmTrailers()}
                </div>
            </div>
        </React.Fragment>
    );
};
export default FilmPreview;
