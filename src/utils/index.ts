import type { Context } from 'twind';
export const __DEV__ = true;

// process.env
//   ? process.env.NODE_ENV === 'development'
//   : import.meta.env.NODE_ENV === 'development';

export const logClassNames = (
  classNames: string,
  children: React.ReactNode,
): void => {
  // If children is array, reduce it to a single string
  // This is probably still pretty brittle, but okay for demo purposes.
  // Also, that assertion is gross but I don't want to spend more time on it right now
  const buttonText = Array.isArray(children)
    ? children.reduce((acc, value) => {
        return typeof value === 'string' ? acc + value : acc;
      }, '')
    : children;
  if (__DEV__) {
    console.log(
      `Derived classNames for the "${(buttonText as string).toUpperCase()}" Button:`,
    );
    console.log(classNames);
  }
};

export function lazy(arg: TemplateStringsArray) {
  return ({ tw }: Context) => tw(arg);
}
