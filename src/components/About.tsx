import React from "react";
import nightBuilding from "../img/nightBuilding_hero.jpg";

const About: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <div className="heroParallaxContainer">
                <img
                    className="heroParallaxImage"
                    src={nightBuilding}
                    alt="steve jobs building"
                />
                <h1 className="heroParallaxTitle">CONTACT US</h1>
            </div>

            <div className="aboutInfoContainer">
                <p className="pixarContactAndAddress">
                    PIXAR ANIMATION STUDIOS
                    <br></br>
                    1200 PARK AVE EMERYVILLE, CA 94608
                    <br></br>
                    <br></br>T (510) 922-3000
                    <br></br>F (510) 922-3151
                </p>
                <div className="companyFAQContainer">
                    <h1>COMPANY FAQ’S</h1>
                    <h2>
                        I have a great idea for a Pixar movie. Can I send it to
                        you?
                    </h2>
                    <p>
                        Pixar does not accept any kind of creative submission.
                        All of Pixar’s ideas and stories are developed
                        internally and it is our policy not to look at any
                        external submissions. For legal reasons we do not
                        consider any creative material (scripts, synopses,
                        sketches, etc.) sent to us unsolicited. Please see our
                        website Terms of Use for more information.
                    </p>
                    <h2>When was Pixar established?</h2>
                    <p>Pixar was established on February 3, 1986.</p>
                    <h2>Can the public tour the Pixar facility?</h2>
                    <p>
                        Due to production demands and confidentiality issues, we
                        are a closed studio and do not offer tours.
                    </p>
                    <h2>Can the public tour the Pixar facility?</h2>
                    <p>
                        Due to production demands and confidentiality issues, we
                        are a closed studio and do not offer tours.
                    </p>
                    <h2>
                        I am a journalist seeking to interview a Pixar employee.
                        Whom can I contact regarding my request?
                    </h2>
                    <p>
                        Please send an email message containing all pertinent
                        details (the nature of the story, the person with whom
                        you wish to speak, the deadline, information regarding
                        your publication or outlet, etc.) via our Contact Us
                        section.
                    </p>
                    <h2>
                        I am working on a school project. Can I interview
                        someone from Pixar or will you please send me materials
                        that I can use as part of a presentation?
                    </h2>
                    <p>
                        We receive a large number of requests for information in
                        connection with student projects; unfortunately, we are
                        not able to respond to each one individually. This
                        website, however, contains answers to many of the most
                        commonly asked questions about Pixar, our employees, the
                        work that is done at our studio, and information about
                        the animation industry as a whole.
                    </p>
                    <h2>
                        What is Pixar's policy or practice for donations,
                        scholarships, or charities?
                    </h2>
                    <p>
                        Pixar's charitable giving supports local charitable
                        organizations and schools that directly focus on the
                        under-represented in the fields of Science, Technology,
                        Engineering, Arts, Mathematics (STEAM). We receive many
                        requests for donations that meet these criteria and take
                        a great deal of care in determining which initiatives to
                        support. Regrettably, we are not able to accommodate all
                        of the worthy requests we receive or requests that fall
                        outside of our mission. Pixar does not have a
                        scholarship program at this time.
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
