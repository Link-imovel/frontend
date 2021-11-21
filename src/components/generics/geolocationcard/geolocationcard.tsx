import React from 'react';

import { Card } from '@components/generics/card';

import * as S from './geolocationcard.styles';
import { CoordinateProps, GeolocationProps } from './geolocationcard.type';

const GeolocationCard = ({ cards }: GeolocationProps): React.ReactElement => {
  const getLocation = React.useCallback((): CoordinateProps | null => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      console.log({ coords });
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
      {cards.map((props, index) => (
        <Card key={index} {...props} />
      ))}
    </S.Container>
  );
};

export { GeolocationCard };
