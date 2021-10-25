import { ValidatorProps } from '@components/generics/input/input.type';

interface ValidationStatus {
  valid: boolean;
  message?: string;
}

interface CalendarInputProps {
  selectedDate: string;
  label: string;
  name: string;
  startDate?: number;
  minDate?: number;
  maxDate?: number;
  maxLength?: number;
  validators?: Array<ValidatorProps>;
  placeholder?: string;
  activeCalendar?: boolean;
  onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
  onValidation?: (status: ValidationStatus) => void;
  handleValue?: (value: string) => void;
  handleOnChange?: (value: string) => string;
  handleOnSelect?: (value: string) => string;
}

export type { CalendarInputProps };
