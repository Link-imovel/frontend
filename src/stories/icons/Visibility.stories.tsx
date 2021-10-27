import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Visibility } from '@components/generics/icons/visibility';

export default {
  title: 'Icons/Visibility',
  component: Visibility,
} as Meta<typeof Visibility>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <Visibility {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};
