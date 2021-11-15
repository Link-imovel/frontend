import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Wrapper = styled.div<{ type: 'dropdown' | 'input' }>`
  ${({ type }) => styles[type]}
`;

const styles = {
  dropdown: css`
    width: 160px;
  `,
  input: css`
    width: 400px;
  `,
};
