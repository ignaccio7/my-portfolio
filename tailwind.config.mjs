/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: 'var(--color-primary)',
        primaryLight: 'var(--color-primary-light)',
        secondary: 'var(--color-secondary)',
        third: 'var(--color-third)',
        text: 'var(--color-white)',
        black: 'var(--color-black)',
        gray: 'var(--color-gray)',
        grayLight: 'var(--color-gray-light)'
      },
      fontSize: {
        step0: "var(--step-0)",
        step1: "var(--step-1)",
        step2: "var(--step-2)",
        step3: "var(--step-3)",
        step4: "var(--step-4)",
        step5: "var(--step-5)",
      },
    },
  },
  plugins: [],
};
