import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Bathroom } from '@components/generics/icons/bathroom';

export default {
  title: 'Icons/Bathroom',
  component: Bathroom,
} as Meta<typeof Bathroom>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <Bathroom {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};
