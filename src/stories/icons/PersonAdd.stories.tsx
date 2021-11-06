import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { PersonAdd } from '@components/generics/icons/personadd';

export default {
  title: 'Icons/PersonAdd',
  component: PersonAdd,
} as Meta<typeof PersonAdd>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <PersonAdd {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 42,
  height: 42,
};
