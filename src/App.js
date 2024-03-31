import React from 'react';
import styled, { keyframes } from 'styled-components';
import Intro from "./components/personal/intro";
import backgroundImage from "./resource/background.jpg"
import Experience from "./components/personal/experience";

const glassAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
  background: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  animation: ${glassAnimation} 15s ease infinite;
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: auto; /* Enable scrolling */
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
`;

const GlassContainer = styled.div`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 20px;
  width: 100%; /* Use the whole width of the screen */
  margin-bottom: 20px; /* Add margin to create space between containers */
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

function GlassyWebsite() {
    return (
        <div>
            <Container>
                <div>
                    <GlassContainer className="intro-style">
                        <h1>Mugunthan Ramesh</h1>
                        <Intro/>
                    </GlassContainer>
                </div>
                <div>
                    <GlassContainer className="intro-style">
                        <Experience/>
                    </GlassContainer>
                </div>
                {/* Add more GlassContainer components as needed */}
            </Container>
        </div>
    );
}

export default GlassyWebsite;
