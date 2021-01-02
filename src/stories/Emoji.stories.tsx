import * as React from 'react';
import type { Story, Meta } from '@storybook/react';

import { Emoji, EmojiProps } from '../components/Emoji';

export default {
  title: 'Example/Emoji',
  component: Emoji,
} as Meta;

const Template: Story<EmojiProps> = (args) => <Emoji {...args} />;

export const Default = Template.bind({});
Default.args = {
  symbol: 'T💨',
  alt: 'Twind is awesome!',
};
