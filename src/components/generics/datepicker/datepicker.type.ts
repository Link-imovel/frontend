type Locale = 'en-US' | 'pt-BR';

interface CalendarProps {
  selectedDate?: string;
  maxDate?: number;
  minDate?: number;
  startDateAt?: number;
  multiSelect?: boolean;
  inline?: boolean;
  showResetButton?: boolean;
  onSelect?: (val: string | string[]) => void;
  locale?: Locale;
}

interface DayDetails {
  date: number;
  day: number;
  month: number;
  timestamp: number;
  label: string;
}

interface MonthDetails {
  index: number;
  numberOfDays: number;
  firstDay: number;
  year: number;
  month: number;
  locale?: string;
}

interface YearPickerLineProps {
  isSelected: boolean;
}

interface YearPickerProps {
  show?: boolean;
}

interface DayNumberProps {
  isSelected: boolean;
  isDisabled: boolean;
  dayOfWeek: number;
  isToday: boolean;
}

export type {
  CalendarProps,
  DayDetails,
  MonthDetails,
  YearPickerLineProps,
  YearPickerProps,
  DayNumberProps,
  Locale,
};
