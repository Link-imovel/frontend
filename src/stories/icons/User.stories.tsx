import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { User } from '@components/generics/icons/user';

export default {
  title: 'Icons/User',
  component: User,
} as Meta<typeof User>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <User {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 42,
  height: 42,
};
