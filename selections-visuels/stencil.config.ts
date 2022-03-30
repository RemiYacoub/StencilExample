import { Config } from '@stencil/core';
import json from '@rollup/plugin-json'

export const config: Config = {
  plugins: [json()],
  namespace: 'selections-visuels',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
