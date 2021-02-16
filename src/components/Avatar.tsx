import * as React from 'react';
import { tw, apply } from 'twind';
import type { InlineDirectiveMap } from '../types';
import { lazy } from '../utils';

export interface AvatarProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'size'> {
  /**
   * Instance-level classNames will override local classNames
   */
  className?: string;
  /**
   * Determines if the avatar will be round
   */
  round?: boolean;
  /**
   * The size of the avatar.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The URL of the avatar image
   */
  src?: string;
}

type Size = 'sm' | 'md' | 'lg';

const sizeMap: InlineDirectiveMap<Size> = {
  sm: lazy`h-12 w-12`,
  md: lazy`h-16 w-16`,
  lg: lazy`h-20 w-20`,
};

export const Avatar = (props: AvatarProps) => {
  const { size = 'md', alt, round, className, ...rest } = props;
  const appliedClassNames = apply([
    sizeMap[size],
    `rounded-${round ? 'full' : 'md'}`,
  ]);
  return (
    <img alt={alt} className={tw(appliedClassNames, className)} {...rest} />
  );
};
