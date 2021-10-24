import React from 'react';

export type ButtonProps = {
  variant:
    | 'primary'
    | 'secondary'
    | 'primary-circle'
    | 'primary-square'
    | 'secondary-square'
    | 'transparent';
  label?: string;
  size?: 'small' | 'xsmall' | 'medium' | 'large';
  radius?: 'circle' | 'square' | 'middleSquare';
  background?: string;
  justifyContent?: string;
  color?: string;
  icon?: React.ReactElement;
  iconReverse?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement> & (() => void);
  selected?: boolean;
};
