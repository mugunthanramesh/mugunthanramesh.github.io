import React from 'react';
import {Container, LeftContainer, RightContainer} from "./components/Container";
import {Intro} from "./components/personal/intro/intro";
import {Experience} from "./components/personal/experience/experience";
import {NameHeader} from "./components/personal/intro/nameHeader";


function GlassyWebsite() {
    return (
        <div style={{ backgroundColor: "#10172a"}}>
                <Container>
                    <LeftContainer>
                        <NameHeader>Mugunthan Ramesh</NameHeader>
                    </LeftContainer>
                    <RightContainer>
                        <Intro/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Experience/>
                    </RightContainer>
                    {/* Add more GlassContainer components as needed */}
                </Container>
        </div>
    );
}

export default GlassyWebsite;
