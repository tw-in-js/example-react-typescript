import * as React from 'react';
import type { Story, Meta } from '@storybook/react';

import { Header, HeaderProps } from '../components/Header';

export default {
  title: 'Example/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'I am a header!',
};
