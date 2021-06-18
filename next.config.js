// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production'; // vendo se está em produção.

module.exports = withPWA({
  pwa: {
    dest: 'public', // destino que vou enviar o pwa
    disable: !isProd // desabilitar isso quando ele tá em produção.
  }
});
