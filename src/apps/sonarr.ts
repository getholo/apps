import App from '@getholo/framework';

const sonarr = new App({
  name: 'sonarr',
  image: 'linuxserver/sonarr:preview',
  paths: {
    config: {
      container: '/config',
      host: 'appdata'
    },
    media: {
      container: '/media',
      host: 'media'
    },
    downloads: {
      container: '/downloads',
      host: 'downloads'
    }
  },
  network: {
    port: 8989,
  }
});

export default sonarr;
