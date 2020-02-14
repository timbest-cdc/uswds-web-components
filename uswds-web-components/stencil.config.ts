import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'uswds-web-components',
  globalStyle: 'src/global/uswds-2.5.0.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
