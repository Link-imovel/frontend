import React from 'react';

import * as S from './card.style';
import { CardProps } from './card.type';

const Card = ({ children, size, onClick }: CardProps): JSX.Element => {
  return (
    <S.CardContainer size={size || 'small'} onClick={onClick}>
      {children}
    </S.CardContainer>
  );
};

export { Card };
