import * as React from 'react';
import { tw, apply } from 'twind';
import { __DEV__ } from '../utils';

const SIZES_MAP = {
  sm: 'px-3 py-1 text-xs',
  md: 'px-3 py-1 text-base',
  lg: 'px-3 py-2 text-lg',
};

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Determines the size of the input control
   */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * An HTML input element with added support for sizing
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', size = 'md', ...rest }: InputProps, ref) => {
    const appliedClassNames = apply`
    appearance-none border m-0 w-full text-gray-700 focus:outline-none focus:ring
    ${SIZES_MAP[size]}
    `;
    return (
      <input ref={ref} className={tw(appliedClassNames, className)} {...rest} />
    );
  },
);

if (__DEV__) {
  // forwardRef does not have a display name.
  // eslint-disable-next-line functional/immutable-data
  Input.displayName = 'Input';
}

// eslint-disable-next-line functional/immutable-data
Input.defaultProps = {
  className: '',
  size: 'md',
};
