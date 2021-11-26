import styled from 'styled-components';

export const Container = styled.div<{ show: boolean }>`
  & > div:last-child {
    display: ${({ show }) => (show ? 'block' : 'none')};
  }
`;

export const UserContent = styled.div`
  width: 100px;
`;

export const MenuContent = styled.div`
  margin-top: 10px;
  padding: 20px;
  width: 250px;
  background-color: ${({ theme: { colors } }) => colors.whiteGrey};
  box-shadow: 0px 5px 20px 8px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  border-radius: 8px;
  position: absolute;
  right: 140px;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: 110px;
    width: 20px;
    height: 20px;
    background-color: ${({ theme: { colors } }) => colors.whiteGrey};
    transform: rotate(45deg);
  }
  @media ${({ theme: { device } }) => device.laptop.max} {
    right: 20px;
  }
`;

export const Wrapper = styled.div`
  max-width: 200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const ItemContent = styled.div``;
