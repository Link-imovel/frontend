import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Carousel } from '@components/generics/carousel';
import { ChevronLeft } from '@components/generics/icons/chevronleft';
import { ChevronRight } from '@components/generics/icons/chevronright';

export default {
  title: 'generics/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  images: [
    'https://via.placeholder.com/269x143?text=1',
    'https://via.placeholder.com/269x143?text=2',
    'https://via.placeholder.com/269x143?text=3',
  ],
  chevronRight: <ChevronRight />,
  chevronLeft: <ChevronLeft />,
};
