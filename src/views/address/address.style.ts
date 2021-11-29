import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const FormContent = styled.div`
  width: 1025px;
  padding: 8%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: ${({ theme: { text } }) => text.sizes.large};
  line-height: 21px;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'columnA columnB';
  & > div:last-child {
    width: 100%;
  }
  column-gap: 20px;
  @media ${({ theme: { device } }) => device.laptop.max} {
    display: flex;
    flex-direction: column;
  }
  & > div:last-child {
    margin-top: 20px;
  }
`;

export const Wrapper = styled.div<{ column: 'A' | 'B' }>`
  ${({ column }) => styles[column]};
  @media ${({ theme: { device } }) => device.laptop.max} {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > div > * {
      margin: 5px 0;
    }
  }
`;

export const ImageContent = styled.div`
  flex: 1;
  background-image: url('images/background-image-generic.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

const styles = {
  A: css`
    grid-area: columnA;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  B: css`
    grid-area: columnB;
    height: 182px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
};
