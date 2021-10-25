import React from 'react';

import { ContactView } from '@views/contact';

import { ContactProps } from '@views/contact/contact.type';

const ContactContainer = (props: ContactProps): React.ReactElement => {
  const customProps = { ...props };
  const { BLogo, BArrowBefore, BLogin } = customProps.buttons;

  BLogo.callback = React.useCallback(() => {
    console.log('#1');
  }, []);

  BArrowBefore.callback = React.useCallback(() => {
    console.log('#2');
  }, []);

  BLogin.callback = React.useCallback(() => {
    console.log('#3');
  }, []);

  return <ContactView {...customProps} />;
};

export default ContactContainer;
