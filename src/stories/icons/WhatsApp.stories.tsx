import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { WhatsApp } from '@components/generics/icons/whatsapp';
import { colors } from '@theme/theme/default';

export default {
  title: 'Icons/WhatsApp',
  component: WhatsApp,
} as Meta;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <WhatsApp {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 42,
  height: 42,
  fill: colors.grey,
};
