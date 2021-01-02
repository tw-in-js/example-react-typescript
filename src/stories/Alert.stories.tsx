import * as React from 'react';
import type { Story, Meta } from '@storybook/react';

import { Alert, AlertProps } from '../components/Alert';

export default {
  title: 'Example/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'I am an alert!',
};
