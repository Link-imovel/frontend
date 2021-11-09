import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Car } from '@components/generics/icons/car';

export default {
  title: 'Icons/Car',
  component: Car,
} as Meta<typeof Car>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <Car {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};
