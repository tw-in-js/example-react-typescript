import { styled } from 'twind/styled/react';
import type { InlineDirectiveMap } from '../types';

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLImageElement>, 'size'> {
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
  sm: ({ tw }) => tw`h-12 w-12`,
  md: ({ tw }) => tw`h-16 w-16`,
  lg: ({ tw }) => tw`h-20 w-20`,
};

export const Avatar = styled.img<AvatarProps>`
inline-block
${(props) => [
  `rounded-${props.round ? 'full' : 'md'}`,
  sizeMap[props.size || 'md'],
  `override:(${props.className || ''})`,
]}
`;
