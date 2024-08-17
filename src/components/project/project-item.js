import styled from "styled-components";
import React from "react";

export const ProjectItem = ({ image, title, description }) => {
    return (
        <ProjectItemContainer>
            <ProjectItemLeft>
                <img src={image} alt="ADAS"/>
            </ProjectItemLeft>
            <ProjectItemRight>
            <h3 className="highlight">{title}</h3>
                <p className="lowlight">{description}</p>
            </ProjectItemRight>
        </ProjectItemContainer>
)}


const ProjectItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    
    .lowlight {
        color: rgba(255, 255, 255, 0.7);
    }
    
    &:hover {
        background: rgba( 255, 255, 255, 0.01);
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }
    
    &:hover .highlight {
        color: #61dafb;
    }
`;

const ProjectItemLeft = styled.div`
    width: 20%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProjectItemRight = styled.div`
  width: 80%;
  padding: 20px;
`;