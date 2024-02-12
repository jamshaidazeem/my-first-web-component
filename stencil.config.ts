import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'my-first-web-component',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      // This flag is what tells Stencil to use this target for validation
      isPrimaryPackageOutputTarget: true,
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
  // If this is not set, Stencil will not validate any targets
  validatePrimaryPackageOutputTarget: true,
  testing: {
    browserHeadless: 'new',
  },
};
