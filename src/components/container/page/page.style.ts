import styled from 'styled-components';

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: ${({ theme: { colors } }) => colors.fadedGrey};
`;

const Body = styled.div`
  height: auto;
  width: auto;
`;

export { Container, Body };
