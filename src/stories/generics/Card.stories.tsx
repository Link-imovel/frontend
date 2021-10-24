import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '@components/generics/card';
import { Bathroom } from '@components/generics/icons/bathroom';
import { Bed } from '@components/generics/icons/bed';
import { Car } from '@components/generics/icons/car';

export default {
  title: 'generics/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    'https://via.placeholder.com/269x143?text=1',
    'https://via.placeholder.com/269x143?text=2',
    'https://via.placeholder.com/269x143?text=3',
  ],
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
};
