import React from 'react';

import * as S from './button.style';
import { ButtonProps } from './button.type';

const Button = ({
  variant,
  label,
  size,
  background,
  icon,
  iconReverse,
  onClick,
  selected,
}: ButtonProps): JSX.Element => {
  const renderIcon = React.useCallback(
    (icon: JSX.Element, iconReverse: boolean) => (
      <S.IconContainer reverse={iconReverse}>{icon}</S.IconContainer>
    ),
    []
  );

  return (
    <S.Button
      variant={variant}
      size={size}
      background={background || '#FF8300'}
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
