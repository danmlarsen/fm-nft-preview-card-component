/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            colors: {
                cyan: 'hsl(178, 100%, 50%)',
                blue: {
                    900: 'hsl(217, 54%, 11%)',
                    800: 'hsl(216, 50%, 16%)',
                    700: 'hsl(215, 32%, 27%)',
                    500: 'hsl(215, 51%, 70%)',
                    default: 'hsl(215, 51%, 70%)',
                },
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
