import styled from 'styled-components';

const Container = styled.div`
  & > svg {
    vertical-align: middle;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.small};
`;

export { Container, Anchor };
