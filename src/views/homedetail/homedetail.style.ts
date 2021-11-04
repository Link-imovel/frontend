import styled from 'styled-components';

export const HomeDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media ${({ theme: { device } }) => device.laptop.max} {
    display: flex;
    flex-direction: column;
  }
`;

export const HomeDetailWrapper = styled.div`
  width: 1080px;
  height: 1020px;
  padding: 9%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div:last-child {
    align-self: flex-end;
  }
`;

export const HomeDetailNavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HomeDetailTitle = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  line-height: 21px;
`;

export const InputWrapper = styled.div`
  margin: 15px 0;
  height: 460px;
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
  height: 83%;
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

export const HomeDetailContainerImages = styled.div`
  flex: 1;
  border-left: 1px solid #000;
  padding: 9%;
`;

export const HomeDetailImagesTitle = styled.div`
  margin-top: 124px;
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  line-height: 21px;
`;
