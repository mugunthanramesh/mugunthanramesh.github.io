import styled, {keyframes} from "styled-components";

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

export const Container = styled.div`
    width: 80%;
    background-size: cover;
    background-position: center;
    animation: ${glassAnimation} 15s ease infinite;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: row; /* Stack items horizontally */
    margin: 0 auto;
`;

export const LeftContainer = styled.div`
    width: 40%;
    padding: 20px;
    position: sticky;
    top: 0;
    left: 0;
`;

export const RightContainer = styled.div`
    width: 60%;
    padding: 20px;
    overflow-y: auto;
`;
