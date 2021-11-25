import { colors } from '@theme/theme/default';
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
  background-color: ${({ color }) => color || colors.whiteGrey};
  box-shadow: 0px 5px 20px 8px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  border-radius: 8px;
  position: absolute;
  right: 140px;
  z-index: 1;
  @media ${({ theme: { device } }) => device.laptop.max} {
    right: 20px;
  }
`;

export const Wrapper = styled.div`
  max-width: 200px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  & + & {
    margin-top: 10px;
  }
`;

export const ItemContent = styled.div``;
