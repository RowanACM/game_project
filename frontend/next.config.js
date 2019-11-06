const withCSS = require('@zeit/next-css');
const withProgressBar = require('next-progressbar')

module.exports = withProgressBar(withCSS({
  poweredByHeader: false,
}));