import React from 'react';

import { Card } from '@components/generics/card';
import { Card as CardContainer } from '@components/container/card';

import * as S from './geolocationcard.styles';
import { CoordinateProps, GeolocationProps } from './geolocationcard.type';

const GeolocationCard = ({ cards }: GeolocationProps): React.ReactElement => {
  const getLocation = React.useCallback((): CoordinateProps | null => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      return {
        latitude: coords.latitude,
        longitude: coords.longitude,
      };
    });
    return null;
  }, []);

  return (
    <S.Container>
      {getLocation()}
      {cards.length
        ? cards.map((props, index) => <Card key={index} {...props} />)
        : [...Array(4)].map((_, i) => (
            <CardContainer size="small" key={i} onClick={() => {}} />
          ))}
    </S.Container>
  );
};

export { GeolocationCard };
