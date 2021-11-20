import styled from 'styled-components';

export const Container = styled.div`
  height: 516px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${({ theme: { device } }) => device.laptop.max} {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  @media ${({ theme: { device } }) => device.laptop.max} {
    & > div {
      width: 100%;
    }
  }
`;

export const Title = styled.span`
  align-self: center;
  font-size: ${({ theme: { text } }) => text.sizes.medium};
  color: ${({ theme: { colors } }) => colors.greyBlue};
`;
