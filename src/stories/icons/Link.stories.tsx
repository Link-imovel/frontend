import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Logo } from '@components/generics/icons/logo';
import { colors } from '@theme/theme/default';

export default {
  title: 'Icons/Logo',
  component: Logo,
} as Meta<typeof Logo>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <Logo {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  fill: colors.blackGrey,
};
