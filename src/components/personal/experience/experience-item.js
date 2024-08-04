import React from "react";
import styled from "styled-components";


export const ExperienceItem = ({title, company, date, responsibility, tags}) => {

    return (
        <ExperienceItemContainer>
            <ExperienceItemLeft>
                <p className="lowlight">{date}</p>
            </ExperienceItemLeft>
            <ExperienceItemRight>
                <h3 className="highlight">{title}, {company}</h3>
                <p className="lowlight">{responsibility}</p>
                {tags.map(tag => (
                    <ExperienceItemTags>
                        {tag}
                    </ExperienceItemTags>
                ))}
            </ExperienceItemRight>
        </ExperienceItemContainer>
    )
}

const ExperienceItemLeft = styled.div`
    width: 20%;
    padding: 20px;
`;

const ExperienceItemRight = styled.div`
  width: 80%;
  padding: 20px;
`;

const ExperienceItemContainer = styled.div`
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

const ExperienceItemTags = styled.div`
    background: rgba(94,234,211, 0.13);
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 14px;
    display: inline-block;
    margin-right: 5px;
    color: rgba(94,234,211, 1);
    -webkit-backdrop-filter: blur( 4px );
`;
