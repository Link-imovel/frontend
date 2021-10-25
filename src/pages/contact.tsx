import React from 'react';

import ContactContainer from '@containers/contact';

import { ButtonsProps } from '@views/contact/contact.type';
import { Logo } from '@components/generics/icons/logo';
import { ArrowBefore } from '@components/generics/icons/arrowbefore';
import { colors } from '@theme/theme/default';

const Contact = (): React.ReactElement => {
  const buttons: ButtonsProps = {
    BLogo: {
      icon: <Logo fill={colors.blackGrey} />,
    },
    BArrowBefore: {
      icon: <ArrowBefore height={20} width={20} />,
      label: 'Anterior',
    },
    BLogin: {
      label: 'Enviar',
    },
  };

  return <ContactContainer title="Entre contato conosco" buttons={buttons} />;
};

export default Contact;
