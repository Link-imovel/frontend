import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Link } from '@components/generics/icons/link';
import { colors } from '@theme/theme/default';

export default {
  title: 'Icons/Link',
  component: Link,
} as Meta<typeof Link>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <Link {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  fill: colors.blackGrey,
};
