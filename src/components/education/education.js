// src/components/Education.js
import React from 'react';
import styled from "styled-components";
import {EducationList} from "../../config/education-list";
import {EducationItem} from "./education-item";

const Education = () => {
    return (
        <section id="education">
            <ExperienceContainer>
                {EducationList.map((education) => (
                    <EducationItem
                        school={education.school}
                        degree={education.degree}
                        date={education.date}
                        cgpa={education.cgpa}
                        location={education.location}
                    />
                ))}
            </ExperienceContainer>
        </section>
    );
}

export default Education;

const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;