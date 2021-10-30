import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DryCleaning } from '@components/generics/icons/drycleaning';

export default {
  title: 'Icons/DryCleaning',
  component: DryCleaning,
} as Meta<typeof DryCleaning>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <DryCleaning {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 42,
  height: 42,
};
