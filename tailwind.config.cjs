/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
	theme: {
		extend: {
            colors: {
                primary: '#ff0a0a',
                dark: '#1c1c1c',
                darkAccent: '#242424',
                light: '#EEEEEE',
                lightAccent: '#D5D5D5',
            }
        },
	},
	plugins: [],
}
