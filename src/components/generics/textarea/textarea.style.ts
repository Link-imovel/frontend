import styled from 'styled-components';

import { TextAreaProps } from './textarea.type';

const TextArea = styled.textarea<Pick<TextAreaProps, 'withBorder'>>`
  width: 100%;
  padding: 12px;
  outline: unset;
  font-size: 1rem;
  resize: vertical;
  min-height: 128px;
  box-sizing: border-box;
  color: ${({ theme: { colors } }) => colors.blackGrey};
  background-color: ${({ theme: { colors } }) => colors.white};
  border: ${({ withBorder, theme: { colors } }) =>
    withBorder ? `1px solid ${colors.lightGrey};` : 'none;'};
`;

export { TextArea };
