import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Calendar } from '@components/generics/icons/calendar';

export default {
  title: 'Icons/Calendar',
  component: Calendar,
} as Meta<typeof Calendar>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <Calendar {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 42,
  height: 42,
};
