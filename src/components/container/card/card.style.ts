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

const direction = {
  small: 'column',
  normal: 'row',
};

export const CardContainer = styled.div<CardContainerProp>`
  display: flex;
  flex-direction: ${({ size }) => size && direction[size]};
  height: ${({ size }) => size && sizeMapper[size].height};
  width: ${({ size }) => size && sizeMapper[size].width};
  background-color: ${({ theme: { colors } }) => colors.lightGreyBlue};
  border-radius: 10px;
  cursor: pointer;
`;
