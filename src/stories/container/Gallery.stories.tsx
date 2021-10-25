import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Gallery } from '@components/container/gallery';

export default {
  title: 'Container/Gallery',
  component: Gallery,
  argTypes: {},
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = (args) => (
  <Gallery {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: '#000',
};
