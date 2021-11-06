import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Article } from '@components/generics/icons/article';

export default {
  title: 'Icons/Article',
  component: Article,
} as Meta<typeof Article>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <Article {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 42,
  height: 42,
};
