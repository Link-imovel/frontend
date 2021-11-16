import { colors } from '@theme/theme/default';
import styled from 'styled-components';

export const Container = styled.div<{ color?: string }>`
  height: 49px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 22px;
  }
  span {
    color: ${({ color }) => color || colors.blackGrey};
  }
`;
