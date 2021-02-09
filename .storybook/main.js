module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-create-react-app",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-contexts/register",
  ]
}