/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'custom-pink-light': '#ff338b',
				'custom-pink': '#FF006E',
				'custom-pink-dark': '#cc0058',
				'custom-pink-darker': '#990042',
				'custom-blue-light': '#66a1ff',
				'custom-blue': '#3A86FF',
				'custom-blue-dark': '#1a71ff',
				'custom-blue-darker': '#0058e6',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				lato: ['Lato', 'sans-serif'],
			},
			animation: {
				'bounce-slow': 'bounce 2s infinite',
			},
		},
	},
	plugins: [],
};
