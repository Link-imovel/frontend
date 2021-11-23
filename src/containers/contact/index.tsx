import React from 'react';
import { useRouter } from 'next/router';

import { ContactView } from '@views/contact';

import { ContactProps } from '@views/contact/contact.type';

const ContactContainer = (props: ContactProps): React.ReactElement => {
  const { BLogo, BArrowBefore, BSend } = props.buttons;

  const router = useRouter();

  BLogo.callback = () => {
    router.push('/');
  };

  BArrowBefore.callback = () => {
    router.push('/login');
  };

  BSend.callback = () => {
    router.push('/');
  };

  return <ContactView {...props} />;
};

export default ContactContainer;
