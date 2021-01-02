import * as React from 'react';
import type { Story, Meta } from '@storybook/react';

import { Input, InputProps } from '../components/Input.styled';

export default {
  title: 'Example/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter your email',
  type: 'email',
};
