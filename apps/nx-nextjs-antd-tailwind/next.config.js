const withNx = require('@nrwl/next/plugins/with-nx');
const withLess = require('@zeit/next-less');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withLess({
  ...withNx({
    cssModules: false,
  }),
  ...withSass({
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
    ...withCSS({
      cssLoaderOptions: {
        url: false,
      },
    }),
  }),
});
