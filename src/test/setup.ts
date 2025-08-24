import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import { setMedia } from 'mock-match-media';

setMedia({
  width: '1024px',
  type: 'screen',
});

afterEach(() => {
  cleanup();
});