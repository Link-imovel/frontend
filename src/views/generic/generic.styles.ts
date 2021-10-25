import styled from 'styled-components';

export const GenericContainer = styled.div`
  width: 1420px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GenericWrapper = styled.div`
  max-width: 730px;
  height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GenericTitle = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  line-height: 21px;
`;

export const InputWrapper = styled.div`
  min-width: 750px;
  min-height: 338px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'columnA columnB';
  grid-gap: 45px;
`;

export const InputsColumnOne = styled.div`
  grid-area: columnA;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputsColumnTwo = styled.div`
  height: calc(100% - 75px);
  grid-area: columnB;
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
