import styled from 'styled-components';

export const GenericContainer = styled.div`
  @media ${({ theme: { device } }) => device.laptop.max} {
    width: 100%;
    padding: 5% 0;
  }

  height: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GenericWrapper = styled.div``;

export const GenericTitle = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  line-height: 21px;
`;

export const InputWrapper = styled.div`
  @media ${({ theme: { device } }) => device.laptop.max} {
    display: flex;
    flex-direction: column;

    & > div > * {
      margin: 5px 0;
    }
  }

  @media ${({ theme: { device } }) => device.laptop.min} {
    min-height: 338px;
    margin-bottom: 15px;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-areas: 'columnA columnB';
    grid-gap: 2%;
  }
`;

export const InputsColumnOne = styled.div`
  grid-area: columnA;
  display: flex;
  flex-direction: column;
  & > div {
    margin: 10px 0;
  }
`;

export const InputsColumnTwo = styled.div`
  height: calc(100% - 75px);
  grid-area: columnB;
  display: flex;
  flex-direction: column;
  & > div {
    margin: 10px 0;
  }
`;

export const ImageContainer = styled.div`
  @media ${({ theme: { device } }) => device.laptop.max} {
    display: none;
  }

  width: 40%;
  flex: 1;
  background-image: url('images/background-image-generic.png');
  background-repeat: no-repeat;
  background-size: cover;
`;
