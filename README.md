# ʕ •́؈•̀) `workers-typescript-template`

A batteries included template for kick starting a TypeScript Cloudflare worker project to power multiple apps with a single script since Workers is limited to 30 scripts.

## 🔋 Getting Started

This template is meant to be used with [Wrangler](https://github.com/cloudflare/wrangler). If you are not already familiar with the tool, we recommend that you install the tool and configure it to work with your [Cloudflare account](https://dash.cloudflare.com). Documentation can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler/).

To generate using Wrangler, run this command:

```bash
wrangler generate my-ts-multiapp-project https://github.com/jahands/worker-typescript-template-multiapp
```

### 👩 💻 Developing

[`src/index.js`](./src/index.ts) calls the request handler in [`src/apps/example/example.ts`](./src/handler.ts), and will return the [request method](https://developer.mozilla.org/en-US/docs/Web/API/Request/method) for the given request.

To add your app to the project, simple create a new file for your app and import it:
```typescript
import { handleMyApp } from './apps/myapp/myapp'
const handlers = {
  'myapp.com': handleMyApp
}
```
Any number of apps can be run from the same script on any domain/subdomain, as long as the built project is no more than 1MB.

For maximum versitility, each handler is given the event instead of a request, in case you want to use event.waitUntil() etc in an app.

### 🧪 Testing

This template comes with mocha tests which simply test that the request handler can handle each request method. `npm test` will run your tests.

### ✏️ Formatting

This template uses [`prettier`](https://prettier.io/) to format the project. To invoke, run `npm run format`.

### 👀 Previewing and Publishing

For information on how to preview and publish your worker, please see the [Wrangler docs](https://developers.cloudflare.com/workers/tooling/wrangler/commands/#publish).

## 🤢 Issues

If you run into issues with this specific project, please feel free to file an issue [here](https://github.com/jahands/worker-typescript-template-multiapp/issues). If the problem is with Wrangler, please file an issue [here](https://github.com/cloudflare/wrangler/issues).

## ⚠️ Caveats

The `service-worker-mock` used by the tests is not a perfect representation of the Cloudflare Workers runtime. It is a general approximation. We recommend that you test end to end with `wrangler dev` in addition to a [staging environment](https://developers.cloudflare.com/workers/tooling/wrangler/configuration/environments/) to test things before deploying.
