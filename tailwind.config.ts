import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default <Config>{
    content: [
        './app/components/**/*.{vue,js,ts}',
        './app/layouts/**/*.vue',
        './app/pages/**/*.vue',
        './app/app.vue',
    ],
    theme: {
        extend: {
            colors: {
                cyber: {
                    bg: '#050505',
                    surface: '#0d0d12',
                    panel: 'rgba(16, 16, 24, 0.7)',
                    purple: '#b721ff',
                    'purple-glow': 'rgba(183, 33, 255, 0.5)',
                    cyan: '#00f3ff',
                    'cyan-glow': 'rgba(0, 243, 255, 0.5)',
                    pink: '#ff0055',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Rajdhani', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
                'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
                'glitch': 'glitch 2s linear infinite',
                'glow-pulse': 'glowPulse 2s infinite',
                'spin-slow': 'spin 20s linear infinite',
                'spin-slower': 'spin 30s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                fadeInRight: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '0.5' },
                    '50%': { opacity: '0.8' },
                },
                glitch: {
                    '2%, 64%': { transform: 'translate(2px, 0) skew(0deg)' },
                    '4%, 60%': { transform: 'translate(-2px, 0) skew(0deg)' },
                    '62%': { transform: 'translate(0, 0) skew(5deg)' },
                },
                glowPulse: {
                    '0%, 100%': { boxShadow: '0 0 10px rgba(183, 33, 255, 0.2), 0 0 20px rgba(183, 33, 255, 0.2)' },
                    '50%': { boxShadow: '0 0 15px rgba(183, 33, 255, 0.6), 0 0 30px rgba(183, 33, 255, 0.6)' },
                }
            },
        },
    },
    plugins: [
        plugin(function({ addUtilities }) {
            addUtilities({
                /* Clip-path cut corners */
                '.clip-cyber': {
                    'clip-path': 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
                },
                '.clip-cyber-sm': {
                    'clip-path': 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                },
                '.clip-cyber-lg': {
                    'clip-path': 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
                },

                /* Neon glow text */
                '.text-glow-purple': {
                    'text-shadow': '0 0 7px rgba(183, 33, 255, 0.8), 0 0 15px rgba(183, 33, 255, 0.4), 0 0 30px rgba(183, 33, 255, 0.2)',
                },
                '.text-glow-cyan': {
                    'text-shadow': '0 0 7px rgba(0, 243, 255, 0.8), 0 0 15px rgba(0, 243, 255, 0.4), 0 0 30px rgba(0, 243, 255, 0.2)',
                },
            })
        }),
    ],
}
