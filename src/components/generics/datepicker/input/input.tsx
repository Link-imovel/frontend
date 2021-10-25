import React from 'react';

import { Calendar } from '@components/generics/icons/calendar';
import { Input } from '@components/generics/input';
import { DatePicker } from '../datepicker';

import * as S from './input.style';
import { CalendarInputProps } from './input.type';

const DatePickerInput = ({
  selectedDate,
  label,
  name,
  startDate,
  minDate,
  maxDate,
  maxLength,
  validators,
  placeholder,
  activeCalendar,
  onBlur,
  onValidation,
  handleValue,
  handleOnChange,
  handleOnSelect,
}: CalendarInputProps): React.ReactElement => {
  const [showCalendar, setShowCalendar] = React.useState<boolean>(false);
  const [
    selectedCalendarDate,
    setSelectedCalendarDate,
  ] = React.useState<string>(
    selectedDate ? selectedDate.replace(/[-]/g, '/') : ''
  );
  const [valueCalendarDate, setValueCalendarDate] = React.useState<string>(
    new Date(selectedCalendarDate).toLocaleDateString('pt-BR')
  );
  const ref = React.useRef<HTMLDivElement>(null);

  const toggle = (e: MouseEvent): void => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setShowCalendar(false);
    }
  };

  const formatDate = React.useCallback((value: string): string => {
    let valueFormated = '';
    const numbers = value.replace(/\D/g, '');
    const char: Record<number, string> = { 2: '/', 4: '/' };
    for (let i = 0; i < numbers.length; i++) {
      valueFormated += (char[i] || '') + numbers[i];
    }
    return valueFormated;
  }, []);

  React.useEffect(() => {
    document.addEventListener('mousedown', toggle);
    return () => {
      document.removeEventListener('mousedown', toggle);
    };
  }, [showCalendar]);

  const clearValidationErrors = React.useCallback((): void => {
    const inputDiv = document.querySelector('.date-input');
    const input = inputDiv?.querySelector('input');
    if (input) {
      input.setAttribute('invalid', '');
    }
    const inputErrorDiv = inputDiv?.lastElementChild;
    if (inputErrorDiv) {
      inputErrorDiv.innerHTML = '';
    }
  }, []);

  const handleDate = React.useCallback(
    (value: string, onSelect = false) => {
      let newValue = value;
      if (handleOnSelect && onSelect) {
        newValue = handleOnSelect(value);
        setValueCalendarDate(new Date(newValue).toLocaleDateString('pt-BR'));
        setSelectedCalendarDate(newValue);
      }

      if (handleOnChange && !onSelect) {
        newValue = handleOnChange(value);
        setValueCalendarDate(new Date(newValue).toLocaleDateString('pt-BR'));
        setSelectedCalendarDate(newValue);
      }

      if (!handleOnChange && !handleOnSelect) {
        if (onSelect) {
          const dateParts = newValue.split('-');
          newValue = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
          setValueCalendarDate(new Date(newValue).toLocaleDateString('pt-BR'));
          setSelectedCalendarDate(newValue);
        }

        if (!onSelect) {
          setShowCalendar(false);
          newValue = formatDate(value);
          if (newValue.length === 10) {
            const dateParts = newValue.split('/');
            newValue = `${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`;
            const valueofDate = +new Date(newValue.replace(/[-]/g, '/'));
            if (isNaN(valueofDate)) newValue = '';
            if (maxDate && valueofDate >= maxDate) newValue = '';
            if (minDate && valueofDate <= minDate) newValue = '';
            setValueCalendarDate(
              new Date(newValue).toLocaleDateString('pt-BR')
            );
            setSelectedCalendarDate(newValue);
          }
        }
      }

      setValueCalendarDate(
        newValue.length === 10
          ? new Date(newValue).toLocaleDateString('pt-BR')
          : newValue
      );
      setSelectedCalendarDate(
        newValue.length === 10
          ? new Date(newValue).toLocaleDateString('en-US')
          : newValue
      );
      setShowCalendar(false);

      if (onValidation) {
        clearValidationErrors();
        onValidation({ valid: !!newValue, message: '' });
      }

      if (handleValue) handleValue(newValue);
    },
    [
      clearValidationErrors,
      formatDate,
      handleOnChange,
      handleOnSelect,
      handleValue,
      maxDate,
      minDate,
      onValidation,
    ]
  );

  React.useEffect(() => {
    if (!showCalendar) return;

    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [showCalendar]);

  const handleBlur = React.useCallback(
    (event: React.FocusEvent<HTMLInputElement>): void => {
      if (selectedCalendarDate.length < 10) {
        setSelectedCalendarDate('');
      }

      onBlur && onBlur(event);
    },
    [onBlur, selectedCalendarDate.length]
  );

  return (
    <S.ContainerWrapper ref={ref}>
      <S.IconWrapper>
        <Input
          id={name}
          label={label}
          name={name}
          className="date-input"
          maxLength={maxLength || 10}
          validateOnBlur={false}
          onFocus={() => setShowCalendar(!showCalendar)}
          placeholder={placeholder}
          type="text"
          value={valueCalendarDate}
          onChange={({ target: { value } }) => handleDate(value)}
          validators={validators}
          onValidation={onValidation}
          onBlur={handleBlur}
        />
        <Calendar width="22px" height="22px" />
      </S.IconWrapper>
      {showCalendar || activeCalendar ? (
        <DatePicker
          key={name}
          selectedDate={selectedCalendarDate.replace('-', '/')}
          startDateAt={startDate}
          maxDate={maxDate}
          onSelect={(value) => handleDate(value as string, true)}
          inline={true}
        />
      ) : null}
    </S.ContainerWrapper>
  );
};

export { DatePickerInput };
