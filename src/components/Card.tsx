/*
 * This is a simple example of a reusable card component:
 */

import * as React from 'react';
import { tw, apply } from 'twind';
import type { BaseComponent } from '../types';

export interface CardProps extends BaseComponent {
  /**
   * Adds a raised appearance with a box shadow
   */
  elevation?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Optionally pass a card title
   */
  title?: string;
  /**
   * Optionally className for the title component
   */
  titleClassName?: string;
}

const elevationClassNames = [
  'shadow-sm',
  'shadow',
  'shadow-md',
  'shadow-lg',
  'shadow-xl',
];

export const Card = ({
  children,
  className = '',
  style = {},
  elevation = 0,
  title,
  titleClassName = '',
}: CardProps) => {
  const elevationClassName = elevationClassNames[elevation];
  const appliedClassNames = apply`
    bg-white
    p-4 
    rounded-lg 
    ${elevationClassName}
  `;

  const appliedTitleClassNames = apply`text(gray-700 uppercase xl) font(semibold) mb-4`;
  return (
    <section style={style} className={tw(appliedClassNames, className)}>
      {title && (
        <h2 className={tw(appliedTitleClassNames, titleClassName)}>{title}</h2>
      )}
      {children}
    </section>
  );
};

// eslint-disable-next-line functional/immutable-data
Card.defaultProps = {
  className: '',
  style: {},
  elevation: 0,
  titleClassName: '',
};
