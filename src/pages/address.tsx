import React from 'react';
import { GetStaticProps } from 'next';

import AddressContainer from '@containers/address';
import { AddressProps } from '@views/address/address.type';

const Address = (props: AddressProps): React.ReactElement => (
  <AddressContainer {...props} />
);

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: 'Endereço do imóvel',
      buttons: {
        BLogo: {},
        BArrowBefore: {
          label: 'Anterior',
        },
        BArrowAfter: {
          label: 'Próximo',
        },
        BGeneric: {
          label: 'Continuar',
        },
      },
      breadCrumb: {
        paths: [
          {
            title: 'Endereço do imóvel',
            url: '/address-imovel',
          },
        ],
      },
    },
  };
};

export default Address;
