// src/components/Projects.js
import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <div className="project-item">
                <h3>Ultrasonic and Camera Based Parking Assistant System (UCPAS)</h3>
                <p>Affiliated With: L&T and PSG Institute of Technology and Applied Research</p>
                <p>Deep Learning Based Parking Assistant system that finds the objects present in the surrounding of the car and maps them in the dashboard of the car.</p>
                <p>YOLOv3 was used to identify the objects and MATLAB was used to correlate the data from the ultrasonic sensors and camera.</p>
                <p>This is a prototype which will use to develop semi-autonomous vehicles.</p>
            </div>
        </section>
    );
}

export default Projects;
