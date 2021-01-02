// This component requires additional colors in the setup function. See src/index.tsx
import { styled } from 'twind/styled/react';
import type { InlineDirectiveMap } from '../types';

const sizeMap: InlineDirectiveMap<'sm' | 'md' | 'lg'> = {
  sm: ({ tw }) => tw`text-xs`,
  md: ({ tw }) => tw`text-sm`,
  lg: ({ tw }) => tw`text-lg`,
};

export type PillProps = {
  /**
   * Instance-level classNames will override local classNames
   */
  className?: string;
  /**
   * Sets the background color.
   */
  color?:
    | 'blue'
    | 'gray'
    | 'green'
    | 'indigo'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'red'
    | 'teal'
    | 'yellow';
  /**
   * Sets the size of the badge text. Default is "md".
   */
  size?: 'sm' | 'md' | 'lg';
} & React.HTMLAttributes<HTMLSpanElement>;

export const Pill = styled.span<PillProps>`
  inline-block 
  px-2 
  rounded-full 
  uppercase 
  font-semibold 
  tracking-wide
  ${(props) => [
    sizeMap[props.size || 'md'],
    `bg-${props.color || 'gray'}-200 text-${props.color || 'gray'}-800`,
    `override:(${props.className || ''})`,
  ]}

`;
