import styled, { css } from 'styled-components';

import { ButtonProps } from './button.type';

const sizes = {
  small: {
    height: '49px',
    width: '89px',
  },
  medium: {
    height: '49px',
    width: '128px',
  },
  large: {
    height: '49px',
    width: '350px',
  },
};

const getSize = (size?: 'small' | 'medium' | 'large') => {
  const { height, width } = sizes[size || 'medium'];
  return `
      width: ${width};
      height: ${height};
      max-height: ${height};
    `;
};

export const Button = styled.div<ButtonProps>`
  ${({ variant }) => styles[variant]}
  ${({ size }) => getSize(size)}
  line-height: ${({ theme: { text } }) => text.sizes.medium};
  color: ${({ color, theme: { colors } }) => color || colors.white};
  border-radius: 8px;
  font-weight: ${({ theme: { text } }) => text.weight.medium};
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Selected = styled.div`
  position: absolute;
  left: 0;
  background-color: ${({ theme: { colors } }) => colors.orange};
`;

export const IconContainer = styled.div<{ reverse?: boolean }>`
  ${({ reverse }) => (reverse ? 'margin-right' : 'margin-left')}: 22px;
`;

export const Label = styled.span``;

const styles = {
  primary: css<ButtonProps>`
    background-color: ${({ background, theme }) =>
      background || theme.colors.orange};
    border: none;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  `,
  secondary: css<ButtonProps>`
    background-color: ${({ background }) => background || 'transparent'};
    border: 1px solid #ffffff;
    transition: color 0.2s, border 0.2s;
    &:hover {
      color: #ff8300;
      border: 1px solid ${({ theme: { colors } }) => colors.orange};
    }
  `,
};
