import styled from 'styled-components';

export const Container = styled.div`
  height: 485px;
  padding: 0 8%;
  background-image: url('images/background-image-header.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

export const HeadContent = styled.div`
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  color: ${({ theme: { colors } }) => colors.whiteGrey};
  font-size: ${({ theme: { text } }) => text.sizes.xlarge};
  @media ${({ theme: { device } }) => device.laptop.max} {
    font-size: ${({ theme: { text } }) => text.sizes.large};
  }
`;

export const Subtitle = styled.span`
  margin-bottom: 79px;
  color: ${({ theme: { colors } }) => colors.whiteGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  @media ${({ theme: { device } }) => device.laptop.max} {
    font-size: ${({ theme: { text } }) => text.sizes.small};
  }
`;
