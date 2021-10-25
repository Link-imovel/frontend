import styled, { css } from 'styled-components';

import {
  DayNumberProps,
  YearPickerProps,
  YearPickerLineProps,
} from './datepicker.type';
import { DAYS_DIV_WIDTH } from './datepicker.utils';

const Container = styled.div`
  background: ${({ theme: { colors } }) => colors.white};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: hidden;
  font-size: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  line-height: 16px;
  font-size: 12px;
`;

const Body = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  color: ${({ theme: { colors } }) => colors.blackGrey};
  font-size: 12px;
`;

const YearDisplay = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  flex-flow: row;
  height: 40px;
  background-color: ${({ theme: { colors } }) => colors.orange};
  color: ${({ theme: { colors } }) => colors.white};
  padding: 0 16px;
`;

const YearControls = styled.div`
  display: flex;
  width: 193px;
  height: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  flex: 1;

  & span:nth-child(1) {
    margin-right: 8px;
    color: white;
    font-size: 16px;
  }

  & span:nth-child(2) {
    font-size: 12px;
    font-weight: 400;
    margin-right: 20px;
    cursor: pointer;
  }

  & svg:first-of-type {
    margin-right: 31.88px;
  }

  & > svg {
    cursor: pointer;
  }
`;

const YearLabel = styled.span`
  margin-right: 20px;
  text-transform: capitalize;
`;

const MonthDisplay = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 40px;
  background-color: ${({ theme: { colors } }) => colors.orange};
  color: ${({ theme: { colors } }) => colors.white};
`;

const MonthControls = styled.div`
  width: 160px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;

  & span {
    font-weight: bold;
    margin: 0 20px;
  }

  & > svg {
    cursor: pointer;
  }
`;

const MonthLabel = styled.span`
  min-width: 62px;
  text-align: center;
  text-transform: capitalize;
`;

const DaySize = css`
  width: ${DAYS_DIV_WIDTH};
  padding: 8px 0;
  text-align: center;
`;

const DayLabel = styled.div`
  ${DaySize};
  font-weight: bold;
`;

const DayNumber = styled.div<DayNumberProps>`
  cursor: pointer;

  ${DaySize};
  margin-left: calc((100% / 7) * ${({ dayOfWeek }) => dayOfWeek});
  ${({ isDisabled }) =>
    isDisabled && {
      pointerEvents: 'none',
      opacity: '0.4',
    }}

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${({ theme: { colors } }) => colors.orange};
      font-weight: bold;
      color: ${({ theme: { colors } }) => colors.white};
    `}
  }

  ${({ isToday, isSelected, theme: { colors } }) =>
    isToday &&
    css`
      position: relative;
      font-style: normal;
      color: ${isSelected ? colors.white : colors.orange};
      font-weight: 600;
    `}
  }
`;

const YearPicker = styled.div<YearPickerProps>`
  position: absolute;
  background: ${({ theme: { colors } }) => colors.white};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: all 0.5s ease;
  inset: 0;
  overflow: hidden;
`;

const YearPickerHeader = styled.div`
  height: 40px;
  background: ${({ theme: { colors } }) => colors.orange};
  padding-left: 16px;
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const YearPickerBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 85%;

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const YearPickerLine = styled.div<YearPickerLineProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 40px;
  background: ${({ isSelected, theme: { colors } }) =>
    isSelected ? colors.lightGreyBlue : colors.white};
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  color: ${({ theme: { colors } }) => colors.blackGrey};
  justify-content: center;
  cursor: pointer;
`;

const Reset = styled.button`
  font-style: normal;
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.white};
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 900;
`;

export {
  Container,
  Header,
  Body,
  MonthDisplay,
  YearDisplay,
  YearControls,
  MonthControls,
  YearLabel,
  MonthLabel,
  DayLabel,
  DayNumber,
  YearPicker,
  YearPickerHeader,
  YearPickerBody,
  YearPickerLine,
  Reset,
};
