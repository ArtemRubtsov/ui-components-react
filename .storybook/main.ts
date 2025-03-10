import { dirname, join } from 'path'
import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-essentials'),
    '@chromatic-com/storybook',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  docs: {},
  viteFinal: (config) => {
    config.build = config.build || {};
    config.build.sourcemap = false;
    config.base = '/ui-components-react/'; 
    config.publicDir = '../public';
    return config;
  },
  typescript: {
    check: true, 
    reactDocgen: 'react-docgen-typescript', 
  },
}
export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
