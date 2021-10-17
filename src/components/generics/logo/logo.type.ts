import React from 'react';

export type LogoProps = {
  icon: React.ReactElement;
  onClick: React.MouseEventHandler<HTMLDivElement> & (() => void);
};
