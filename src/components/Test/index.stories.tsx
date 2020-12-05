import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Test from './index';

export default {
  title: 'Components/Test',
  component: Test,
} as Meta;

const Template: Story = (args) => <Test {...args} />;

const labels = ['Bonjour', 'le', 'monde'];

export const Primary = Template.bind({});
Primary.args = {
  labels,
};
