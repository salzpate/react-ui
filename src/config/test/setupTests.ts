import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

import '@testing-library/jest-dom/vitest'

// @ts-ignore
globalThis.jest = vi;

afterEach(() => cleanup());
