# @getholo/apps

This repository contains two example apps which use the **@getholo/framework** under the hood.

## Usage
Before importing **@getholo/apps** in your code, you should initialise the framework first. Within the initialisation you should set a couple of parameters for Traefik: domain, email and provider.

Afterwards you need to import the config first before importing **@getholo/apps**.

### Initialisation example
```typescript
// config.ts

import config from '@getholo/framework/config';

// Your domain name
config.traefik.domain = 'domain.tld';

// Your email address for letsencrypt
config.traefik.email = 'user@domain.tld';

// Any Traefik V2 provider
config.traefik.provider = {
  name: 'cloudflare',
  env: {
    CF_DNS_API_TOKEN: 'DNS:Edit token',
    CF_ZONE_API_TOKEN: 'Zone:Read token'
  }
};
```

### Using the apps
```typescript
// index.ts

import './config';

import apps from '@getholo/apps';

async function main() {
  const { sonarr, traefik } = apps;

  await traefik.remove();
  await sonarr.remove();

  await traefik.pull();
  await sonarr.pull();

  await traefik.create();
  await sonarr.create();

  await traefik.start();
  await sonarr.start();
}

main();

```

## Notes
This is just an example on how to use the **@getholo/framework**. I recommend you to fork this repository and add your own apps to explore the full capabilities of the framework.
