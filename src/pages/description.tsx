import React from 'react';
import { GetStaticProps } from 'next';

import DescriptionContainer from '@containers/description';
import { DesciptionProps } from '@views/description/description.type';

const Description = (props: DesciptionProps): React.ReactElement => (
  <DescriptionContainer {...props} />
);

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      user: 'John',
      title: 'Apartamento 2 E 3 Quartos no Noroeste - Vivant',
      subtitle: 'SQNW 303, Bloco A, Noroeste, Brasilia',
      value: 'R$ 1.020,132',
      text:
        'Apartamento e cobertura com plantas de 113 a 229 m², com 3 quartos à venda no Noroeste, Brasília/DF. O Essentia possui apartamentos lineares e coberturas duplex na melhor localização de Brasília.',
      buttons: {
        BLogo: {},
        BLogin: {},
      },
      place: {
        location: {
          latitude: 51.505,
          longitude: -0.09,
        },
      },
      overview: {
        bathroom: 1,
        bedroom: 3,
        garage: 2,
        livingroom: 2,
        kitchen: 1,
        laundry: 1,
        constructionYear: '13/02/2006',
        typeImovel: 'Apartamento',
        areaImovel: '113 a 229m',
      },
      isLogged: true,
    },
  };
};

export default Description;
