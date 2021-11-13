import React from 'react';
import { GetServerSideProps } from 'next';

import AddressContainer from '@containers/address';
import { AddressProps } from '@views/address/address.type';
import strapiClient from '@services/strapi.client';

const Address = (props: AddressProps): React.ReactElement => (
  <AddressContainer {...props} />
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug, locale } = strapiClient.getLocalizedParams(
    context.resolvedUrl,
    context.locale || context.defaultLocale
  );

  try {
    return await strapiClient.getData(slug, locale);
  } catch (error) {
    return { props: {} };
  }
};

export default Address;
