// This component is for accessiblity when using Emojis.
// See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md
import * as React from 'react';
import { tw } from 'twind';

export type EmojiProps = {
  /**
   * Alternative text for assistive technologies.
   */
  alt: string;
  /**
   * The actual emoji to display.
   */
  symbol: string;
  /**
   * Optional className to apply.
   */
  className?: string;
};

export const Emoji: React.FC<EmojiProps> = ({ symbol, alt, className }) => {
  return (
    <span role="img" aria-label={alt} className={tw`${className}`}>
      {symbol}
    </span>
  );
};
