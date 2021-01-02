import * as React from 'react';
import type { Story, Meta } from '@storybook/react';

import { Card, CardProps } from '../components/Card';

export default {
  title: 'Example/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'I am an optional title.',
  children: 'I am a card!',
};
