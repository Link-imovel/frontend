import React from 'react';

import * as S from './footer.style';
import { FooterProps, FooterHref } from './footer.type';

const Footer = ({ label, links }: FooterProps): JSX.Element => {
  const renderLinks = React.useCallback(
    (links: FooterHref[]): JSX.Element[] => {
      return links.map(({ label, url }, i) => (
        <S.FooterHref key={i} href={url} target="_blank">
          {label}
        </S.FooterHref>
      ));
    },
    []
  );

  return (
    <S.FooterContainer>
      <S.FooterWrapper>
        <S.FooterLabel>{label}</S.FooterLabel>
        {links && renderLinks(links)}
      </S.FooterWrapper>
    </S.FooterContainer>
  );
};

export { Footer };
