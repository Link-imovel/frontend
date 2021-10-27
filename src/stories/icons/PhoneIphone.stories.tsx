import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { PhoneIphone } from '@components/generics/icons/phoneiphone';

export default {
  title: 'Icons/PhoneIphone',
  component: PhoneIphone,
} as Meta<typeof PhoneIphone>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <PhoneIphone {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};
