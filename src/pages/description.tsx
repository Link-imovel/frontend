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
      home: {
        type: 'Apartamento',
        ref: 'Proximo do Condor',
        totalArea: 124.2,
        value: 1230.23,
        room: 1,
        bedroom: 3,
        bathroom: 2,
        kitchen: 1,
        garage: 1,
        serviceArea: 1,
        description:
          'Apartamento de boa qualidade e localizado em uma boa região.',
        buildAt: '20/11/2021',
        address: {
          id: '1',
          street: 'Rua General Luiz Carlos Pereira Tourinho',
          street2: '',
          city: 'Curitiba',
          state: 'Paraná',
          ibge: '',
          neighborhood: 'Ecoville',
          number: 509,
          zip: '81490-516',
        },
      },
      isLogged: true,
    },
  };
};

export default Description;
