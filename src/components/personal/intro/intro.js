import React from 'react';
import styled from "styled-components";

export function Intro() {
    return (
        <IntroContainer>
            <section id="introduction">
                <p>I am a <span>Software Development Engineer</span> with experience at <a href="https://alexa.com/">Amazon Alexa</a> and <a href="https://www.zoho.com/">Zoho Corporation</a>. At Amazon, he has worked on developing features for Alexa, including a share to phone application, scalable services for social feed, and an Elasticsearch-based search system for followable entities.</p>
                <p>Prior to that, at Zoho Corporation, he developed web-based features for <a href="https://www.zoho.com/vault/">Zoho Vault</a>, a password management tool. I have a Bachelor degree in <span>Electronics and Communication Engineering</span> and has completed various online certifications.</p>
                <p>He is an active contributor to <a href="https://medium.com/@mugunthanramesh">Medium</a> and an associate member of the Omdena India Chapter. During his internship at Amazon, I automated testing in the pipeline for a pricing service, and migrated the logs solution to columnar storage as part of the traceability project. His academic projects include a <a href="https://github.com/mugunthanramesh/ADAS">deep learning-based parking assistant system using YOLOv3 and sensor fusion techniques</a></p>
            </section>
        </IntroContainer>
)
    ;
}

const IntroContainer = styled.div`
    color: rgba(225, 225, 225, 1);
    font-size: 18px;

    p {
        color: rgba(255, 255, 255, 0.4);
    }
    
    span {
        color: rgba(225, 225, 225, 1);
    }

    a {
        color: rgba(225, 225, 225, 1);
        text-decoration: none;
    }
    
    a:hover {
        color: #61dafb;
    }
`;
