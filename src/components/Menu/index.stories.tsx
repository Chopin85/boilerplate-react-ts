import React from 'react';
// import { action } from "@storybook/addon-actions";
// import { Button } from "@storybook/react/demo";
import { MemoryRouter } from 'react-router';
import Menu from './index';
// import './story.css';

const Center = ({ children }: any) => (
  <div
    style={{
      height: '500px'
    }}
  >
    {children}
  </div>
);

export default {
  title: 'Components/Menu',
  decorators: [
    (storyFn: any) => (
      <MemoryRouter>
        <Center>{storyFn()}</Center>
      </MemoryRouter>
    )
  ]
};

export const DefaultStory = () => <Menu onClick={() => console.log('ok')} />;

DefaultStory.story = {
  name: 'default'
};
