import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ÐžÑÐ½Ð¾Ð²Ð½Ð°Ñ Ð¿Ð°Ð»Ð¸Ñ‚Ñ€Ð° One Beauty
        primary: {
          50: '#f0fdf4',   // ÑÐ²ÐµÑ‚Ð»Ñ‹Ð¹ Ð·ÐµÐ»ÐµÐ½Ñ‹Ð¹ Ð´Ð»Ñ Ñ„Ð¾Ð½Ð¾Ð²
          100: '#dcfce7',  // Ð¾Ñ‡ÐµÐ½ÑŒ ÑÐ²ÐµÑ‚Ð»Ñ‹Ð¹ Ð·ÐµÐ»ÐµÐ½Ñ‹Ð¹
          500: '#22c55e',  // Ð¾ÑÐ½Ð¾Ð²Ð½Ð¾Ð¹ Ð·ÐµÐ»ÐµÐ½Ñ‹Ð¹ (ÑÑ€ÐºÐ¸Ð¹, Ð¶Ð¸Ð·Ð½ÐµÐ½Ð½Ñ‹Ð¹)
          600: '#16a34a',  // Ñ‚ÐµÐ¼Ð½Ñ‹Ð¹ Ð·ÐµÐ»ÐµÐ½Ñ‹Ð¹ Ð´Ð»Ñ Ð°ÐºÑ‚Ð¸Ð²Ð½Ñ‹Ñ… ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð²
          700: '#15803d',  // Ñ‚ÐµÐ¼Ð½Ñ‹Ð¹ Ð·ÐµÐ»ÐµÐ½Ñ‹Ð¹ Ð´Ð»Ñ Ñ‚ÐµÐºÑÑ‚Ð°
          900: '#14532d',  // ÑÐ°Ð¼Ñ‹Ð¹ Ñ‚ÐµÐ¼Ð½Ñ‹Ð¹ Ð·ÐµÐ»ÐµÐ½Ñ‹Ð¹
        },
        
        // ÐÐµÐ¹Ñ‚Ñ€Ð°Ð»ÑŒÐ½Ñ‹Ðµ Ð±ÐµÐ¶ÐµÐ²Ñ‹Ðµ Ñ‚Ð¾Ð½Ð°
        neutral: {
          50: '#fefdf8',   // ÐºÑ€ÐµÐ¼Ð¾Ð²Ð¾-Ð±ÐµÐ»Ñ‹Ð¹
          100: '#fef7ed',  // ÑÐ²ÐµÑ‚Ð»Ð¾-Ð±ÐµÐ¶ÐµÐ²Ñ‹Ð¹
          200: '#fed7aa',  // ÑÐ²ÐµÑ‚Ð»Ñ‹Ð¹ Ð±ÐµÐ¶ÐµÐ²Ñ‹Ð¹
          300: '#fdba74',  // ÑÑ€ÐµÐ´Ð½Ð¸Ð¹ Ð±ÐµÐ¶ÐµÐ²Ñ‹Ð¹
          500: '#f97316',  // Ñ‚ÐµÐ¿Ð»Ñ‹Ð¹ Ð±ÐµÐ¶ÐµÐ²Ð¾-Ð¾Ñ€Ð°Ð½Ð¶ÐµÐ²Ñ‹Ð¹ Ð°ÐºÑ†ÐµÐ½Ñ‚
          600: '#ea580c',  // Ð±Ð¾Ð»ÐµÐµ Ð½Ð°ÑÑ‹Ñ‰ÐµÐ½Ð½Ñ‹Ð¹ Ð±ÐµÐ¶ÐµÐ²Ñ‹Ð¹
          800: '#9a3412',  // Ñ‚ÐµÐ¼Ð½Ñ‹Ð¹ Ð±ÐµÐ¶ÐµÐ²Ñ‹Ð¹
          900: '#7c2d12',  // ÑÐ°Ð¼Ñ‹Ð¹ Ñ‚ÐµÐ¼Ð½Ñ‹Ð¹ Ð±ÐµÐ¶ÐµÐ²Ñ‹Ð¹
        },
        
        // Ð¡Ð¿ÐµÑ†Ð¸Ð°Ð»ÑŒÐ½Ñ‹Ðµ Ñ†Ð²ÐµÑ‚Ð° Ð´Ð»Ñ wellness
        wellness: {
          mint: '#6ee7b7',     // Ð¼ÑÑ‚Ð½Ð¾-Ð·ÐµÐ»ÐµÐ½Ñ‹Ð¹ Ð´Ð»Ñ ÑƒÑÐ¿Ð¾ÐºÐ¾ÐµÐ½Ð¸Ñ
          sage: '#84cc16',     // ÑˆÐ°Ð»Ñ„ÐµÐ¹Ð½Ñ‹Ð¹ Ð´Ð»Ñ Ð¿Ñ€Ð¸Ñ€Ð¾Ð´Ð½Ñ‹Ñ… ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð²
          cream: '#fffbeb',    // ÐºÑ€ÐµÐ¼Ð¾Ð²Ñ‹Ð¹ Ð´Ð»Ñ ÐºÐ°Ñ€Ñ‚Ð¾Ñ‡ÐµÐº
          sand: '#fef3c7',     // Ð¿ÐµÑÐ¾Ñ‡Ð½Ñ‹Ð¹ Ð´Ð»Ñ Ñ„Ð¾Ð½Ð¾Ð²
          forest: '#065f46',   // Ð»ÐµÑÐ½Ð¾Ð¹ Ð·ÐµÐ»ÐµÐ½Ñ‹Ð¹ Ð´Ð»Ñ Ð·Ð°Ð³Ð¾Ð»Ð¾Ð²ÐºÐ¾Ð²
        },
        
        // Ð¤ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ðµ Ñ†Ð²ÐµÑ‚Ð° (Ð¾ÑÑ‚Ð¾Ñ€Ð¾Ð¶Ð½Ð¾ Ñ ÐºÑ€Ð°ÑÐ½Ñ‹Ð¼Ð¸ Ð´Ð»Ñ Health Ð¼Ð¾Ð´ÑƒÐ»Ñ)
        success: '#10b981',   // Ð·ÐµÐ»ÐµÐ½Ñ‹Ð¹ ÑƒÑÐ¿ÐµÑ…
        warning: '#f59e0b',   // Ñ‚ÐµÐ¿Ð»Ñ‹Ð¹ Ð¶ÐµÐ»Ñ‚Ð¾-Ð±ÐµÐ¶ÐµÐ²Ñ‹Ð¹ Ð´Ð»Ñ Ð¿Ñ€ÐµÐ´ÑƒÐ¿Ñ€ÐµÐ¶Ð´ÐµÐ½Ð¸Ð¹  
        info: '#06b6d4',      // Ð¼ÑÐ³ÐºÐ¸Ð¹ Ð±Ð¸Ñ€ÑŽÐ·Ð¾Ð²Ñ‹Ð¹
        error: '#dc2626',     // ÐºÑ€Ð°ÑÐ½Ñ‹Ð¹ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð´Ð»Ñ ÐºÑ€Ð¸Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸Ñ… Ð¾ÑˆÐ¸Ð±Ð¾Ðº (Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ñ€ÐµÐ´ÐºÐ¾)
      },
      
      // ÐšÐ°ÑÑ‚Ð¾Ð¼Ð½Ñ‹Ðµ Ñ‚ÐµÐ½Ð¸ Ð´Ð»Ñ ÐºÐ°Ñ€Ñ‚Ð¾Ñ‡ÐµÐº Ð¸ Ð¼Ð¾Ð´Ð°Ð»Ð¾Ð²
      boxShadow: {
        'wellness': '0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -1px rgba(34, 197, 94, 0.06)',
        'wellness-lg': '0 10px 15px -3px rgba(34, 197, 94, 0.1), 0 4px 6px -2px rgba(34, 197, 94, 0.05)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      
      // Ð¡Ð¾Ð²Ñ€ÐµÐ¼ÐµÐ½Ð½Ñ‹Ðµ border radius
      borderRadius: {
        'wellness': '12px',
        'card': '16px',
        'button': '8px',
      },
      
      // Typography scales Ð´Ð»Ñ Ð·Ð°Ð³Ð¾Ð»Ð¾Ð²ÐºÐ¾Ð²
      fontSize: {
        'wellness-xs': ['0.75rem', { lineHeight: '1rem' }],
        'wellness-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'wellness-base': ['1rem', { lineHeight: '1.5rem' }],
        'wellness-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'wellness-xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'wellness-2xl': ['1.5rem', { lineHeight: '2rem' }],
        'wellness-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'wellness-4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      
      // ÐÐ½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸ Ð´Ð»Ñ wellness cards Ð¸ transitions
      animation: {
        'wellness-fade-in': 'wellnessFadeIn 0.5s ease-in-out',
        'wellness-slide-up': 'wellnessSlideUp 0.3s ease-out',
        'wellness-pulse': 'wellnessPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wellness-bounce': 'wellnessBounce 1s infinite',
      },
      
      keyframes: {
        wellnessFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wellnessSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wellnessPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        wellnessBounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
      },
      
      // Mobile-first spacing
      spacing: {
        'wellness-xs': '0.25rem',
        'wellness-sm': '0.5rem',
        'wellness-md': '1rem',
        'wellness-lg': '1.5rem',
        'wellness-xl': '2rem',
        'wellness-2xl': '3rem',
      },
      
      // ÐšÐ°ÑÑ‚Ð¾Ð¼Ð½Ñ‹Ðµ breakpoints Ð´Ð»Ñ Ð¼Ð¾Ð±Ð¸Ð»ÑŒÐ½Ð¾Ð¹ Ð¾Ñ€Ð¸ÐµÐ½Ñ‚Ð°Ñ†Ð¸Ð¸
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

export default config
