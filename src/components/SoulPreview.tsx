import React from "react";
import soulLogo from "../img/soulLogo.jpg";
const Content: React.FC<{}> = () => {
    return (
        <div>
            <div className="soulLogoContainer">
                <img src={soulLogo} alt="soul logo" />
            </div>
            <div className="soulDescriptionContainer">
                <p>
                    Directed by two-time Academy Award®-winner Pete Docter,
                    co-directed by Kemp Powers and produced by Academy
                    Award®-nominee Dana Murray, Disney and Pixar’s “Soul” opens
                    in theaters on November 20, 2020. According to Docter, the
                    idea for the story is 23 years in the making. “It started
                    with my son—he’s 23 now—but the instant he was born, he
                    already had a personality,” says Docter. “Where did that
                    come from? I thought your personality developed through your
                    interaction with the world. And yet, it was pretty clear
                    that we’re all born with a very unique, specific sense of
                    who we are.”
                    <br></br>
                    <br></br>
                    “Soul” introduces Joe Gardner, a middle-school band teacher
                    whose true passion is playing jazz. “I think Joe is having
                    that crisis that all artists have,” says Powers. “He’s
                    increasingly feeling like his lifelong dream of being a jazz
                    musician is not going to pan out and he’s asking himself
                    ‘Why am I here? What am I meant to be doing?’ Joe
                    personifies those questions.”
                    <br></br>
                    <br></br>
                    In the film, just when Joe thinks his dream might be in
                    reach, a single unexpected step sends him to a fantastical
                    place where he’s is forced to think again about what it
                    truly means to have soul. That’s where he meets and
                    ultimately teams up with 22, a soul who doesn’t think life
                    on Earth is all it’s cracked up to be. Jamie Foxx lends his
                    voice to Joe, while Tina Fey voices 22. “The comedy comes
                    naturally,” says Murray. “But the subtle emotion that
                    reveals the truth to the characters is really something
                    special.”
                </p>
            </div>

            <div className="trailersContainer">
                <h1>Trailers</h1>
                <div className="trailerVideosContainer">
                    <div className="soulTrailerContainer">
                        <iframe
                            className="soulTrailer"
                            title="soulTrailer"
                            src="https://www.youtube.com/embed/xOsLIiBStEs"
                            frameBorder="0"
                            allow="accelerometer; autoplay; 
                encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="soulTrailerContainer">
                        <iframe
                            className="soulTrailer"
                            src="https://www.youtube.com/embed/4TojlZYqPUo"
                            title="soulTeaserTrailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; 
                encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Content;
