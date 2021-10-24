import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@components/generics/button';
import { WhatsApp } from '@components/generics/icons/whatsapp';
import { colors } from '@theme/theme/default';

export default {
  title: 'generics/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Entrar',
  size: 'medium',
  onClick: () => console.log('clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Entrar',
  size: 'medium',
  background: 'transparent',
  onClick: () => console.log('clicked'),
};

export const Large = Template.bind({});
Large.args = {
  variant: 'primary',
  label: 'Entrar',
  size: 'large',
  onClick: () => console.log('clicked'),
};

export const ButtonWhatsApp = Template.bind({});
ButtonWhatsApp.args = {
  variant: 'primary',
  label: 'Contato por whatsapp',
  size: 'large',
  background: colors.green,
  icon: <WhatsApp height={17} width={17} fill={colors.white} />,
  iconReverse: true,
  onClick: () => console.log('clicked'),
};

export const ButtonContact = Template.bind({});
ButtonContact.args = {
  variant: 'primary',
  label: 'Contatar',
  size: 'medium',
  background: colors.whiteGrey,
  color: colors.blackGrey,
  onClick: () => console.log('clicked'),
};
