import styled from 'styled-components';
import { ModalContainerProps } from './modal.type';

const ModalBackground = styled.div`
  position: fixed;
  align-items: center;
  justify-content: center;
  inset: 0px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99999;
`;

const Container = styled.div<ModalContainerProps>`
  position: absolute;
  display: flex;
  height: 80%;
  width: 80%;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  overflow: hidden;
  background-color: ${({ backgroundColor }) => backgroundColor || 'inherit'};
`;

export { ModalBackground, Container };
