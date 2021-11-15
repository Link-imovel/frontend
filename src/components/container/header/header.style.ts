import styled from 'styled-components';

export const Container = styled.div`
  height: 485px;
  padding: 2% 8%;
  background-image: url('images/background-image-header.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

export const HeadContent = styled.div`
  height: 80px;
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
  margin-top: 20px;
  color: ${({ theme: { colors } }) => colors.whiteGrey};
  font-size: ${({ theme: { text } }) => text.sizes.xlarge};
`;

export const Subtitle = styled.span`
  margin-bottom: 40px;
  color: ${({ theme: { colors } }) => colors.whiteGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
`;
