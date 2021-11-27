import styled from 'styled-components';

export const Container = styled.div<{ show: boolean }>`
  background-color: ${({ show }) =>
    show ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  position: fixed;
  z-index: ${({ show }) => (show ? '1' : '0')};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div:first-child {
    display: ${({ show }) => (show ? 'block' : 'none')};
  }
  @media ${({ theme: { device } }) => device.laptop.max} {
    padding: 8%;
  }
`;

export const Wrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.whiteGrey};
  width: 100%;
  max-width: 400px;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.medium};
`;

export const Content = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  grid-gap: 20px;
`;
