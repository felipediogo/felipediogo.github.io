import React from "react";
import styled from "styled-components";

import Section from "#/styles/Section";
// import mixin from "#/styles/mixin";
// import media from "#/styles/media";

const Container = styled(Section)`
  min-height: 100vh;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  div:first-child {
    margin-right: 100px;
  }
`;

const Experience = () => {
  return (
    <Container>
      <h1 className="header">Experience</h1>
      <Wrapper>
        <div>
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
            <li>Javascript</li>
            <li>React</li>
            <li>Node</li>
            <li>Java</li>
            <li>Spring</li>
          </ul>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Experience;
