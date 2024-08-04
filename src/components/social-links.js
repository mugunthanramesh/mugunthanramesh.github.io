import styled from "styled-components";

export function SocialLinks() {
    return (
        <SocialContainer>
            <a href="https://github.com/mugunthanramesh/"><img src="/github-mark.svg" alt="Github"/></a>
            <a href="https://www.linkedin.com/in/mugunthan-ramesh/"><img src="/linkedin.png" alt="Linkedin"/></a>
            <a href="mailto:mugunthanramesh6@gmail.com"><img src="/gmail-logo.png" alt="Email Me"/></a>
        </SocialContainer>
    )
}

const SocialContainer = styled.div`
    position: fixed;
    padding: 20px 0;
    bottom: 5%;
    left: 18%;
    z-index: 1000;

    a img {
        height: 30px;
        margin: 0 10px;
    }
`;