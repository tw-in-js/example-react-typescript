import * as React from 'react';
import { render } from 'react-dom';
import './twind.config';
import 'twind/shim';
import App from './App';

const rootElement = document.getElementById('root');
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
