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
        // Основная палитра One Beauty
        primary: {
          50: '#f0fdf4',   // светлый зеленый для фонов
          100: '#dcfce7',  // очень светлый зеленый
          500: '#22c55e',  // основной зеленый (яркий, жизненный)
          600: '#16a34a',  // темный зеленый для активных элементов
          700: '#15803d',  // темный зеленый для текста
          900: '#14532d',  // самый темный зеленый
        },
        
        // Нейтральные бежевые тона
        neutral: {
          50: '#fefdf8',   // кремово-белый
          100: '#fef7ed',  // светло-бежевый
          200: '#fed7aa',  // светлый бежевый
          300: '#fdba74',  // средний бежевый
          500: '#f97316',  // теплый бежево-оранжевый акцент
          600: '#ea580c',  // более насыщенный бежевый
          800: '#9a3412',  // темный бежевый
          900: '#7c2d12',  // самый темный бежевый
        },
        
        // Специальные цвета для wellness
        wellness: {
          mint: '#6ee7b7',     // мятно-зеленый для успокоения
          sage: '#84cc16',     // шалфейный для природных элементов
          cream: '#fffbeb',    // кремовый для карточек
          sand: '#fef3c7',     // песочный для фонов
          forest: '#065f46',   // лесной зеленый для заголовков
        },
        
        // Функциональные цвета (осторожно с красными для Health модуля)
        success: '#10b981',   // зеленый успех
        warning: '#f59e0b',   // теплый желто-бежевый для предупреждений  
        info: '#06b6d4',      // мягкий бирюзовый
        error: '#dc2626',     // красный только для критических ошибок (использовать редко)
      },
      
      // Кастомные тени для карточек и модалов
      boxShadow: {
        'wellness': '0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -1px rgba(34, 197, 94, 0.06)',
        'wellness-lg': '0 10px 15px -3px rgba(34, 197, 94, 0.1), 0 4px 6px -2px rgba(34, 197, 94, 0.05)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      
      // Современные border radius
      borderRadius: {
        'wellness': '12px',
        'card': '16px',
        'button': '8px',
      },
      
      // Typography scales для заголовков
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
      
      // Анимации для wellness cards и transitions
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
      
      // Кастомные breakpoints для мобильной ориентации
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
