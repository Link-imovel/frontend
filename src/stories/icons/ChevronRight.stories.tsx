import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ChevronRight } from '@components/generics/icons/chevronright';

export default {
  title: 'Icons/ChevronRight',
  component: ChevronRight,
} as Meta<typeof ChevronRight>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <ChevronRight {...args} />;

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
