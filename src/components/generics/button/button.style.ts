import styled, { css } from 'styled-components';

import { ButtonProps } from './button.type';

const sizes = {
  small: {
    height: '40px',
    width: '40px',
  },
  xsmall: {
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
  default: {
    height: '49px',
    width: '100%',
  },
};

const getSize = (
  size?: 'small' | 'xsmall' | 'medium' | 'large' | 'default'
) => {
  const { height, width } = sizes[size || 'medium'];
  return `
      width: ${width};
      height: ${height};
      max-height: ${height};
    `;
};

const border = {
  circle: '50px',
  square: '8px',
  middleSquare: '0px 8px 8px 0px',
};

const getRadius = (radius?: 'circle' | 'square' | 'middleSquare') => {
  return `
    border-radius: ${border[radius || 'square']};
  `;
};

export const Button = styled.div<ButtonProps>`
  ${({ variant }) => styles[variant]}
  ${({ size }) => getSize(size)}
  ${({ radius }) => getRadius(radius)}
  line-height: ${({ theme: { text } }) => text.sizes.medium};
  color: ${({ color, theme: { colors } }) => color || colors.white};
  font-weight: ${({ theme: { text } }) => text.weight.medium};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  position: relative;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : '')};
  ${({ disabled, theme: { colors } }) =>
    disabled &&
    css`
      background-color: ${colors.blackGrey};
    `};
  opacity: ${({ disabled }) => (disabled ? '0.4' : 'none')};
`;

export const Selected = styled.div`
  position: absolute;
  left: 0;
  background-color: ${({ theme: { colors } }) => colors.orange};
`;

export const IconContainer = styled.div<{
  reverse?: boolean;
  variant: string;
}>`
  ${({ reverse, variant }) =>
    variant.match(
      /^(?!(primary[-]circle|primary-square|secondary-square|transparent)).*$/g
    )
      ? reverse
        ? 'margin-right: 22px'
        : 'margin-left: 22px'
      : 'margin: 0'};
`;

export const Label = styled.span``;

const styles = {
  primary: css<ButtonProps>`
    background-color: ${({ background, theme: { colors } }) =>
      background || colors.orange};
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  `,
  'primary-circle': css<ButtonProps>`
    background-color: ${({ background, theme: { colors } }) =>
      background || colors.green};
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  `,
  'primary-square': css<ButtonProps>`
    background-color: ${({ background, theme: { colors } }) =>
      background || colors.orange};
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  `,
  secondary: css<ButtonProps>`
    background-color: ${({ background }) => background || 'transparent'};
    border: 1px solid ${({ theme: { colors } }) => colors.whiteGrey};
    transition: color 0.2s, border 0.2s;
    &:hover {
      color: ${({ theme: { colors } }) => colors.orange};
      border: 1px solid ${({ theme: { colors } }) => colors.orange};
    }
  `,
  'secondary-square': css<ButtonProps>`
    background-color: ${({ background }) => background || 'transparent'};
    border: 1px solid ${({ theme: { colors } }) => colors.whiteGrey};
    color: ${({ theme: { colors } }) => colors.whiteGrey};
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  `,
  transparent: css`
    background-color: transparent;
    border: none;
  `,
};
