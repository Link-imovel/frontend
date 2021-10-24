import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextArea } from '@components/generics/textarea';

export default {
  title: 'Generics/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  withBorder: false,
  placeholder: 'Digite seu texto aqui',
  onChange: (e) => console.log(e),
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  withBorder: true,
  placeholder: 'Digite seu texto aqui',
  onChange: (e) => console.log(e),
};
