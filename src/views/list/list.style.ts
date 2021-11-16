import styled, { css } from 'styled-components';

const getMenuContainer = (
  cards: boolean,
  table: boolean,
  admin: boolean,
  user: boolean
) => {
  if (table) {
    return styles['menu-table'];
  }
  if (cards && admin) {
    return styles['menu-cards-admin'];
  }
  if (cards && user) {
    return styles['menu-cards-user'];
  }
  if (cards && (!admin || !user)) {
    return styles['menu-cards-client'];
  }
};

export const Container = styled.div`
  width: 100%;
  padding: 2% 8%;
  display: flex;
  flex-direction: row;
  column-gap: 30px;
`;

export const MenuContainer = styled.div<{
  cards: boolean;
  table: boolean;
  admin: boolean;
  user: boolean;
}>`
  ${({ cards, table, admin, user }) =>
    getMenuContainer(cards, table, admin, user)}
`;

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const Description = styled.p`
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

export const Line = styled.div``;

export const Title = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

export const Quantity = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

export const Content = styled.div`
  flex: 1;
  box-shadow: 0px 5px 20px 8px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme: { colors } }) => colors.whiteGrey};
  border-radius: 8px;
  padding: 60px;
`;

const styles = {
  'menu-table': css`
    width: 290px;
    height: 580px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  'menu-cards-user': css`
    width: 290px;
    height: 720px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  'menu-cards-admin': css`
    width: 290px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  'menu-cards-client': css`
    width: 290px;
    height: 440px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
};
