import { animation } from 'twind/css';

export const slowspin = animation('5s infinite linear', {
  from: {
    transform: 'rotate(0)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});
