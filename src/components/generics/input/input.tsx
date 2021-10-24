import React from 'react';

import * as S from './input.style';
import { ValidationInputProps, ValidatorProps } from './input.type';

const InputRef: React.ForwardRefRenderFunction<
  HTMLInputElement,
  ValidationInputProps
> = (
  {
    label,
    icon,
    validators,
    onChange,
    onBlur,
    onValidation,
    validateOnBlur,
    validateOnChange = true,
    className = '',
    invalid,
    invalidMessage,
    ...props
  }: ValidationInputProps,
  ref
): React.ReactElement => {
  const [validationState, setValidationState] = React.useState<{
    valid: boolean;
    message?: string;
  }>({ valid: false });
  const [error, setError] = React.useState('');
  validateOnBlur =
    validateOnBlur === undefined || validateOnBlur === null
      ? true
      : validateOnBlur;

  const checkValidity = (
    value: string,
    validators: ValidatorProps[]
  ): string => {
    let message = '';
    let gotValidationError = false;

    validators.forEach((validator) => {
      if (!gotValidationError) {
        switch (validator.type) {
          case 'Required': {
            message = !value ? validator.message : '';
            gotValidationError = !value;
            break;
          }
          case 'Match': {
            const isValid = !!(validator.match && validator.match(value));
            message = !isValid ? validator.message : '';
            gotValidationError = !isValid;
            break;
          }
          case 'NotBlank': {
            const isValid = !/^\s+$/.test(value);
            message = !isValid ? validator.message : '';
            gotValidationError = !isValid;
            break;
          }
          case 'OnlyLetters': {
            const isValid =
              value.trim().length == 0 || /^[ a-zA-Z]+$/.test(value);
            message = !isValid ? validator.message : '';
            gotValidationError = !isValid;
            break;
          }
          case 'OnlyNumbers': {
            const isValid = value.trim().length == 0 || /^\d+$/.test(value);
            message = !isValid ? validator.message : '';
            gotValidationError = !isValid;
            break;
          }
        }
      }
    });

    onValidation &&
      setValidationState({ valid: message ? false : true, message });

    return message;
  };

  React.useEffect(() => {
    if (
      invalid !== undefined &&
      (ref as React.MutableRefObject<HTMLInputElement>)?.current
    ) {
      setValidationState({ valid: !invalid, message: invalidMessage || '' });
      (ref as React.MutableRefObject<HTMLInputElement>)?.current?.setAttribute(
        'invalid',
        `${invalid}`
      );
      setError(invalid ? (invalidMessage as string) : '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invalid, invalidMessage]);

  React.useEffect(() => {
    onValidation &&
      onValidation({
        valid: validationState?.valid,
        message: validationState?.message,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validationState?.message, validationState?.valid]);

  const validate = (value: string): string => {
    if (validators?.length) {
      const errorMessage = checkValidity(value, validators);
      setError(errorMessage);
      return errorMessage;
    }

    return '';
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    onChange && onChange(event);

    if (validators?.length && validateOnChange) {
      const errorMessage = validate(value);
      event.target.setAttribute('invalid', `${!!errorMessage}`);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    onBlur && onBlur(event);

    if (validators?.length && validateOnBlur) {
      const errorMessage = validate(value);
      event.target.setAttribute('invalid', `${!!errorMessage}`);
    }
  };

  return (
    <S.Wrapper className={className}>
      {label && <S.Label htmlFor={props.id}>{label}</S.Label>}
      <input onChange={handleChange} {...props} onBlur={handleBlur} ref={ref} />
      {icon && <S.Icon>{icon}</S.Icon>}
      <S.Error>{error}</S.Error>
    </S.Wrapper>
  );
};

const Input = React.forwardRef(InputRef);

export { Input };
