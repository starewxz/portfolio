/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    theme: {
        extend: {
            keyframes: {
                'slide-in-top': {
                    '0%': { transform: 'translateY(-40%) scale(0.95)', opacity: '0' },
                    '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
                },
                'slide-in-left': {
                    '0%': { transform: 'translateX(-40%) scale(0.95)', opacity: '0' },
                    '100%': { transform: 'translateX(0) scale(1)', opacity: '1' },
                },
                'fade-in': {
                    '0%': { opacity: '0', transform: 'scale(0.96)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                'slide-in-right': {
                    '0%': { transform: 'translateX(40%) scale(0.95)', opacity: '0' },
                    '100%': { transform: 'translateX(0) scale(1)', opacity: '1' },
                },
            },
            animation: {
                'slide-in-top': 'slide-in-top 0.8s ease-out forwards',
                'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
                'fade-in': 'fade-in 1s ease-out forwards',
                'fade-in-2': 'fade-in 2s ease-out forwards',
                'slide-in-top-delay': 'slide-in-top 0.8s ease-out forwards 0.3s',
                'slide-in-left-delay': 'slide-in-left 0.8s ease-out forwards 0.3s',
                'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.68,-0.55,0.265,1.55) forwards',
                'slide-in-right-delay': 'slide-in-right 0.8s ease-out forwards 0.3s',
            }
        },
    },
    plugins: [],
}

