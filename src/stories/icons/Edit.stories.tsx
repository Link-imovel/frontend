import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Edit } from '@components/generics/icons/edit';

export default {
  title: 'Icons/Edit',
  component: Edit,
} as Meta<typeof Edit>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <Edit {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};
