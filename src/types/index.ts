import type { InlineDirective } from 'twind';

export type InlineDirectiveMap<T extends string> = Record<T, InlineDirective>;

export type BaseComponent = {
  /**
   * The contents of the component
   */
  children?: React.ReactNode;
  /**
   * Optionally apply a className
   */
  className?: string;
  /**
   * Optionally provide an id
   */
  id?: string;
  /**
   * Optionally apply a style object
   */
  style?: React.CSSProperties;
};
