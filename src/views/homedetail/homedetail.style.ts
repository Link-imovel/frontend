import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 8%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  @media ${({ theme: { device } }) => device.laptop.max} {
    flex-direction: column;
  }
`;

export const FormContent = styled.div`
  flex: 1;
  margin: auto;
  display: flex;
  flex-direction: column;
  & > div:last-child {
    width: calc(100% - 413px);
    align-self: flex-end;
    @media ${({ theme: { device } }) => device.laptop.max} {
      width: 100%;
    }
  }
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
`;

export const Content = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'columnA columnB';
  column-gap: 20px;
  @media ${({ theme: { device } }) => device.laptop.max} {
    display: flex;
    flex-direction: column;
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

export const ImageDndContent = styled.div`
  flex: 1;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const styles = {
  A: css`
    grid-area: columnA;
    height: calc(100% - 98px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  B: css`
    grid-area: columnB;
    height: 470px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
};
