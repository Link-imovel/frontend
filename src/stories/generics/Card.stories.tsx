import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '@components/generics/card';

import { Visibility } from '@components/generics/icons/visibility';
import { Bathroom } from '@components/generics/icons/bathroom';
import { Bed } from '@components/generics/icons/bed';
import { Car } from '@components/generics/icons/car';
import { PermIdentity } from '@components/generics/icons/permidentity';
import { PhoneIphone } from '@components/generics/icons/phoneiphone';

import { colors } from '@theme/theme/default';

export default {
  title: 'generics/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  images: [
    'https://via.placeholder.com/269x143?text=1',
    'https://via.placeholder.com/269x143?text=2',
    'https://via.placeholder.com/269x143?text=3',
  ],
  size: 'small',
  title: 'A partir de',
  address: 'SQNW 303 BLOCO',
  value: 5000,
  neighborhood: 'Noroeste, Brasilia',
  quantityRoom: 5,
  quantityGarage: 1,
  quantityBathroom: 1,
  bathroom: <Bathroom />,
  bed: <Bed />,
  car: <Car />,
  buttons: {
    BCircleWhatsApp: {
      callback: () => console.log('#1'),
    },
    BNavigation: {
      typeSize: 'small',
      callback: () => console.log('#2'),
    },
    BContact: {
      label: 'Contatar',
      background: colors.whiteGrey,
      color: colors.blackGrey,
      callback: () => console.log('#3'),
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  images: [
    'https://via.placeholder.com/269x143?text=1',
    'https://via.placeholder.com/269x143?text=2',
    'https://via.placeholder.com/269x143?text=3',
  ],
  size: 'normal',
  title: 'A partir de',
  address: 'SQNW 303 BLOCO',
  value: 5000,
  neighborhood: 'Noroeste, Brasilia',
  quantityRoom: 5,
  quantityGarage: 1,
  quantityBathroom: 1,
  bathroom: <Bathroom />,
  bed: <Bed />,
  car: <Car />,
  visibility: <Visibility />,
  quantityViews: 3,
  labelViews: ' views',
  info: 'Apartamento 2 E 3 Quartos no Noroeste - Vivant',
  permIdentity: <PermIdentity />,
  phoneIphone: <PhoneIphone />,
  name: 'John Amoedo',
  phoneNumber: '(41) 99999-9999',
  buttons: {
    BCircleWhatsApp: {
      callback: () => console.log('#1'),
    },
    BNavigation: {
      typeSize: 'medium',
      label: 'Navigation',
      callback: () => console.log('#2'),
    },
    BContact: {
      label: 'Contatar',
      background: colors.whiteGrey,
      color: colors.blackGrey,
      callback: () => console.log('#3'),
    },
  },
};
