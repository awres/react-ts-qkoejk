import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Stronka from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Stronka />
  </StrictMode>
);
