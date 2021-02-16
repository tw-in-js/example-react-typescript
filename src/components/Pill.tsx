import * as React from 'react';
import { apply, tw } from 'twind';
import type { BaseComponent } from '../types';

const TAG_COLORS = {
  blue: ['bg-blue-200', 'text-blue-800'],
  gray: ['bg-gray-200', 'text-gray-800'],
  green: ['bg-green-200', 'text-green-800'],
  indigo: ['bg-indigo-200', 'text-indigo-800'],
  orange: ['bg-orange-200', 'text-orange-800'],
  pink: ['bg-pink-200', 'text-pink-800'],
  purple: ['bg-purple-200', 'text-purple-800'],
  red: ['bg-red-200', 'text-red-800'],
  teal: ['bg-teal-200', 'text-teal-800'],
  yellow: ['bg-yellow-200', 'text-yellow-800'],
};

const SIZES_MAP = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

export interface PillProps extends BaseComponent {
  /**
   * Sets the background and text color of the pill
   */
  color?: keyof typeof TAG_COLORS;
  /**
   * Sets the size of the pill
   */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * A pill is used to organize things by keyword
 */
export const Pill = (props: PillProps) => {
  const {
    children,
    className = '',
    style = {},
    color = 'gray',
    size = 'md',
  } = props;
  const [bgColor, textColor] = TAG_COLORS[color];

  const fontSizeClassName = SIZES_MAP[size];

  const fixedClassNames = `inline-block px-2 rounded-full uppercase font-semibold tracking-wide`;
  const appliedClassNames = apply(
    bgColor,
    textColor,
    fontSizeClassName,
    fixedClassNames,
  );

  return (
    <span style={style} className={tw(appliedClassNames, className)}>
      {children}
    </span>
  );
};

// eslint-disable-next-line functional/immutable-data
Pill.defaultProps = {
  className: '',
  style: {},
  color: 'gray',
  size: 'md',
};
