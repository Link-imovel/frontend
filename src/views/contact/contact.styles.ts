import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 1020px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactWrapper = styled.div`
  max-width: 500px;
  height: 465px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContactTitle = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  line-height: 21px;
`;

export const InputWrapper = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  flex: 1;
  background-image: url('images/background-image-generic.png');
  background-repeat: no-repeat;
  background-size: cover;
`;
