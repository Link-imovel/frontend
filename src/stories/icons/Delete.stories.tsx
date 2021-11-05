import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Delete } from '@components/generics/icons/delete';

export default {
  title: 'Icons/Delete',
  component: Delete,
} as Meta<typeof Delete>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <Delete {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};
