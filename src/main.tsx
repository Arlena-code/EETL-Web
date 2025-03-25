import React from 'react';
import { createRoot } from 'react-dom/client';
import RootApp from './RootApp';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);