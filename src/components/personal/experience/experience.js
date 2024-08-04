// src/components/Experience.js
import React from 'react';
import {ExperienceItem} from "./experience-item";
import {ExperienceList} from "../../../config/experience-list";
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
            <br/>
        </ExperienceContainer>
    );
}

const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
