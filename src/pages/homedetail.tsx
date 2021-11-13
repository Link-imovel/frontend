import React from 'react';
import { GetServerSideProps } from 'next';
import strapiClient from '@services/strapi.client';

import HomeDetailContainer from '@containers/homedetail';
import { HomeDetailProps } from '@views/homedetail/homedetail.type';

const HomeDetail = (props: HomeDetailProps): React.ReactElement => (
  <HomeDetailContainer {...props} />
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

export default HomeDetail;
