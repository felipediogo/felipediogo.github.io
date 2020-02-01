import styled from 'styled-components';
import media from './media';

const Section = styled.section`
  // min-height: 100vh;
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1000px;

  ${media.tablet`padding: 100px 0;`};
`;

export default Section;
