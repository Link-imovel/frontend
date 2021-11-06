import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ImageDnD } from '@components/generics/imagednd';

export default {
  title: 'Generics/ImageDnD',
  component: ImageDnD,
  argTypes: {},
} as ComponentMeta<typeof ImageDnD>;

const Template: ComponentStory<typeof ImageDnD> = (args) => (
  <ImageDnD {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  getFiles: (files) => console.log(files),
};
