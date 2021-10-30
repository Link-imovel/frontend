import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FlatWare } from '@components/generics/icons/flatware';

export default {
  title: 'Icons/FlatWare',
  component: FlatWare,
} as Meta<typeof FlatWare>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <FlatWare {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 42,
  height: 42,
};
