import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Wrapper = styled.div<{ type: 'dropdown' | 'input' }>`
  ${({ type }) => styles[type]}
`;

const styles = {
  dropdown: css`
    width: 160px;
    @media ${({ theme: { device } }) => device.laptop.max} {
      width: 100%;
    }
  `,
  input: css`
    width: 400px;
    @media ${({ theme: { device } }) => device.laptop.max} {
      width: 100%;
    }
  `,
};
