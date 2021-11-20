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
  variant: 'primary',
  size: 'small',
  publication: {
    userId: '1',
    homeId: '1',
    phone: '(41) 99119-9642',
    reserved: false,
    views: 3,
    virtualTour: 'https://google.com',
    rented: true,
    home: {
      id: '1',
      type: 'Casa',
      ref: '234120',
      totalArea: 145,
      value: 1267.2,
      room: 1,
      bedroom: 3,
      bathroom: 2,
      kitchen: 1,
      garage: 1,
      serviceArea: 1,
      buildAt: new Date('1990-12-12T00:00:00.000Z'),
      description: 'Maravilhosa casa localizada perto do parque.',
      images: [
        'https://via.placeholder.com/269x143?text=1',
        'https://via.placeholder.com/269x143?text=2',
        'https://via.placeholder.com/269x143?text=3',
      ],
      address: {
        id: '1',
        street: 'Rua General Luiz Carlos Pereira Tourinho',
        street2: '',
        number: 509,
        neighborhood: 'Campo de Santana',
        city: 'Curitiba',
        state: 'Paraná',
        zip: '81490-516',
        ibge: '2384920',
      },
    },
  },
  buttons: {
    BCircleWhatsApp: {
      callback: () => console.log(1),
    },
    BNavigation: {
      typeSize: 'small',
      callback: () => console.log(2),
    },
    BContact: {
      label: 'Contatar',
      callback: () => console.log(3),
    },
  },
  onClick: () => console.log('clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'normal',
  publication: {
    userId: '1',
    homeId: '1',
    phone: '(41) 99119-9642',
    reserved: false,
    views: 3,
    virtualTour: 'https://google.com',
    rented: true,
    home: {
      id: '1',
      type: 'Casa',
      ref: '234120',
      totalArea: 145,
      value: 1267.2,
      room: 1,
      bedroom: 3,
      bathroom: 2,
      kitchen: 1,
      garage: 1,
      serviceArea: 1,
      buildAt: new Date('1990-12-12T00:00:00.000Z'),
      description: 'Maravilhosa casa localizada perto do parque.',
      images: [
        'https://via.placeholder.com/269x143?text=1',
        'https://via.placeholder.com/269x143?text=2',
        'https://via.placeholder.com/269x143?text=3',
      ],
      address: {
        id: '1',
        street: 'Rua General Luiz Carlos Pereira Tourinho',
        street2: '',
        number: 509,
        neighborhood: 'Campo de Santana',
        city: 'Curitiba',
        state: 'Paraná',
        zip: '81490-516',
        ibge: '2384920',
      },
    },
  },
  buttons: {
    BCircleWhatsApp: {
      callback: () => console.log(1),
    },
    BNavigation: {
      typeSize: 'medium',
      label: 'Google Map',
      callback: () => console.log(2),
    },
    BContact: {
      label: 'Contatar',
      callback: () => console.log(3),
    },
  },
  onClick: () => console.log('clicked'),
};

export const Ternary = Template.bind({});
Ternary.args = {
  variant: 'ternary',
  size: 'normal',
  publication: {
    userId: '1',
    homeId: '1',
    phone: '(41) 99119-9642',
    reserved: false,
    views: 3,
    virtualTour: 'https://google.com',
    rented: true,
    home: {
      id: '1',
      type: 'Casa',
      ref: '234120',
      totalArea: 145,
      value: 1267.2,
      room: 1,
      bedroom: 3,
      bathroom: 2,
      kitchen: 1,
      garage: 1,
      serviceArea: 1,
      buildAt: new Date('1990-12-12T00:00:00.000Z'),
      description: 'Maravilhosa casa localizada perto do parque.',
      images: [
        'https://via.placeholder.com/269x143?text=1',
        'https://via.placeholder.com/269x143?text=2',
        'https://via.placeholder.com/269x143?text=3',
      ],
      address: {
        id: '1',
        street: 'Rua General Luiz Carlos Pereira Tourinho',
        street2: '',
        number: 509,
        neighborhood: 'Campo de Santana',
        city: 'Curitiba',
        state: 'Paraná',
        zip: '81490-516',
        ibge: '2384920',
      },
    },
  },
  buttons: {
    BCircleWhatsApp: {
      callback: () => console.log(1),
    },
    BNavigation: {
      typeSize: 'medium',
      label: 'Google Map',
      callback: () => console.log(2),
    },
    BContact: {
      label: 'Contatar',
      callback: () => console.log(3),
    },
    BEdit: {
      callback: () => console.log(4),
    },
    BDelete: {
      callback: () => console.log(5),
    },
  },
  onClick: () => console.log('clicked'),
};
