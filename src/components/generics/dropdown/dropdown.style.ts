import styled, { css } from 'styled-components';
import { ExpandMore } from '../icons/expandmore';
import { DropdownListItemProps, OpenStatusProps } from './dropdown.type';

const ContainerWrapper = styled.div`
  height: auto;
`;

const DropdownContainer = styled.div<OpenStatusProps>`
  border-radius: 8px;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.whiteGrey};
  color: ${({ theme: { colors } }) => colors.blackGrey};
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  padding-left: 0.8rem;
  padding-right: 1rem;
  padding-top: 1.8rem;
  position: relative;
  cursor: pointer;
  outline: 0 solid ${({ theme: { colors } }) => colors.whiteGrey};
  transition: outline-color 0.2s, outline-width 0.1s;
  outline: 0.125rem solid ${({ theme: { colors } }) => colors.blackGrey};

  ${({ disabled }) => disabled && { pointerEvents: 'none', opacity: '0.6' }};
`;

const DropdownInputLabel = styled.span``;

const DropdownInput = styled.div<OpenStatusProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${({ isOpen }) =>
    isOpen &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}
`;

const DropdownList = styled.ul<OpenStatusProps>`
  background-color: ${({ theme: { colors } }) => colors.whiteGrey};
  color: ${({ theme: { colors } }) => colors.blackGrey};
  border-radius: 8px;
  position: absolute;
  top: calc(100% + 3%);
  width: 100%;
  left: 0;
  list-style: none;
  flex-direction: column;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.2s ease-in-out;
  z-index: 3;

  ${({ isOpen, hasContent, theme: { colors } }) =>
    isOpen &&
    hasContent && {
      height: 'fit-content',
      overflow: 'auto',
      overflowX: 'hidden',
      boxShadow: `2px 5px 8px 1px ${colors.blackGrey}`,
    }};
`;

const DropdownListItem = styled.li<DropdownListItemProps>`
  padding-top: 1.3rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
  cursor: pointer;

  ${({ isSelected, theme: { colors } }) =>
    isSelected && { backgroundColor: colors.orange }};
`;

const StyledArrowDown = styled(ExpandMore)`
  right: 1rem;
  top: 45%;
`;

const Label = styled.label`
  color: #575757;
  font-size: 0.875rem;
  top: 0.5rem;
  left: 0.8rem;
  position: absolute;
`;

export {
  ContainerWrapper,
  DropdownContainer,
  DropdownInputLabel,
  DropdownInput,
  DropdownList,
  DropdownListItem,
  StyledArrowDown,
  Label,
};
