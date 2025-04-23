/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46e5', // Indigo-600
          hover: '#4338ca',   // Indigo-700
        },
        secondary: {
          DEFAULT: '#8b5cf6', // Violet-500
        },
        light: {
          bg: '#ffffff',
          card: '#f9fafb',
          text: '#374151',
          textSecondary: '#6b7280',
          border: '#e5e7eb',
        },
        dark: {
          bg: '#121212',
          card: '#111827',
          text: '#f3f4f6',
          textSecondary: '#9ca3af',
          border: '#374151',
        },
      },
      gradientColorStops: {
        'primary-start': '#4f46e5',
        'primary-end': '#8b5cf6',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} 