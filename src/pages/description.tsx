import React from 'react';
import { GetServerSideProps } from 'next';
import strapiClient from '@services/strapi.client';

import DescriptionContainer from '@containers/description';
import { DesciptionProps } from '@views/description/description.type';

const Description = (props: DesciptionProps): React.ReactElement => (
  <DescriptionContainer {...props} />
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug, locale } = strapiClient.getLocalizedParams(
    context.resolvedUrl,
    context.locale || context.defaultLocale
  );

  try {
    return await strapiClient.getData(slug, locale, {
      id: context.params,
    });
  } catch (error) {
    return { props: {} };
  }
};

export default Description;
