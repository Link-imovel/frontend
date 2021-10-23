import React from "react";

import * as S from './card.style';
import { CardProps } from "./card.type";

const Card = ({ children, size }: CardProps ): JSX.Element => {
  return (
    <S.CardContainer size={size || 'small'}>
      {children}
    </S.CardContainer>
  );
};

export { Card };
