import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { People } from '@components/generics/icons/people';

export default {
  title: 'Icons/People',
  component: People,
} as Meta<typeof People>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <People {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 42,
  height: 42,
};
