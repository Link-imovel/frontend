import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ExpandMore } from '@components/generics/icons/expandmore';

export default {
  title: 'Icons/ExpandMore',
  component: ExpandMore,
} as Meta<typeof ExpandMore>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <ExpandMore {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {
  fill: '#000',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  fill: '#000',
  width: 42,
  height: 42,
};
