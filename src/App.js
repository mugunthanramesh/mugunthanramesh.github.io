import React from 'react';
import {Container, LeftContainer, RightContainer, Wrapper} from "./components/Container";
import {Intro} from "./components/intro/intro";
import {Experience} from "./components/experience/experience";
import {NameHeader} from "./components/intro/nameHeader";
import {SocialLinks} from "./components/social-links";
import CursorCircle from "./components/cursor-gradient";
import Education from "./components/education/education";


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
                        <SocialLinks/>
                    </LeftContainer>
                    <RightContainer>
                        <br/>
                        <Experience/>
                        <br/>
                        <Education/>
                    </RightContainer>
                    {/* Add more GlassContainer components as needed */}
                </Container>
        </Wrapper>
    );
}

export default GlassyWebsite;
