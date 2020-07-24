import React from "react";
import onwardLogo from "../img/onwardLogo.jpg";
import FilmPreview from "./FilmPreview";
const OnwardPreview: React.FC<{}> = () => {
    const trailerLinks = [
        "https://www.youtube.com/embed/HxKXiQvyG_o",
        "https://www.youtube.com/embed/x8DKg_fsacM",
    ];
    const trailerParagraphFormat = (): JSX.Element => {
        return (
            <p>
                Set in a suburban fantasy world, Disney and Pixar’s “Onward”
                introduces two teenage elf brothers who embark on an
                extraordinary quest to discover if there is still a little magic
                left out there. “The story is inspired by my own relationship
                with my brother and our connection with our dad who passed away
                when I was about a year old,” says director Dan Scanlon. “He’s
                always been a mystery to us. A family member sent us a tape
                recording of him saying just two words: ‘hello’ and ‘goodbye.’
                Two words. But to my brother and me—it was magic.
                <br></br>
                <br></br>
                “That was the jumping-off point,” continues Scanlon. “We’ve all
                lost someone, and if we could spend one more day with them—what
                an exciting opportunity that would be. We knew that if we wanted
                to tell that story that we’d have to set the movie in a world
                where you could have that incredible opportunity.”
            </p>
        );
    };

    return (
        <React.Fragment>
            <FilmPreview
                filmLogo={onwardLogo}
                trailerLinks={trailerLinks}
                trailerParagraphFormat={trailerParagraphFormat()}
            ></FilmPreview>
        </React.Fragment>
    );
};
export default OnwardPreview;
