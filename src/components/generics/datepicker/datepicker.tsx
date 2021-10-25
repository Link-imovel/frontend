import React from 'react';

import { ChevronLeft } from '../icons/chevronleft';
import { ChevronRight } from '../icons/chevronright';

import * as S from './datepicker.style';
import { CalendarProps } from './datepicker.type';
import {
  getMonthDetails,
  getCurrentTimestamp,
  DEFAULT_MAX_YEAR,
  DEFAULT_MIN_YEAR,
  getLocalizedYear,
  getLocalizedDays,
  getLocalizedMonths,
  LOCALE_TO_TRANSLATED_LABELS,
} from './datepicker.utils';

const DatePicker = ({
  onSelect,
  selectedDate,
  maxDate,
  minDate,
  startDateAt,
  multiSelect,
  inline,
  locale,
}: CalendarProps): React.ReactElement => {
  const defaultLocale = locale || 'pt-BR';
  const translations = LOCALE_TO_TRANSLATED_LABELS[defaultLocale];
  const initialDate = React.useMemo(
    () => (startDateAt ? new Date(startDateAt) : new Date()),
    [startDateAt]
  );
  const currentDate = selectedDate ? new Date(selectedDate) : initialDate;
  const [year, setYear] = React.useState(currentDate.getFullYear());
  const [month, setMonth] = React.useState(currentDate.getMonth());
  const [monthDetails, setMonthDetails] = React.useState(
    getMonthDetails(year, month, defaultLocale)
  );
  const [showPicker, setShowPicker] = React.useState<boolean>(false);
  const currentTimestamp = getCurrentTimestamp(selectedDate);
  const [selectedDays, setSelectedDays] = React.useState<number[]>([
    currentTimestamp,
  ]);

  const ref = React.useRef<HTMLDivElement>(null);
  const refDropdown = React.useRef<HTMLDivElement>(null);
  const refPicker = React.useRef<HTMLDivElement>(null);

  const [monthList, setMonthList] = React.useState<string[]>([]);
  const [dayOfWeekList, setDayOfWeekList] = React.useState<string[]>([]);

  React.useEffect(() => {
    const localizedDays = getLocalizedDays(defaultLocale);
    setDayOfWeekList(localizedDays);

    const localizedMonths = getLocalizedMonths(defaultLocale);
    setMonthList(localizedMonths);

    if (selectedDate) {
      setSelectedDays([getCurrentTimestamp(selectedDate)]);
    }
    setMonthDetails(getMonthDetails(year, month, defaultLocale));
    document.addEventListener('mousedown', toggle);
    return () => {
      document.removeEventListener('mousedown', toggle);
    };
  }, [year, month, showPicker, selectedDate, defaultLocale]);

  const toggle = (e: MouseEvent): void => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setShowPicker(false);
    }
  };

  const updateMonth = (by: number): void => {
    const newValue = month + by;
    if (newValue < 0) {
      setMonth(11);
      setYear(year - 1);
      return;
    }

    if (newValue > 11) {
      setMonth(0);
      setYear(year + 1);
      return;
    }

    setMonth(newValue);
  };

  const updateSelectedDays = React.useCallback(
    (dayTimestamp: number): void => {
      if (!selectedDays.includes(dayTimestamp)) {
        setSelectedDays(
          multiSelect ? [...selectedDays, dayTimestamp] : [dayTimestamp]
        );

        if (onSelect && !multiSelect) {
          const date = new Date(dayTimestamp);
          onSelect(
            date.getFullYear() +
              '-' +
              String(date.getMonth() + 1).padStart(2, '0') +
              '-' +
              String(date.getDate()).padStart(2, '0')
          );
        }

        if (onSelect && multiSelect) {
          const dates: string[] = [];
          [dayTimestamp, ...selectedDays].map((timestamp) => {
            const date = new Date(timestamp);
            dates.push(
              date.getFullYear() +
                '-' +
                String(date.getMonth() + 1).padStart(2, '0') +
                '-' +
                String(date.getDate()).padStart(2, '0')
            );
          });
          onSelect(dates);
        }
      }

      if (selectedDays.includes(dayTimestamp)) {
        setSelectedDays(selectedDays.filter((e) => e !== dayTimestamp));

        if (onSelect && multiSelect) {
          const dates: string[] = [];
          const filteredDates = selectedDays.filter((e) => e !== dayTimestamp);
          filteredDates.map((timestamp) => {
            const date = new Date(timestamp);
            dates.push(
              date.getFullYear() +
                '-' +
                String(date.getMonth() + 1).padStart(2, '0') +
                '-' +
                String(date.getDate()).padStart(2, '0')
            );
          });
          onSelect(dates);
        }

        if (onSelect && !multiSelect) {
          const date = new Date(dayTimestamp);
          onSelect(
            date.getFullYear() +
              '-' +
              String(date.getMonth() + 1).padStart(2, '0') +
              '-' +
              String(date.getDate()).padStart(2, '0')
          );
        }
      }
    },
    [multiSelect, onSelect, selectedDays]
  );

  const isSelected = React.useCallback(
    (day): boolean => {
      return selectedDays.includes(day.timestamp);
    },
    [selectedDays]
  );

  const isToday = React.useCallback((date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() == today.getDate() &&
      date.getMonth() == today.getMonth() &&
      date.getFullYear() == today.getFullYear()
    );
  }, []);

  const openPicker = React.useCallback(() => {
    setShowPicker(!showPicker);
    refDropdown.current?.scrollTo(0, refPicker.current!.offsetTop - 40 || 0);
  }, [showPicker]);

  const renderInlineHeader = (): React.ReactElement => {
    return (
      <S.Header id="calendar-header">
        <S.YearDisplay>
          <S.YearControls>
            <S.YearLabel>
              <b>{monthList[month] || ''}</b>{' '}
              {getLocalizedYear(year, defaultLocale)}
            </S.YearLabel>
            <ChevronLeft onClick={() => updateMonth(-1)} />
            <ChevronRight onClick={() => updateMonth(+1)} />
          </S.YearControls>
        </S.YearDisplay>
      </S.Header>
    );
  };

  const renderHeader = (): React.ReactElement => {
    return (
      <S.Header>
        <S.YearDisplay>
          <S.YearControls>
            <span>
              <b>{getLocalizedYear(year, defaultLocale)}</b>
            </span>
            <span onClick={openPicker}>{translations.changeYear}</span>
            <ChevronLeft onClick={() => setYear(year - 1)} />
            <ChevronRight onClick={() => setYear(year + 1)} />
          </S.YearControls>
        </S.YearDisplay>

        <S.MonthDisplay id="calendar-month-display">
          <S.MonthControls>
            <ChevronLeft onClick={() => updateMonth(-1)} />
            <S.MonthLabel>{monthList[month] || ''}</S.MonthLabel>
            <ChevronRight onClick={() => updateMonth(+1)} />
          </S.MonthControls>
        </S.MonthDisplay>
      </S.Header>
    );
  };

  const renderBody = (): React.ReactElement => {
    return (
      <S.Body id="calendar-body">
        {dayOfWeekList.map((label = '', idx) => (
          <S.DayLabel key={idx}>{label}</S.DayLabel>
        ))}

        {monthDetails.map((day, index) => {
          if (day.month !== 0) {
            return React.Fragment;
          }

          let disabledClass = false;
          if (
            (maxDate && day.timestamp > maxDate) ||
            (minDate && day.timestamp < minDate)
          ) {
            disabledClass = true;
          }

          const date = new Date(day.timestamp);

          return (
            <S.DayNumber
              key={index}
              dayOfWeek={date.getDate() === 1 ? date.getDay() : 0}
              isSelected={isSelected(day)}
              isDisabled={disabledClass}
              isToday={isToday(date)}
              onClick={() => updateSelectedDays(day.timestamp)}
            >
              <span>{String(day.date).padStart(2, '0')}</span>
            </S.DayNumber>
          );
        })}
      </S.Body>
    );
  };

  const renderYears = (): React.ReactElement => {
    const maxYear = maxDate
      ? new Date(maxDate).getFullYear()
      : DEFAULT_MAX_YEAR;
    const minYear = minDate
      ? new Date(minDate).getFullYear()
      : DEFAULT_MIN_YEAR;
    const years: number[] = [];

    for (let i = minYear; i <= maxYear; i++) {
      years.push(i);
    }

    return (
      <>
        {years.map((date: number) => (
          <S.YearPickerLine
            ref={date === year ? refPicker : null}
            onClick={() => {
              setYear(date);
              setShowPicker(!showPicker);
            }}
            key={date}
            isSelected={year === date}
          >
            {getLocalizedYear(date, defaultLocale)}
          </S.YearPickerLine>
        ))}
      </>
    );
  };

  return (
    <S.Container id="calendar-container" ref={ref}>
      {inline ? renderInlineHeader() : renderHeader()}
      {renderBody()}
      <S.YearPicker id="calendar-year-picker" show={showPicker}>
        <S.YearPickerHeader>
          {getLocalizedYear(year, defaultLocale)}
        </S.YearPickerHeader>
        <S.YearPickerBody ref={refDropdown}>{renderYears()}</S.YearPickerBody>
      </S.YearPicker>
    </S.Container>
  );
};

export { DatePicker };
