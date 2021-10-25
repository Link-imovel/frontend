import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Gallery } from '@components/generics/gallery';

export default {
  title: 'Generics/Gallery',
  component: Gallery,
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = (args) => (
  <Gallery {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  images: [
    'https://via.placeholder.com/500x522.png?text=Main',
    'https://via.placeholder.com/376x256.png?text=2',
    'https://via.placeholder.com/376x256.png?text=3',
    'https://via.placeholder.com/382x256.png?text=4',
    'https://via.placeholder.com/382x256.png?text=5',
  ],
};
