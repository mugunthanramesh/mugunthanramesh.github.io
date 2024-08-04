// src/components/Experience.js
import React from 'react';
import {ExperienceItem} from "./experience-item";
import {ExperienceList} from "../../config/experience-list";
import styled from "styled-components";

export const Experience = () => {
    return (
        <ExperienceContainer>
            <div>
                {ExperienceList.map((item) => (
                    <ExperienceItem
                        title={item.title}
                        company={item.company}
                        date={item.date}
                        responsibility={item.responsibility}
                        tags={item.tags}
                    />
                ))}
            </div>
            <ResumeLink>
                <a href="/Mugunthan%20R.pdf">My Resume <span className="link-arrow">↗</span></a>
            </ResumeLink>
        </ExperienceContainer>
    );
}

const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ResumeLink = styled.a`
    color: rgba(225, 225, 225, 1);
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    padding-top: 10px;
    padding-left: 15px;
    
    a:hover {
        color: #61dafb;
    }
    
    a {
        text-decoration: none;
        color: white;
    }

    a .link-arrow {
        display: inline-block;
        transition: transform 0.3s ease;
    }

    a:hover .link-arrow {
        transform: translateY(-5px);
        color: #61dafb;
    }
`;
