import { Publication } from '@store/models/publications/publications.interface';
import React from 'react';

interface ButtonsProps {
  BCircleWhatsApp: {
    callback?: () => void;
  };
  BNavigation: {
    typeSize: 'small' | 'medium';
    label?: string;
    callback?: () => void;
  };
  BContact: {
    label: string;
    callback?: () => void;
  };
  BEdit?: {
    callback?: () => void;
  };
  BDelete?: {
    callback?: () => void;
  };
}

interface CardProps {
  variant: 'primary' | 'secondary' | 'ternary';
  size?: 'small' | 'normal';
  publication: Publication<string[]>;
  buttons: ButtonsProps;
  onClick?: React.MouseEventHandler<HTMLDivElement> & (() => void);
}

export type { CardProps };
