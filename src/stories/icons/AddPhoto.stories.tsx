import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { AddPhoto } from '@components/generics/icons/addphoto';

export default {
  title: 'Icons/AddPhoto',
  component: AddPhoto,
} as Meta<typeof AddPhoto>;

const Template: Story<SVGProps<SVGSVGElement>> = (
  args: SVGProps<SVGSVGElement>
): React.ReactElement => <AddPhoto {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 42,
  height: 42,
};
