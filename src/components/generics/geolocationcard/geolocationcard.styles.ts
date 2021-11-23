import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  grid-gap: 20px;
  @media ${({ theme: { device } }) => device.laptop.max} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
