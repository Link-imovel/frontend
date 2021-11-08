import styled, { css } from 'styled-components';

export const ListAnuncementContainer = styled.div`
  height: inherit;
  width: 100%;
  padding: 55px 75px;
  display: flex;
  flex-direction: row;
  gap: 4%;
`;

export const ListAnuncementMenuTitle = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  line-height: 21px;
`;

export const Line = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.lightGrey};
`;

export const ListAnuncementDescription = styled.p`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  max-width: 264px;
`;

export const ListAnuncementMenuWrapper = styled.div<{
  typePermission: 'adm' | 'user' | 'anonymous';
}>`
  ${({ typePermission }) => styles[typePermission]}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ListAnuncementWrapper = styled.div`
  flex: 1;
  box-shadow: 0px 5px 20px 8px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme: { colors } }) => colors.whiteGrey};
  border-radius: 8px;
  padding: 75px;
`;

export const ListAnuncementQuantity = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  line-height: 21px;
`;

const styles = {
  adm: css`
    height: 100%;
  `,
  user: css`
    height: 720px;
  `,
  anonymous: css`
    height: 520px;
  `,
};
