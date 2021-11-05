import styled from 'styled-components';

export const ClientContainer = styled.div`
  width: 1080px;
  padding: 9%;
  margin: auto;
  @media ${({ theme: { device } }) => device.laptop.max} {
    height: 100%;
    margin: 0;
  }
`;

export const ClientWrapper = styled.div`
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${({ theme: { device } }) => device.laptop.max} {
    height: 100%;
    width: 100%;
    & > div:last-child {
      width: 100%;
    }
  }
`;

export const ClientTitle = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  line-height: 21px;
`;

export const InputWrapper = styled.div`
  margin: 15px 0;
  height: 320px;
  display: flex;
  flex-direction: row;
  gap: 5%;
  @media ${({ theme: { device } }) => device.laptop.max} {
    display: flex;
    flex-direction: column;
    height: 100%;
    & > div > * {
      margin: 5px 0;
    }
  }
`;

export const InputsColumnOne = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputsColumnTwo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  flex: 1;
  background-image: url('images/background-image-generic.png');
  background-repeat: no-repeat;
  background-size: cover;
  @media ${({ theme: { device } }) => device.laptop.max} {
    display: none;
  }
`;
