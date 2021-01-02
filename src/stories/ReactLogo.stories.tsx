import * as React from 'react';
import type { Story, Meta } from '@storybook/react';

import { ReactLogo, ReactLogoProps } from '../components/ReactLogo';

export default {
  title: 'Example/ReactLogo',
  component: ReactLogo,
} as Meta;

const Template: Story<ReactLogoProps> = (args) => <ReactLogo {...args} />;

export const Default = Template.bind({});
