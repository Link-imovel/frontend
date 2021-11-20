import styled, { css } from 'styled-components';

import { CardProps } from '@components/container/card/card.type';

const sizeMapper = {
  small: {
    height: '209px',
    width: '269px',
  },
  normal: {
    height: '265px',
    width: '464px',
  },
};

const margin = {
  primary: '19px',
  secondary: '113px',
  ternary: '18px',
};

const getMargin = (
  variant: 'primary' | 'secondary' | 'ternary' | undefined
) => {
  if (variant === undefined) return null;
  return `
    margin-right: ${margin[variant || 'primary']};
  `;
};

export const Body = styled.div<CardProps>`
  height: ${({ size }) => size && sizeMapper[size].height};
  width: ${({ size }) => size && sizeMapper[size].width};
`;

export const Wrapper = styled.div<{
  sizePadding?: string;
}>`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ sizePadding }) =>
    sizePadding?.match(/^(?!(small)).*$/g) ? 'padding:20px' : 'padding:14px'};
  box-sizing: border-box;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Title = styled.span<{
  sizeWidth?: string;
}>`
  ${({ sizeWidth }) =>
    sizeWidth?.match(/^(?!(small)).*$/g) ? 'width:152px' : 'width:120px'};
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme: { colors } }) => colors.greyBlue};
`;

export const Address = styled.span<{
  sizeWidth?: string;
}>`
  ${({ sizeWidth }) =>
    sizeWidth?.match(/^(?!(small)).*$/g) ? 'width:152px' : 'width:120px'};
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

export const Content = styled.span<{
  sizeWidth?: string;
}>`
  ${({ sizeWidth }) =>
    sizeWidth?.match(/^(?!(small)).*$/g) ? 'width:110px' : 'width:0px'};
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: ${({ theme: { colors } }) => colors.greyBlue};
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 13px;
  }
`;

export const Value = styled.span<{
  sizeWidth?: string;
}>`
  ${({ sizeWidth }) =>
    sizeWidth?.match(/^(?!(small)).*$/g) ? 'width:152px' : 'width:120px'};
  margin-top: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

export const Location = styled.span<{
  sizeWidth?: string;
}>`
  ${({ sizeWidth }) =>
    sizeWidth?.match(/^(?!(small)).*$/g) ? 'width:152px' : 'width:120px'};
  margin-top: 6px;
  font-size: 13px;
  line-height: 15px;
  color: ${({ theme: { colors } }) => colors.greyBlue};
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 13px;
  line-height: 15px;
  color: ${({ theme: { colors } }) => colors.greyBlue};
`;

export const IconContent = styled.div<{
  sizeWidth?: string;
  variant: 'primary' | 'secondary';
}>`
  ${({ sizeWidth }) =>
    sizeWidth?.match(/^(?!(small)).*$/g) ? 'width:132px' : 'width:120px'};
  ${({ variant }) => styles[variant]};
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  line-height: 15px;
`;

export const Info = styled.span`
  color: ${({ theme: { colors } }) => colors.blackGrey};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContent = styled.div<{
  type: 'edit' | 'delete' | 'navigation' | 'default';
  margin?: 'primary' | 'secondary' | 'ternary';
}>`
  ${({ type }) => styles[type]};
  ${({ margin }) => getMargin(margin)};
`;

const styles = {
  primary: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-right: 13px;
    }
  `,
  secondary: css`
    width: 150px;
    padding-top: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-right: 13px;
    }
    color: ${({ theme: { colors } }) => colors.greyBlue};
  `,
  edit: css`
    margin-right: 1px;
  `,
  delete: css`
    margin-right: 17px;
  `,
  navigation: css`
    margin-right: 9px;
  `,
  default: css``,
};
