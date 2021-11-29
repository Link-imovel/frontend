import React from 'react';
import { GetServerSideProps } from 'next';

import UserContainer from '@containers/user';
import { UserProps } from '@views/user/user.type';
import strapiClient from '@services/strapi.client';

const User = (props: UserProps): React.ReactElement => {
  if (typeof window !== 'undefined') {
    return <UserContainer {...props} />;
  }
  return <></>;
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

export default User;
