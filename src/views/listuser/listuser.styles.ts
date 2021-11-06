import styled from 'styled-components';

export const ListUserContainer = styled.div`
  height: inherit;
  width: 100%;
  padding: 55px 75px;
  display: flex;
  flex-direction: row;
  gap: 4%;
`;

export const ListUserMenuWrapper = styled.div`
  height: 581px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ListUserWrapper = styled.div`
  flex: 1;
  box-shadow: 0px 5px 20px 8px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme: { colors } }) => colors.whiteGrey};
  border-radius: 8px;
  padding: 75px;
  & > table {
    margin-top: 25px;
  }
`;

export const ListUserQuantity = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  line-height: 21px;
`;

export const ListUserDescription = styled.p`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  max-width: 264px;
`;

export const ListUserMenuTitle = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  line-height: 21px;
`;
