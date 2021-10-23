import styled from 'styled-components';
import { CardContainerProp } from './card.type';

const sizeMapper = {
  small: {
    height: '352px',
    width: '269px',
  },
  normal: {
    height: '265px',
    width: '708px',
  },
};

export const CardContainer = styled.div<CardContainerProp>`
  height: ${({ size }) => size && sizeMapper[size].height};
  width: ${({ size }) => size && sizeMapper[size].width};
  background-color: ${({ theme: { colors }}) => colors.lightGreyBlue};
  border-radius: 10px;
`;
