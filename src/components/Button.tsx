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
import { tw, apply } from 'twind';
import { Spinner } from './Spinner';
import { __DEV__, logClassNames, lazy } from '../utils';
import { slowspin } from '../animations';
import type { InlineDirectiveMap, BaseComponent } from '../types';

export interface ButtonProps
  extends BaseComponent,
    Omit<React.HTMLAttributes<HTMLButtonElement>, 'size'> {
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
  sm: lazy`text-xs py(2 md:1) px-2`,
  md: lazy`text-sm py(3 md:2) px-2`,
  lg: lazy`text-lg py-2 px-4`,
  xl: lazy`text-xl py-3 px-6`,
};

// The inline functions allow Twind to cache the derived classNames
const spinnerSizeMap: InlineDirectiveMap<sizes> = {
  sm: lazy`w-3 h-3 mr-1`,
  md: lazy`w-4 h-4 mr-1`,
  lg: lazy`w-5 h-5 mr-2`,
  xl: lazy`w-6 h-6 mr-2`,
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

    const appliedClassNames = apply`
    ${sizeMap[size]}
    bg(${variantMap[variant]}(500 600(hover:& focus:&)))
    w(full sm:auto)
    text(sm white uppercase) 
    rounded-${round ? 'full' : 'md'} 
    border-none 
    transition-colors 
    duration-300
  `;

    const classNames = tw(appliedClassNames, className);

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
              ${[slowspin, spinnerSizeMap[size], !loading && 'hidden']}
            `}
          />

          {children}
        </span>
      </button>
    );
  },
);

// eslint-disable-next-line functional/immutable-data
Button.defaultProps = {
  className: '',
  disabled: false,
  loading: false,
  round: false,
  size: 'md',
  variant: 'primary',
};
