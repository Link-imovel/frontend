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
  grid-gap: 30px;
  & > div:first-child {
    display: none;
  }
  @media ${({ theme: { device } }) => device.laptop.max} {
    grid-gap: 5px;
    padding: 2% 4%;
    & > div:first-child {
      display: block;
    }
  }
`;

export const MenuContainer = styled.div<{
  cards: boolean;
  table: boolean;
  admin: boolean;
  user: boolean;
  show: boolean;
}>`
  ${({ cards, table, admin, user }) =>
    getMenuContainer(cards, table, admin, user)}
  grid-gap: 15px;
  @media ${({ theme: { device } }) => device.laptop.max} {
    position: absolute;
    padding: 25px;
    width: 100%;
    grid-gap: 10px;
    inset: 0;
    background-color: ${({ theme: { colors } }) => colors.whiteGrey};
    transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.5s ease-in;
    & {
      overflow-x: hidden;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & > div:last-child {
    display: none;
  }
  @media ${({ theme: { device } }) => device.laptop.max} {
    & > div:last-child {
      display: block;
    }
  }
`;

export const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    margin-bottom: 20px;
  }
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div:last-child {
    align-self: center;
  }
`;

const styles = {
  'menu-table': css`
    width: 290px;
    height: 580px;
    display: flex;
    flex-direction: column;
  `,
  'menu-cards-user': css`
    width: 290px;
    height: 720px;
    display: flex;
    flex-direction: column;
  `,
  'menu-cards-admin': css`
    width: 290px;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  'menu-cards-client': css`
    width: 290px;
    height: 440px;
    display: flex;
    flex-direction: column;
  `,
};
