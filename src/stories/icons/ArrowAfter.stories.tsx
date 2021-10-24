import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ArrowAfter } from '@components/generics/icons/arrowafter';

export default {
  title: 'Icons/ArrowAfter',
  component: ArrowAfter,
} as Meta<typeof ArrowAfter>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <ArrowAfter {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 42,
  height: 42,
};
