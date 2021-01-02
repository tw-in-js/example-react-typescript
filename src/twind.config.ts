// Extracted to a module so that the setup can also be used by Storybook
import { setup } from 'twind';
import * as colors from 'twind/colors';

setup({
  preflight: true, // do not include base style reset (default: use tailwind preflight)
  mode: 'warn', // throw errors for invalid rules (default: warn)
  hash: false, // hash all generated class names (default: false)
  darkMode: 'media', // use a different dark mode strategy (default: 'media')
  // sheet: voidSheet, // use custom sheet (default: cssomSheet in a browser or no-op)
  theme: {
    extend: {
      animation: {
        // Not being used..Just for reference
        // See src/animations for active animations
        spinner: 'spin 4s linear infinite',
      },
      colors: {
        orange: colors.orange,
        teal: colors.teal,
      },
    },
  },
});
