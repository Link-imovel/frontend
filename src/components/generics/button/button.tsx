import React from 'react';

import * as S from './button.style';
import { ButtonProps } from './button.type';

const Button = ({
  variant,
  label,
  size,
  radius,
  background,
  color,
  icon,
  iconReverse,
  onClick,
  selected,
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
      color={color}
      onClick={onClick}
    >
      {selected && <S.Selected />}
      {icon && iconReverse && renderIcon(icon, !!iconReverse)}
      <S.Label>{label}</S.Label>
      {icon && !iconReverse && renderIcon(icon, !!iconReverse)}
    </S.Button>
  );
};

export { Button };
