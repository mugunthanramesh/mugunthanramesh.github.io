import React from 'react';
import {Container, LeftContainer, RightContainer} from "./components/Container";
import {Intro} from "./components/intro/intro";
import {Experience} from "./components/experience/experience";
import {NameHeader} from "./components/intro/nameHeader";
import {SocialLinks} from "./components/social-links";


function GlassyWebsite() {
    return (
        <div style={{ backgroundColor: "#10172a"}}>
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
                    </RightContainer>
                    {/* Add more GlassContainer components as needed */}
                </Container>
        </div>
    );
}

export default GlassyWebsite;
