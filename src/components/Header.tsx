import * as React from 'react';
import { tw, apply } from 'twind';

export interface HeaderProps extends React.HTMLProps<HTMLHeadElement> {}

export const Header = (props: HeaderProps) => {
  const appliedClassNames = apply`  
    bg-gray-900 
    text-white 
    flex 
    flex-wrap 
    items-center 
    justify-center 
    py-2 
    px-2
  `;

  const { children, className = '', ...rest } = props;
  return (
    <header {...rest} className={tw(appliedClassNames, className)}>
      {children}
    </header>
  );
};

// eslint-disable-next-line functional/immutable-data
Header.defaultProps = {
  className: '',
};
