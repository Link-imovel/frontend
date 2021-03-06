import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 485px;
  max-width: 100%;
  padding: 0 125px;
  background-image: url('images/background-image-header.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const HeadWrapper = styled.div`
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MainWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.span`
  color: ${({ theme: { colors } }) => colors.whiteGrey};
  font-size: 36px;
`;

export const MainSubtitle = styled.span`
  margin-bottom: 79px;
  color: ${({ theme: { colors } }) => colors.whiteGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
`;
