import {Config} from '@stencil/core';
import {postcss} from "@stencil/postcss";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

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
      serviceWorker: null, // disable service workers
      copy: [
        {src: 'tailwind.css'}
      ]
    },
  ],
  plugins: [
    postcss({
      plugins: [
        tailwindcss("./tailwind.config.js"),
        autoprefixer(),
      ]
    })
  ]
};
