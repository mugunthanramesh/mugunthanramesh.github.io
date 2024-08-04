import React from 'react';
import styled from "styled-components";

export function Intro() {
    return (
        <IntroContainer>
            <section id="introduction" className="intro">
                <p>I am a <span>Software Development Engineer</span> with experience at <a href="https://alexa.com/">Amazon Alexa</a> and <a href="https://www.zoho.com/">Zoho Corporation</a>. At Amazon, he has worked on developing features for Alexa, including a share to phone application, scalable services for social feed, and an Elasticsearch-based search system for followable entities.</p>
                <p>Prior to that, at Zoho Corporation, he developed web-based features for <a href="https://www.zoho.com/vault/">Zoho Vault</a>, a password management tool. I have a Bachelor degree in <span>Electronics and Communication Engineering</span> and has completed various online certifications.</p>
                <p>He is an active contributor to <a href="https://medium.com/@mugunthanramesh">Medium</a> and an associate member of the Omdena India Chapter. During his internship at Amazon, I automated testing in the pipeline for a pricing service, and migrated the logs solution to columnar storage as part of the traceability project. His academic projects include a <a href="https://github.com/mugunthanramesh/ADAS">deep learning-based parking assistant system using YOLOv3 and sensor fusion techniques</a></p>
            </section>
            <br/>
            <ResumeLink>
                <a href="/Mugunthan%20R.pdf">My Resume <span className="link-arrow">↗</span></a>
            </ResumeLink>
        </IntroContainer>
    );
}

const IntroContainer = styled.div`
    color: rgba(225, 225, 225, 1);
    font-size: 18px;

    .intro p {
        color: rgba(255, 255, 255, 0.4);
    }
    
    .intro span {
        color: rgba(225, 225, 225, 1);
    }

    .intro a {
        color: rgba(225, 225, 225, 1);
        text-decoration: none;
    }
    
    .intro a:hover {
        color: #61dafb;
    }
`;

const ResumeLink = styled.a`
    color: rgba(225, 225, 225, 1);
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    
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