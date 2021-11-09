import React from 'react';

import * as S from './button.style';
import { ButtonProps } from './button.type';

const Button = ({
  variant,
  label,
  size,
  radius,
  background,
  justifyContent,
  color,
  icon,
  iconReverse,
  onClick,
  selected,
  disabled,
}: ButtonProps): JSX.Element => {
  const renderIcon = React.useCallback(
    (icon: JSX.Element, iconReverse: boolean) => (
      <S.IconContainer variant={variant} reverse={iconReverse}>
        {icon}
      </S.IconContainer>
    ),
    [variant]
  );

  return (
    <S.Button
      variant={variant}
      size={size}
      radius={radius}
      background={background}
      justifyContent={justifyContent}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {selected && <S.Selected />}
      {icon && iconReverse && renderIcon(icon, !!iconReverse)}
      <S.Label>{label}</S.Label>
      {icon && !iconReverse && renderIcon(icon, !!iconReverse)}
    </S.Button>
  );
};

export { Button };
