/** @type {import('tailwindcss').Config} */

import { join } from 'path';
import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class', // 👈 enables class-based dark mode
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: []
} satisfies Config;
