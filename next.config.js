// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: [process.env.IMAGE_DOMAIN],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  }
});
