import * as React from 'react';
import { tw, apply } from 'twind';
import { Transition } from '@headlessui/react';
import type { BaseComponent } from '../types';

export interface AlertProps extends BaseComponent {
  /**
   * Determines rather the user can close the alert box
   */
  closable?: boolean;
  /**
   * The URL of the image
   */
  src?: string;
  /**
   * An optional title to be displayed
   */
  title?: string;
  /**
   * Determines the color of the alert
   */
  variant?: 'success' | 'primary' | 'warning' | 'error' | 'default' | 'info';
}

const colorMap = {
  default: 'orange',
  success: 'green',
  primary: 'blue',
  warning: 'yellow',
  error: 'red',
  info: 'gray',
};

export const Alert = ({
  title,
  children,
  className = '',
  closable = false,
  variant = 'default',
  style = {},
}: AlertProps) => {
  const [show, setShow] = React.useState(true);
  const color = colorMap[variant];
  const appliedCclassNames = apply`
    border-l-4 
    p-4 
    flex 
    flex-wrap
    items-center 
    justify-between 
    ${[`bg-${color}-100`, `border-${color}-500`, `text-${color}-800`]}`;
  return (
    <Transition
      show={show}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-200 transform"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={tw(appliedCclassNames, className)}
        role="alert"
        style={style}
      >
        <div>
          {title && <p className={tw`font-semibold`}>{title}</p>}
          {children}
        </div>
        {closable && <button onClick={() => setShow(false)}>Close</button>}
      </div>
    </Transition>
  );
};
