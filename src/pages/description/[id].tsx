import React from 'react';
import { GetServerSideProps } from 'next';
import strapiClient from '@services/strapi.client';

import DescriptionContainer from '@containers/description';
import { DesciptionProps } from '@views/description/description.type';

const Description = (props: DesciptionProps): React.ReactElement => {
  if (typeof window !== 'undefined') {
    return <DescriptionContainer {...props} />;
  }
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async ({
  resolvedUrl,
  locale,
  defaultLocale,
  params,
}) => {
  const { slug, locale: strapiLocale } = strapiClient.getLocalizedParams(
    resolvedUrl,
    locale || defaultLocale
  );

  try {
    return await strapiClient.getData(slug, strapiLocale, { id: params?.id });
  } catch (error) {
    return { props: {} };
  }
};

export default Description;
