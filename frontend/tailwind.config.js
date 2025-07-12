/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: {
                    950: '#0f172a',
                }
            },
            dropShadow: {
                'glow': '0 0 10px rgba(59, 130, 246, 0.5)',
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%': { textShadow: '0 0 10px rgba(59, 130, 246, 0.5)' },
                    '100%': { textShadow: '0 0 20px rgba(59, 130, 246, 0.8)' },
                }
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
}
