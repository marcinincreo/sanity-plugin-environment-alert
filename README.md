# sanity-plugin-environment-alert

Sanity Studio plugin that renders a tinted banner at the top of the Studio navbar to indicate the current dataset or environment (e.g. `development` / `staging` / `production`).

Useful for avoiding "wait, was I editing prod?" mistakes when you switch between multiple datasets.

## Installation

```sh
npm install sanity-plugin-environment-alert
# or
pnpm add sanity-plugin-environment-alert
# or
yarn add sanity-plugin-environment-alert
```

## Usage

Add the plugin to your `sanity.config.ts` (or `.tsx`/`.js`):

```ts
import { defineConfig } from "sanity";
import { environmentAlert } from "sanity-plugin-environment-alert";

export default defineConfig({
  // ...
  plugins: [
    environmentAlert([
      { dataset: "development", tone: "caution", environment: "dev" },
      { dataset: "staging", tone: "primary", environment: "staging" },
      { dataset: "production", tone: "critical", environment: "production" },
    ]),
  ],
});
```

Called with no arguments, the plugin uses a default rule that highlights the `development` dataset:

```ts
plugins: [environmentAlert()],
```

The current dataset is read from the active Sanity workspace at runtime — no need to wire it up yourself.

## API

### `environmentAlert(rules?: EnvironmentAlertRule[])`

```ts
type EnvironmentAlertRule = {
  /** The dataset name this rule applies to. Matched against the active workspace's dataset. */
  dataset: string;
  /** @sanity/ui Card tone — controls the banner colour. */
  tone: "caution" | "positive" | "critical" | "primary";
  /** Optional label shown in the banner. Falls back to the dataset name. */
  environment?: string;
};
```

When the active workspace's dataset matches a rule, a banner like `This is staging environment` is rendered above the default navbar.

## Peer dependencies

- `sanity` >= 3
- `@sanity/ui` >= 2
- `react` >= 18

## License

[MIT](./LICENSE)