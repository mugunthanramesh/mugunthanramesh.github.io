// src/components/Experience.js
import React from 'react';

const Experience = () => {
    return (
        <section id="experience">
            <div className="experience-item">
                <h3>Software Development Engineer</h3>
                <p>April 2022 - Present</p>
                <p>Amazon Software Development Centre, Chennai</p>
                <ul>
                    <li>Working on LLM based features to make Alexa more conversational and personalised.</li>
                    <li>Designed and Developed share to phone application which enables customers to send the alexa content to their mobile phones.</li>
                    <li>Worked on developing scalable services (with ARest and RPC API) for Social Feed in Alexa. The services were able to handle 2000 TPS.</li>
                    <li>Implemented Elastic search based search for followable entities for customers to follow and unfollow via voice. This helped users to follow over million entities.</li>
                    <li>Designed and Implemented reactive system that will deliver the feed updates to multiple channels across alexa like Multimodal device Home, Widgets and notification updates.</li>
                    <li>Developed a platform in Alexa, which enables customers to share content.</li>
                </ul>
            </div>
            <div className="experience-item">
                <h3>Member of Technical Staff</h3>
                <p>June 2020 - April 2022</p>
                <p>Zoho Corporation, Chennai</p>
                <ul>
                    <li>Developed web-based features for Zoho Vault, a password management tool, focusing on generation of reports for customers based on the weak passwords, password access.</li>
                    <li>Spearheaded the creation of a cross-platform command-line utility for Zoho Vault, facilitating secure password management across Windows, Mac, and Linux environments.</li>
                    <li>Played a key role in testing and debugging efforts, identifying and resolving issues to deliver robust and reliable software solutions to end-users.</li>
                </ul>
            </div>
            <div className="experience-item">
                <h3>Software Development Engineer Intern</h3>
                <p>January 2020 - June 2020</p>
                <p>Amazon Development Centre, Chennai</p>
                <ul>
                    <li>Automated testing in the pipeline for a pricing service, increasing the developer velocity of the team. This reduced the time to production by 50% eliminating the need for manual QA.</li>
                    <li>Migrated the logs solution to columnar storage as part of the traceability project, resulting in a 30% reduction in team costs while enhancing data processing efficiency and scalability.</li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;
