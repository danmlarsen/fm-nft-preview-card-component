/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            colors: {
                'soft-blue': 'hsl(215, 51%, 70%)',
                cyan: 'hsl(178, 100%, 50%)',
                'verydark-blue-900': 'hsl(217, 54%, 11%)',
                'verydark-blue-700': 'hsl(216, 50%, 16%)',
                'verydark-blue-500': 'hsl(215, 32%, 27%)',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
