/*
 * This is a simple example of a reusable card component:
 */

import * as React from 'react';
import { tw } from 'twind';

export type CardProps = {
  /**
   * The card contents
   */
  children?: React.ReactNode;
  /**
   * Instance-level classNames will override local classNames
   */
  className?: string;
  /**
   * Adds a raised appearance with a box shadow
   */
  elevation?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Optionally provide a style object
   */
  style?: React.CSSProperties;
  /**
   * Optionally pass a card title
   */
  title?: string;
};

const elevationClassNames = [
  'shadow-sm',
  'shadow',
  'shadow-md',
  'shadow-lg',
  'shadow-xl',
];

export const Card = ({
  title,
  children,
  className = '',
  style = {},
  elevation = 0,
}: CardProps) => {
  const elevationClassName = elevationClassNames[elevation];
  const classNames = tw`
    bg-white
    p-4 
    rounded-lg 
    ${elevationClassName}
    override:(${className})
  `;
  return (
    <section style={style} className={classNames}>
      {title && (
        <h2 className={tw`text(purple-700 uppercase xl) font(semibold) mb-4`}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};
