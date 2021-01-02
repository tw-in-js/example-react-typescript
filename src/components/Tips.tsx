import * as React from 'react';
import { tw } from 'twind';
import { Emoji } from './Emoji';

export const Tips = () => {
  return (
    <section
      className={tw`text-sm rounded-lg p-4 my-8 bg-gradient-to-br from-purple-900 to-purple-800 shadow-xl`}
    >
      <span
        className={tw`font(medium) text(xl yellow-100 uppercase) tracking-wider`}
      >
        <Emoji alt="tip" symbol="💡" /> Tips
      </span>
      <ul className={tw`list-disc ml-8 children:(text-blue-100 my-1)`}>
        <li>
          You can see the derived classNames for each button in a couple ways:
          <ol className={tw`list-decimal ml-8 children:(text-blue-100 my-1)`}>
            <li>Hover over a button to see a popup title</li>
            <li>Click a button and inspect the Console output</li>
          </ol>
        </li>
        <li>
          Hit <kbd>Shift</kbd> + <kbd>Tab</kbd> after clicking the first button
          to access the hidden <code>{'<SkipLink />'}</code> component
        </li>
        <li>
          All components that use the <code>styled</code> API have a{' '}
          <code>.styled.tsx</code> extension.
        </li>
      </ul>
    </section>
  );
};
