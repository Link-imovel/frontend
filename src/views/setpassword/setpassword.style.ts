import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 8%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;

export const Title = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  line-height: 21px;
`;
