import React from 'react';

import { ContactView } from '@views/contact';
import { ContactProps } from '@views/contact/contact.type';

const ContactContainer = (props: ContactProps): React.ReactElement => {
  const { BLogo, BArrowBefore, BSend } = props.buttons;

  BLogo.callback = () => {
    console.log('#1');
  };

  BArrowBefore.callback = () => {
    console.log('#2');
  };

  BSend.callback = () => {
    console.log('#3');
  };

  return <ContactView {...props} />;
};

export default ContactContainer;
