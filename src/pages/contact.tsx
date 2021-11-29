import React from 'react';
import { GetServerSideProps } from 'next';
import strapiClient from '@services/strapi.client';

import ContactContainer from '@containers/contact';

import { ContactProps } from '@views/contact/contact.type';

const Contact = (props: ContactProps): React.ReactElement => {
  if (typeof window !== 'undefined') {
    return <ContactContainer {...props} />;
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

export default Contact;
