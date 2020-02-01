import React from "react";
import styled from "styled-components";

import Selfie from "#/components/image";
import Section from "#/styles/Section";
import mixin from "#/styles/mixin";
import media from "#/styles/media";

const Container = styled(Section)`
  position: relative;
`;

const Wrapper = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  ${mixin.flexBetween}
  ${media.tablet`flex-direction: column;`};
`;

const About = () => {
  return (
    <Container>
      <h1 className="header">About</h1>
      <Wrapper>
        <div style={{ width: "60%", maxWidth: "480px" }}>
          <p className="about">
            Hey, so I'm a Software developer, with meaningful experience with software engineering
            and working with DevOps principles and developing self-sufficient teams through agile
            methods. I’m really passionate about technologies and the incredible things we can do
            with them. Throughout my life, I’ve had the opportunity to work and share knowledge with
            amazing people who have helped me to create well designed, scalable, accessible and
            trustworthy products.
          </p>
          <p className="about">
            I've been working with Software since 2007 and I've been all around (backend /
            frontend), nowadays I'm working mainly with frontend, the technologies that I'm
            currently using is:
          </p>
          <ul>
            <li>Javascript (ES6+)</li>
            <li>React</li>
            <li>Node</li>
            <li>Java</li>
            <li>Spring</li>
          </ul>
        </div>
        <Selfie style={{ width: "40%", position: "relative", margin: "0 auto" }} />
      </Wrapper>
    </Container>
  );
};

export default About;
