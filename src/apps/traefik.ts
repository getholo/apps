import App from '@getholo/framework';
import config from '@getholo/framework/config';

const traefik = new App({
  name: 'traefik',
  image: 'traefik:latest',
  commands: () => {
    return [
      ...config.traefik.getRootCommands(),
      '--api.insecure'
    ]
  },
  env: () => {
    return config.traefik.getEnv();
  },
  paths: {
    acme: {
      container: '/acme',
      host: 'appdata'
    },
    docker: {
      container: '/var/run/docker.sock',
      host: '/var/run/docker.sock',
      readOnly: true
    }
  },
  network: {
    port: 8080,
    exposePorts: [
      {
        container: 80,
        host: 80
      },
      {
        container: 443,
        host: 443
      }
    ]
  }
});

export default traefik;
