import React from 'react';
import strapiClient from '@services/strapi.client';
import { GetServerSideProps } from 'next';

import LoginContainer from '@containers/login';
import { LoginProps } from '@views/login/login.type';

const Login = (props: LoginProps): React.ReactElement => (
  <LoginContainer {...props} />
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

export default Login;
