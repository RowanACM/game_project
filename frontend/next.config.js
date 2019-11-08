const withCSS = require('@zeit/next-css');
const withProgressBar = require('next-progressbar');
const withSass = require('@zeit/next-sass');

const env = process.env.PHASE_ENV || 'development';

module.exports = withProgressBar(
  withSass(
    withCSS({
      poweredByHeader: false,
      env: {
        PHASE_ENV: env,
      },
    }),
  ),
);
