import * as React from 'react';
import type { Story, Meta } from '@storybook/react';

import { Pill, PillProps } from '../components/Pill';

export default {
  title: 'Example/Pill',
  component: Pill,
} as Meta;

const Template: Story<PillProps> = (args) => <Pill {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'I am a pill!',
  color: 'gray',
  size: 'md',
};
