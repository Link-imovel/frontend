import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme: { colors } }) => colors.whiteGrey};
`;

const Body = styled.div<{ hasHeight?: boolean }>`
  ${({ hasHeight }) => (hasHeight ? 'height: auto;' : 'min-height: 100vh;')}
  display: flex;
  flex-direction: row;
`;

export { Container, Body };
