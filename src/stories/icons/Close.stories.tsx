import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Close } from '@components/generics/icons/close';

export default {
  title: 'Icons/Close',
  component: Close,
} as Meta<typeof Close>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <Close {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};
