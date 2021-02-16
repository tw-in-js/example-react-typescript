import * as React from 'react';
import { tw, apply } from 'twind';
import type { BaseComponent } from '../types';

export interface SkipLinkProps extends BaseComponent {
  /**
   * The id of the content to skip to
   */
  contentId: string;
}

const appliedClassNames = apply`
bg-blue-600 
text(white base) 
z-50 
absolute 
inline-block 
m-4 
px-2 
rounded-full 
-top-12
focus:top-0 
transition-all 
duration-300  
`;

export const SkipLink = (props: SkipLinkProps) => {
  const { children, className = '', contentId, ...rest } = props;
  return (
    <a
      {...rest}
      href={`#${contentId}`}
      className={tw(appliedClassNames, className)}
    >
      {children || 'Skip to Content'}
    </a>
  );
};

// eslint-disable-next-line functional/immutable-data
SkipLink.defaultProps = {
  className: '',
};
