import * as React from 'react';
import { tw, apply } from 'twind';

export type SpinnerProps = {
  /**
   * Optionally pass a className
   */
  className?: string;
};

export const Spinner = ({ className = '' }: SpinnerProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="0 0 50 50"
      // Applying `override:(${className})` breaks the custom animation
      // that is applied to the instance in ./Button.tsx
      className={tw`${apply('fill-current')} ${className}`}
    >
      <g>
        <path d="M25,14.3L25,14.3c-1.3,0-2.4-1.1-2.4-2.4V3.4C22.6,2.1,23.7,1,25,1l0,0c1.3,0,2.4,1.1,2.4,2.4v8.4   C27.4,13.2,26.3,14.3,25,14.3z" />
        <path d="M17.4,17.4L17.4,17.4c-0.9,0.9-2.5,0.9-3.4,0l-6-6C7.1,10.5,7.1,9,8,8l0,0c0.9-0.9,2.5-0.9,3.4,0l6,6   C18.4,14.9,18.4,16.5,17.4,17.4z" />
        <path d="M14.3,25L14.3,25c0,1.3-1.1,2.4-2.4,2.4H3.4C2.1,27.4,1,26.3,1,25l0,0c0-1.3,1.1-2.4,2.4-2.4h8.4   C13.2,22.6,14.3,23.7,14.3,25z" />
        <path d="M17.4,32.6L17.4,32.6c0.9,0.9,0.9,2.5,0,3.4l-6,6C10.5,42.9,9,42.9,8,42l0,0c-0.9-0.9-0.9-2.5,0-3.4l6-6   C14.9,31.6,16.5,31.6,17.4,32.6z" />
        <path d="M25,35.7L25,35.7c1.3,0,2.4,1.1,2.4,2.4v8.4c0,1.3-1.1,2.4-2.4,2.4l0,0c-1.3,0-2.4-1.1-2.4-2.4v-8.4   C22.6,36.8,23.7,35.7,25,35.7z" />
        <path d="M32.6,32.6L32.6,32.6c0.9-0.9,2.5-0.9,3.4,0l6,6c0.9,0.9,0.9,2.5,0,3.4l0,0c-0.9,0.9-2.5,0.9-3.4,0l-6-6   C31.6,35.1,31.6,33.5,32.6,32.6z" />
        <path d="M35.7,25L35.7,25c0-1.3,1.1-2.4,2.4-2.4h8.4c1.3,0,2.4,1.1,2.4,2.4l0,0c0,1.3-1.1,2.4-2.4,2.4h-8.4   C36.8,27.4,35.7,26.3,35.7,25z" />
        <path d="M32.6,17.4L32.6,17.4c-0.9-0.9-0.9-2.5,0-3.4l6-6C39.5,7.1,41,7.1,42,8l0,0c0.9,0.9,0.9,2.5,0,3.4l-6,6   C35.1,18.4,33.5,18.4,32.6,17.4z" />
      </g>
    </svg>
  );
};

// eslint-disable-next-line functional/immutable-data
Spinner.defaultProps = {
  className: '',
};
