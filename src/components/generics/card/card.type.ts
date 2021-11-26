import React from 'react';

import { Publication } from '@store/models/publications/publications.interface';

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
