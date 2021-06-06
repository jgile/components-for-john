import {Config} from '@stencil/core';
import {postcss} from "@stencil/postcss";

export const config: Config = {
  namespace: 'components-for-john',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
  globalStyle: './src/app.css',
  plugins: [
    postcss({
      plugins: [
        require('postcss-import'),
        require('postcss-nested'),
        require('tailwindcss'),
        require('autoprefixer'),
      ]
    })
  ]
};
