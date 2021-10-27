import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { PermIdentity } from '@components/generics/icons/permidentity';

export default {
  title: 'Icons/PermIdentity',
  component: PermIdentity,
} as Meta<typeof PermIdentity>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <PermIdentity {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};
