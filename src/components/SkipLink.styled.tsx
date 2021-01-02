import { styled } from 'twind/styled/react';

export type SkipLinkProps = {
  /**
   * Optionally render children
   */
  children?: React.ReactNode;
  /**
   * Instance-level classNames will override local classNames
   */
  className?: string;
  /**
   * The id of the content to skip to
   */
  contentId: string;
  /**
   * Optionally provide a style object
   */
  style?: React.CSSProperties;
};

export const SkipLink = styled.a.attrs((props) => ({
  id: 'skip-link',
  // Property 'contentId' does not exist on type 'BaseProps'.
  href: `#${props.contentId}`,
  children: props.children || 'Skip to Content',
}))<SkipLinkProps>`
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
    override:(${(props) => props.className})
`;
