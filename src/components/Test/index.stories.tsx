import React from 'react';
import Test from './index';

export default {
  title: 'Components/Test',
};

export const DefaultStory = () => <Test></Test>;

DefaultStory.story = {
  name: 'default',
};

const labels = ['Bonjour', 'le', 'monde'];
export const withLabels = () => <Test labels={labels}></Test>;
