import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '@components/generics/card';

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
  variant: 'primary',
  size: 'small',
  title: 'A partir de',
  address: 'SQNW 303 BLOCO',
  value: 5000,
  neighborhood: 'Noroeste, Brasilia',
  quantityRoom: 5,
  quantityGarage: 1,
  quantityBathroom: 1,
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
      callback: () => console.log('#3'),
    },
  },
  onClick: () => console.log('clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  images: [
    'https://via.placeholder.com/269x143?text=1',
    'https://via.placeholder.com/269x143?text=2',
    'https://via.placeholder.com/269x143?text=3',
  ],
  variant: 'secondary',
  size: 'normal',
  title: 'A partir de',
  address: 'SQNW 303 BLOCO',
  value: 5000,
  neighborhood: 'Noroeste, Brasilia',
  quantityRoom: 5,
  quantityGarage: 1,
  quantityBathroom: 1,
  quantityViews: 3,
  labelViews: ' views',
  info: 'Apartamento 2 E 3 Quartos no Noroeste - Vivant',
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
      callback: () => console.log('#3'),
    },
  },
  onClick: () => console.log('clicked'),
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  images: [
    'https://via.placeholder.com/269x143?text=1',
    'https://via.placeholder.com/269x143?text=2',
    'https://via.placeholder.com/269x143?text=3',
  ],
  variant: 'tertiary',
  size: 'normal',
  title: 'A partir de',
  address: 'SQNW 303 BLOCO',
  value: 5000,
  neighborhood: 'Noroeste, Brasilia',
  quantityRoom: 5,
  quantityGarage: 1,
  quantityBathroom: 1,
  quantityViews: 3,
  labelViews: ' views',
  info: 'Apartamento 2 E 3 Quartos no Noroeste - Vivant',
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
      callback: () => console.log('#3'),
    },
    BEdit: {
      callback: () => console.log('#4'),
    },
    BDelete: {
      callback: () => console.log('#5'),
    },
  },
  onClick: () => console.log('clicked'),
};