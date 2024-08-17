import React from 'react';
import {Container, LeftContainer, RightContainer, Wrapper} from "./components/Container";
import {Intro} from "./components/intro/intro";
import {Experience, ResumeLink} from "./components/experience/experience";
import {NameHeader} from "./components/intro/nameHeader";
import {SocialLinks} from "./components/social-links";
import CursorCircle from "./components/cursor-gradient";
import Education from "./components/education/education";
import Projects from "./components/project/projects";


function GlassyWebsite() {
    return (
        <Wrapper>
            <CursorCircle/>
                <Container>
                    <LeftContainer>
                        <NameHeader>Mugunthan Ramesh</NameHeader>
                        <br/>
                        <br/>
                        <Intro/>
                        <ResumeLink>
                            <a href="/Mugunthan%20R.pdf">My Resume <span className="link-arrow">↗</span></a>
                        </ResumeLink>
                        <SocialLinks/>
                    </LeftContainer>
                    <RightContainer>
                        <Experience/>
                        <Education/>
                        <Projects/>
                    </RightContainer>
                    {/* Add more GlassContainer components as needed */}
                </Container>
        </Wrapper>
    );
}

export default GlassyWebsite;
