import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Contact } from '@components/generics/contact';

export default {
  title: 'Generics/Contact',
  component: Contact,
  argTypes: {},
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = (args) => (
  <Contact {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
