import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 8%;
`;

export const Title = styled.div`
  margin: 10px 0;
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  @media ${({ theme: { device } }) => device.laptop.max} {
    text-align: center;
  }
`;
