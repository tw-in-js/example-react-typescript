// This component is for accessiblity when using Emojis.
// See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md
import * as React from 'react';
import { tw } from 'twind';
export interface EmojiProps {
  /**
   * Alternative text for assistive technologies
   */
  alt: string;
  /**
   * The emoji or symbol to display
   */
  symbol: string;
  /**
   * Optionally apply a className
   */
  className?: string;
}

/**
 * The Emoji component is used for displaying emojis and symbols, with an emphasis on accessibility.
 */
export const Emoji = (props: EmojiProps) => {
  const { symbol, alt, className = '' } = props;
  return (
    <span role="img" aria-label={alt} className={tw(className)}>
      {symbol}
    </span>
  );
};

// eslint-disable-next-line functional/immutable-data
Emoji.defaultProps = {
  className: '',
};
