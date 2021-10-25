import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@components/generics/button';
import { WhatsApp } from '@components/generics/icons/whatsapp';
import { colors } from '@theme/theme/default';
import { Navigation } from '@components/generics/icons/navigation';
import { Search } from '@components/generics/icons/search';
import { Logo } from '@components/generics/icons/logo';
import { ArrowBefore } from '@components/generics/icons/arrowbefore';
import { ArrowAfter } from '@components/generics/icons/arrowafter';

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

export const BWhatsApp = Template.bind({});
BWhatsApp.args = {
  variant: 'primary',
  label: 'Contato por whatsapp',
  size: 'large',
  background: colors.green,
  icon: <WhatsApp height={20} width={20} fill={colors.whiteGrey} />,
  iconReverse: true,
  onClick: () => console.log('clicked'),
};

export const BContact = Template.bind({});
BContact.args = {
  variant: 'primary',
  label: 'Contatar',
  size: 'medium',
  background: colors.whiteGrey,
  color: colors.blackGrey,
  onClick: () => console.log('clicked'),
};

export const BCircleWhatsApp = Template.bind({});
BCircleWhatsApp.args = {
  variant: 'primary-circle',
  size: 'small',
  radius: 'circle',
  icon: <WhatsApp height={20} width={20} fill={colors.whiteGrey} />,
  onClick: () => console.log('clicked'),
};

export const BNavigation = Template.bind({});
BNavigation.args = {
  variant: 'secondary-square',
  size: 'small',
  radius: 'square',
  icon: <Navigation height={20} width={20} fill={colors.whiteGrey} />,
  onClick: () => console.log('clicked'),
};

export const BSearch = Template.bind({});
BSearch.args = {
  variant: 'primary-square',
  size: 'xsmall',
  radius: 'middleSquare',
  icon: <Search height={24} width={24} fill={colors.whiteGrey} />,
  onClick: () => console.log('clicked'),
};

export const BLogo = Template.bind({});
BLogo.args = {
  variant: 'transparent',
  size: 'xsmall',
  radius: 'square',
  icon: <Logo height={24} width={24} fill={colors.blackGrey} />,
  onClick: () => console.log('clicked'),
};

export const BArrowBefore = Template.bind({});
BArrowBefore.args = {
  variant: 'transparent',
  label: 'Anterior',
  color: colors.blackGrey,
  justifyContent: 'space-between',
  size: 'xsmall',
  radius: 'square',
  iconReverse: true,
  icon: <ArrowBefore height={24} width={24} />,
  onClick: () => console.log('clicked'),
};

export const BArrowAfter = Template.bind({});
BArrowAfter.args = {
  variant: 'transparent',
  label: 'Próximo',
  color: colors.blackGrey,
  justifyContent: 'space-between',
  size: 'xsmall',
  radius: 'square',
  icon: <ArrowAfter height={24} width={24} />,
  onClick: () => console.log('clicked'),
};
