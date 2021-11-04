import React from 'react';

/**
 * This type defines input validation properies.
 *
 * @property {string} type  - Type of validation that will be checked in user inputs,
 * it can be either **Required**, **Match**, **NotBlank**, **OnlyLetters**, **OnlyNumber**
 * - Required: Data is required.
 * - Match: Data will be validated regarding a given validation function on "match".
 * - NotBlank: White-spaces in the beginning will not be accepted.
 * - OnlyLetters: Only letters will be accepted
 * - OnlyNumbers: Only numbers will be accepted
 *
 * @property {string} message - Message that should be displayed when validation fails.
 * @property {function} match - Validation function that will perform a custom validation.
 */
interface ValidatorProps {
  type: 'Required' | 'Match' | 'NotBlank' | 'OnlyLetters' | 'OnlyNumbers';
  message: string;
  match?: (value: unknown) => boolean;
}

interface ValidationStatus {
  valid: boolean;
  message?: string;
}

interface ValidationInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  radius?: 'none' | 'square';
  className?: string;
  validators?: Array<ValidatorProps>;
  icon?: JSX.Element;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
  onValidation?: (status: ValidationStatus) => void;
  invalid?: boolean;
  invalidMessage?: string;
}

export type { ValidationInputProps, ValidatorProps };
