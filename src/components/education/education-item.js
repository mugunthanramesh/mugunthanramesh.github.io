import styled from "styled-components";
import React from "react";

export const EducationItem = ({ degree, school, date,  location, cgpa}) => {

    return (
        <EducationItemContainer>
            <EducationItemLeft>
                <p className="lowlight">{date}</p>
            </EducationItemLeft>
            <EducationItemRight>
                <h3 className="highlight">{degree}</h3>
                <p className="lowlight">{school}, {location}<br/><span>{cgpa}</span></p>
            </EducationItemRight>
        </EducationItemContainer>
    );
}

const EducationItemLeft = styled.div`
    width: 20%;
    padding: 20px;
`;

const EducationItemRight = styled.div`
    width: 80%;
    padding: 20px;
`;

const EducationItemContainer = styled.div`
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