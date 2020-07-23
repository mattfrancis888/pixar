import React from "react";
import onwardLogo from "../img/onwardLogo.jpg";
const Content: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <div className="soulLogoContainer">
                <img src={onwardLogo} alt="soul logo" />
            </div>
            <div className="soulDescriptionContainer">
                <p>
                    Set in a suburban fantasy world, Disney and Pixar’s “Onward”
                    introduces two teenage elf brothers who embark on an
                    extraordinary quest to discover if there is still a little
                    magic left out there. “The story is inspired by my own
                    relationship with my brother and our connection with our dad
                    who passed away when I was about a year old,” says director
                    Dan Scanlon. “He’s always been a mystery to us. A family
                    member sent us a tape recording of him saying just two
                    words: ‘hello’ and ‘goodbye.’ Two words. But to my brother
                    and me—it was magic.
                    <br></br>
                    <br></br>
                    “That was the jumping-off point,” continues Scanlon. “We’ve
                    all lost someone, and if we could spend one more day with
                    them—what an exciting opportunity that would be. We knew
                    that if we wanted to tell that story that we’d have to set
                    the movie in a world where you could have that incredible
                    opportunity.”
                </p>
            </div>

            <div className="trailersContainer">
                <h1>Trailers</h1>
                <div className="trailerVideosContainer">
                    <div className="soulTrailerContainer">
                        <iframe
                            className="soulTrailer"
                            title="soulTrailer"
                            src="https://www.youtube.com/embed/HxKXiQvyG_o"
                            frameBorder="0"
                            allow="accelerometer; autoplay; 
                encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="soulTrailerContainer">
                        <iframe
                            className="soulTrailer"
                            src="https://www.youtube.com/embed/x8DKg_fsacM"
                            title="soulTeaserTrailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; 
                encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Content;
