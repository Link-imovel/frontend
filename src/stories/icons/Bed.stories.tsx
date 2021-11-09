import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Bed } from '@components/generics/icons/bed';

export default {
  title: 'Icons/Bed',
  component: Bed,
} as Meta<typeof Bed>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <Bed {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};
