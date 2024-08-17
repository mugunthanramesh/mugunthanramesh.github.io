// src/components/Projects.js
import React from 'react';
import styled from "styled-components";
import {ProjectList} from "../../config/project-list";
import {ProjectItem} from "./project-item";
import {SectionHeader} from "../Container";

const Projects = () => {
    return (
        <section id="projects">
            <ProjectContainer>
                <SectionHeader>Projects</SectionHeader>
                <div>
                    {
                        ProjectList.map((item) => (
                            <ProjectItem
                                image={item.imageSrc}
                                title={item.projectName}
                                description={item.description}
                            />
                        ))
                    }
                </div>
            </ProjectContainer>
        </section>
    );
}

export default Projects;


const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;