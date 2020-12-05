import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router';

import Menu from './index';

interface Props {
  className?: string;
  onClick: () => void;
}

const Center = ({ children }: any) => (
  <div
    style={{
      height: '500px',
    }}
  >
    {children}
  </div>
);

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta;

const Template: Story<Props> = (args) => (
  <MemoryRouter>
    <Center>
      <Menu {...args} />
    </Center>
  </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  onClick: () => console.log('hello'),
};
