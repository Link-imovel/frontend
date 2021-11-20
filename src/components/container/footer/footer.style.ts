import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2% 8%;
  width: 100%;
  height: 90px;
  background-color: inherit;
  @media ${({ theme: { device } }) => device.laptop.max} {
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.colors.blackGrey};
`;

export const Label = styled.label`
  font-weight: ${({ theme }) => theme.text.weight.medium};
  font-size: ${({ theme }) => theme.text.sizes.small};
`;
