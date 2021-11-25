import { Publication } from '@store/ducks/publications/publications.interface';
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
  views: boolean;
  functionalities: boolean;
  buttons?: {
    googleMap: {
      label?: string;
      size: 'small' | 'xsmall' | 'medium' | 'large' | 'default' | undefined;
    };
    visualize: {
      label?: string;
      size: 'small' | 'xsmall' | 'medium' | 'large' | 'default' | undefined;
    };
  };
  publication: Publication<string[]>;
  onClick?: React.MouseEventHandler<HTMLDivElement> & (() => void);
}

export type { CardProps };
