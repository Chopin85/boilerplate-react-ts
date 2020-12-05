import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Sample, SampleProps } from './index';

export default {
  title: 'Components/Sample',
  component: Sample,
} as Meta;

const Template: Story<SampleProps> = (args) => <Sample {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  message: 'Hello',
};
