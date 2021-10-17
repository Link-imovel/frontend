import React from 'react';

import * as S from './logo.styles';
import { LogoProps } from './logo.type';

const Logo = ({ icon, onClick }: LogoProps): JSX.Element => {
  return <S.Logo onClick={onClick}>{icon}</S.Logo>;
};

export { Logo };
