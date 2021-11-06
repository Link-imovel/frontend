import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Menu } from '@components/generics/icons/menu';

export default {
  title: 'Icons/Menu',
  component: Menu,
} as Meta<typeof Menu>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <Menu {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 42,
  height: 42,
};
