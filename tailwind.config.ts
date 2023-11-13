import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'poppins-400': '400',
        'poppins-500': '500',
        'poppins-600': '600',
        'poppins-700': '700',
        'manrope-500': '500',
        'inter-500': '500',
        'inter-600': '600',
      },
    },
  },
  plugins: [],
};
export default config;
