import styled from 'styled-components';

export const ContactContainer = styled.div`
  height: 516px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContactTitle = styled.span`
  align-self: center;
  font-size: ${({ theme: { text } }) => text.sizes.medium};
  color: ${({ theme: { colors } }) => colors.greyBlue};
`;
