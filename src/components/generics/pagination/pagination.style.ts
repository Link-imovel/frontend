import styled from 'styled-components';

export const Container = styled.div`
  width: 205px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  width: 100px;
`;

export const Label = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.medium};
`;

export const Number = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.medium};
`;
