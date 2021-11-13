import React from 'react';
import { GetServerSideProps } from 'next';
import strapiClient from '@services/strapi.client';

import { ListProps } from '@views/list/list.type';
import ListContainer from '@containers/list';

const List = (props: ListProps): React.ReactElement => {
  return <ListContainer {...props} />;
};

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

export default List;
