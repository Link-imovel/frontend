import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme: { colors } }) => colors.whiteGrey};
`;

const Body = styled.div`
  @media ${({ theme: { device } }) => device.tablet.min} {
    height: inherit;
    width: inherit;
  }
  display: flex;
  flex-direction: row;
`;

export { Container, Body };
