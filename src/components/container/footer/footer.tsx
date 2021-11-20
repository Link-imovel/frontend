import React from 'react';

import * as S from './footer.style';
import { FooterProps } from './footer.type';

const Footer = ({ label }: FooterProps): JSX.Element => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Label>{label}</S.Label>
      </S.Wrapper>
    </S.Container>
  );
};

export { Footer };
