import styled from 'styled-components';
import { GalleryContainerProps } from './gallery.type';

const Container = styled.div<GalleryContainerProps>`
  display: flex;
  max-height: 522px;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  background-color: ${({ backgroundColor }) => backgroundColor || 'inherit'};
`;

export { Container };
