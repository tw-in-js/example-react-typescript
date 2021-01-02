/*
This is an example of a reusable button component:

- Written in React/TypeScript
- Styled with Twind
- Exported type definitions with JSDoc comments for easy Storybook integration
- Uses forward ref to allow the uesr to set a ref on an instance
- Allows for className overriding via the “override” variant
- Example usage in App component
- Logged classNames for convenience
*/

import * as React from 'react';
import { tw } from 'twind';
import { Spinner } from './Spinner';
import { __DEV__, logClassNames } from '../utils';
import { slowspin } from '../animations';
import type { InlineDirectiveMap } from '../types';

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * Instance-level classNames will override local classNames
   */
  className?: string;
  /**
   * Determines if the button is clickable
   */
  disabled?: boolean;
  /**
   * Displays a loading spinner
   */
  loading?: boolean;
  /**
   * Determines if the button is fully rounded
   */
  round?: boolean;
  /**
   * Controls the text size and padding of the button
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Optionally provide a style object
   */
  style?: React.CSSProperties;
  /**
   * Determines the color of the button
   */
  variant?: 'success' | 'primary' | 'warning' | 'info' | 'danger';
}

const variantMap = {
  success: 'green',
  primary: 'blue',
  warning: 'yellow',
  info: 'gray',
  danger: 'red',
};

type sizes = 'sm' | 'md' | 'lg' | 'xl';

// The inline functions allow Twind to cache the derived classNames
const sizeMap: InlineDirectiveMap<sizes> = {
  sm: ({ tw }) => tw`text-xs py(2 md:1) px-2`,
  md: ({ tw }) => tw`text-sm py(3 md:2) px-2`,
  lg: ({ tw }) => tw`text-lg py-2 px-4`,
  xl: ({ tw }) => tw`text-xl py-3 px-6`,
};

// The inline functions allow Twind to cache the derived classNames
const spinnerSizeMap: InlineDirectiveMap<sizes> = {
  sm: ({ tw }) => tw`w-3 h-3 mr-1`,
  md: ({ tw }) => tw`w-4 h-4 mr-1`,
  lg: ({ tw }) => tw`w-5 h-5 mr-2`,
  xl: ({ tw }) => tw`w-6 h-6 mr-2`,
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    // Destructure the props and apply default values
    const {
      children,
      className = '',
      disabled = false,
      loading = false,
      onClick,
      round = false,
      size = 'md',
      title,
      variant = 'primary',
      ...rest
    } = props;
    // Get the background color
    const variantColor = variantMap[variant];
    // Create the background color classNames with pseudo variants
    const bgClassNames = `bg(${variantColor}(500 600(hover:& focus:&)))`;
    // Get the text size based on the "size" prop
    const sizeClassNames = sizeMap[size];
    // Create the full className, passing the instance-level classNames to the "override" variant
    const classNames = tw`
    w(full sm:auto)
    ${bgClassNames}
    ${sizeClassNames}
    text(sm white uppercase) 
    rounded-${round ? 'full' : 'md'} 
    border-none 
    transition-colors 
    duration-300
    override:(${disabled && 'bg-gray-400 text-gray-100 cursor-not-allowed'})
    override:(${className})
  `;

    const spinnerSizeClassName = spinnerSizeMap[size];

    function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
      logClassNames(classNames, children);
      if (onClick) {
        onClick(e);
      }
    }

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled}
        title={__DEV__ ? classNames : title}
        onClick={handleOnClick}
        {...rest}
      >
        <span className={tw`flex items-center justify-center`}>
          <Spinner
            className={tw`
              text-current 
              ${[slowspin, spinnerSizeClassName, !loading && 'hidden']}
            `}
          />

          {children}
        </span>
      </button>
    );
  },
);
