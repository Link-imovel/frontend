import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Settings } from '@components/generics/icons/settings';

export default {
  title: 'Icons/Settings',
  component: Settings,
} as Meta<typeof Settings>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <Settings {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 42,
  height: 42,
};
