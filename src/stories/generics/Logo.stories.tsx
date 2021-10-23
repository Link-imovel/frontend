import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from '@components/generics/logo';
import { Link } from '@components/generics/icons/link';
import { colors } from '@theme/theme/default';

export default {
  title: 'Generics/Logo',
  component: Logo,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: <Link />,
  onClick: () => console.log('redirect'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  icon: <Link fill={colors.blackGrey} />,
  onClick: () => console.log('redirect'),
};
