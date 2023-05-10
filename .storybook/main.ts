import type { StorybookConfig } from "@storybook/web-components-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  async viteFinal(config, { configType }) {
    config.optimizeDeps = config.optimizeDeps || {};
    // customize the Vite config here
    config.optimizeDeps.include = [
      ...(config.optimizeDeps?.include ?? []),
      "@storybook/web-components",
    ];
    config.optimizeDeps.exclude = [
      ...(config.optimizeDeps?.exclude ?? []),
      "lit",
      "lit-html",
    ];

    // return the customized config
    return config;
  },
  docs: {
    autodocs: true,
  },
};
export default config;
