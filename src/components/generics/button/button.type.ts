import React from 'react';

export type ButtonProps = {
  variant: 'primary' | 'secondary';
  label?: string;
  size?: 'small' | 'medium' | 'large';
  background?: string;
  icon?: React.ReactElement;
  iconReverse?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement> & (() => void);
  selected?: boolean;
};
