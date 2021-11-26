import styled from 'styled-components';

export const ButtonContainer = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 1;
`;

export const ButtonClose = styled.div`
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;
