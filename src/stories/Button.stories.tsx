import * as React from 'react';
import type { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: { onClick: { action: 'Clicked!' } },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  children: 'Click Me',
};
