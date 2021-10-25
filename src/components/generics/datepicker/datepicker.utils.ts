import { DayDetails, MonthDetails } from './datepicker.type';

const LOCALE_TO_TRANSLATED_LABELS = {
  'en-US': {
    changeYear: 'Change year',
  },
  'pt-BR': {
    changeYear: 'Escolher ano',
  },
};

const ONE_DAY = 60 * 60 * 24 * 1000;

const TIMEZONE_OFFSET = new Date().getTimezoneOffset();

const DIFFERENCE_MINUTES_FROM_UTC =
  TIMEZONE_OFFSET < 0 ? TIMEZONE_OFFSET * -1 : TIMEZONE_OFFSET;

const DIFFERENCE_HOURS_FROM_UTC = DIFFERENCE_MINUTES_FROM_UTC / 60;

const DAYS_DIV_WIDTH = 'calc(100% / 7)';

const DEFAULT_MAX_YEAR = 2030;

const DEFAULT_MIN_YEAR = 1930;

const getLocalizedDays = (locale = 'en'): string[] => {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'narrow' });

  return [...((Array(7).keys() as unknown) as number[])].map((day) =>
    formatter.format(new Date(Date.UTC(2021, 5, day)))
  );
};

const getLocalizedMonths = (locale = 'en'): string[] => {
  const formatter = new Intl.DateTimeFormat(locale, { month: 'long' });

  return [...((Array(12).keys() as unknown) as number[])].map((monthIdx) =>
    formatter.format(new Date(Date.UTC(2021, monthIdx, 15, 0, 0)))
  );
};

const getLocalizedYear = (year: number, locale = 'en'): number => {
  const pivotDate = new Date(new Date().setFullYear(year));
  const dateParts = Intl.DateTimeFormat(locale).formatToParts(pivotDate);

  let localizedYear = year;
  dateParts.some((d): boolean | void => {
    if (d.type === 'year') {
      localizedYear = +d.value;
      return true;
    }
  });

  return localizedYear;
};

const getNumberOfDaysInMonth = (year: number, month: number): number => {
  return 40 - new Date(year, month, 40).getDate();
};

const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month).getDay();
};

const getDayDetails = (args: MonthDetails): DayDetails => {
  const { index, firstDay, month, year, numberOfDays, locale } = args;
  const date = index - firstDay;
  const day = index % 7;
  let prevMonth = month - 1;
  let prevYear = year;

  if (prevMonth < 0) {
    prevMonth = 11;
    prevYear--;
  }

  const prevMonthNumberOfDays = getNumberOfDaysInMonth(prevYear, prevMonth);
  const _date =
    (date < 0 ? prevMonthNumberOfDays + date : date % numberOfDays) + 1;
  const monthIndex = date < 0 ? -1 : date >= numberOfDays ? 1 : 0;
  const timestamp = new Date(year, args.month, _date, 0, 0, 0).getTime();

  return {
    date: _date,
    day,
    month: monthIndex,
    timestamp,
    label: getLocalizedDays(locale)[day],
  };
};

const getMonthDetails = (
  year: number,
  month: number,
  locale = 'en'
): Array<DayDetails> => {
  const firstDay = getFirstDayOfMonth(year, month);
  const numberOfDays = getNumberOfDaysInMonth(year, month);
  const monthDaysInfo = [];
  const rows = 6;
  let currentDay = null;
  let index = 0;
  const cols = 7;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      currentDay = getDayDetails({
        index,
        numberOfDays,
        firstDay,
        year,
        month,
        locale,
      });
      monthDaysInfo.push(currentDay);
      index++;
    }
  }

  return monthDaysInfo;
};

const getCurrentTimestamp = (customDate?: string): number =>
  customDate
    ? +new Date(customDate).setHours(0, 0, 0, 0)
    : +new Date().setHours(0, 0, 0, 0);

export {
  getCurrentTimestamp,
  getDayDetails,
  getLocalizedDays,
  getLocalizedMonths,
  getLocalizedYear,
  getNumberOfDaysInMonth,
  getMonthDetails,
  ONE_DAY,
  DIFFERENCE_MINUTES_FROM_UTC,
  DIFFERENCE_HOURS_FROM_UTC,
  DAYS_DIV_WIDTH,
  DEFAULT_MAX_YEAR,
  DEFAULT_MIN_YEAR,
  LOCALE_TO_TRANSLATED_LABELS,
};
