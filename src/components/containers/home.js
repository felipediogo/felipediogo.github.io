import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Section from "#/styles/Section";
import mixin from "#/styles/mixin";
import media from "#/styles/media";

const Container = styled(Section)`
  ${mixin.flexCenter}

  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 100vh;

  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;

const Hero = ({ data }) => {
  return (
    <Container>
      <h1 class="big-title">Hey there!</h1>
      <h1 class="title">I'm Felipe, and I build applications for the web.</h1>
      <p>
        I'm a software engineer from Brazil, currently moving to Sydney. I aim to build highly
        designed applications tailored to customer's needs.
      </p>
    </Container>
  );
};

export default Hero;
