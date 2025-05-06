# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Install Skelaton UI
```bash
npm i -D @skeletonlabs/skeleton @skeletonlabs/skeleton-svelte
```

add to `/src/app.css`
```
@import 'tailwindcss'; <<< ( may already be here)

@import '@skeletonlabs/skeleton';
@import '@skeletonlabs/skeleton/optional/presets';
@import '@skeletonlabs/skeleton/themes/cerberus';

@source '../node_modules/@skeletonlabs/skeleton-svelte/dist';
```

Set Active Theme
Open /src/app.html, then set the data-theme attribute on the HTML tag to define the active theme.

```
<html data-theme="<Your_Theme_Here>">...</html>
```

Start your dev server
```
npm run dev
```



> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
