import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ArrowBefore } from '@components/generics/icons/arrowbefore';

export default {
  title: 'Icons/ArrowBefore',
  component: ArrowBefore,
} as Meta<typeof ArrowBefore>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <ArrowBefore {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 42,
  height: 42,
};
