import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ChevronLeft } from '@components/generics/icons/chevronleft';

export default {
  title: 'Icons/ChevronLeft',
  component: ChevronLeft,
} as Meta<typeof ChevronLeft>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <ChevronLeft {...args} />;

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
