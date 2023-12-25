/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        h1: ['56px', '130%'],
        h2: ['48px', '130%'],
        h3: ['40px', '130%'],
        h4: ['32px', '130%'],
        h5: ['24px', '140%'],
        h6: ['20px', '140%'],
        regular:['16px','normal'],
        large:['20px','130%']
      }
    },
    colors: {
      primary: {
        50: '#e8f4fc',
        100: '#b9ddf6',
        200: '#97ccf2',
        300: '#67b5ec',
        400: '#49a7e8',
        500: '#1c91e2',
        600: '#1984ce',
        700: '#1467a0',
        800: '#0f507c',
        900: '#0c3d5f',
      },
      secondary: {
        50: '#fff3ea',
        100: '#fddabe',
        200: '#fdc89f',
        300: '#fcaf73',
        400: '#fba058',
        500: '#fa882e',
        600: '#e47c2a',
        700: '#b26121',
        800: '#8a4b19',
        900: '#693913',
      },
      success: {
        50: '#e6f7e9',
        100: '#b0e7b9',
        200: '#8adc98',
        300: '#54cc68',
        400: '#33c24b',
        500: '#00b31e',
        600: '#00a31b',
        700: '#007f15',
        800: '#006211',
        900: '#004b0d',
      },
      error: {
        50: '#f7e6e6',
        100: '#e7b0b0',
        200: '#dc8a8a',
        300: '#cc5454',
        400: '#c23333',
        500: '#b30000',
        600: '#a30000',
        700: '#7f0000',
        800: '#620000',
        900: '#4b0000',
      },
      warning: {
        50: '#fbf7e7',
        100: '#f3e6b6',
        200: '#edd992',
        300: '#e5c861',
        400: '#e0bd42',
        500: '#d8ad13',
        600: '#c59d11',
        700: '#997b0d',
        800: '#775f0a',
        900: '#5b4908',
      },
      info: {
        50: '#e8fcf6',
        100: '#b9f6e4',
        200: '#97f2d7',
        300: '#67ecc4',
        400: '#49e9b9',
        500: '#1ce3a7',
        600: '#19cf98',
        700: '#14a177',
        800: '#0f7d5c',
        900: '#0c5f46',
      },
      white: {
        50: '#fefefe',
        100: '#fbfbfb',
        200: '#f9f9f9',
        300: '#f6f6f6',
        400: '#f5f5f5',
        500: '#f2f2f2',
        600: '#dcdcdc',
        700: '#acacac',
        800: '#858585',
        900: '#666666',
      },
      grey: {
        50: '#e9e9e9',
        100: '#bbbbbb',
        200: '#9a9a9a',
        300: '#6c6c6c',
        400: '#505050',
        500: '#242424',
        600: '#212121',
        700: '#1a1a1a',
        800: '#141414',
        900: '#0f0f0f',
      },
    },
    fontFamily: {
      sans: ['DM Sans'],
    },
   
  },
  plugins: [],
}