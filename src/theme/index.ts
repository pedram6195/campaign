import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

var theme = extendTheme(
  {
    breakpoints: {
      base: '0px',
      sm: '375px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1900px',
    },
    colors: {
      deepBlack: {
        50: '#F3F2F2',
        75: '#ECEBEA',
        100: '#DDDBDA',
        200: '#C9C7C5',
        300: '#B0ADAB',
        400: '#969492',
        500: '#706E6B',
        600: '#514F4D',
        700: '#3E3E3C',
        800: '#2B2826',
        900: '#080707',
      },
      neutral: {
        0: '#FFFFFF',
        10: '#FAFBFC',
        20: '#F4F5F7',
        30: '#EBECF0',
        40: '#DFE1E6',
        50: '#C1C7D0',
        60: '#B3BAC5',
        70: '#A5ADBA',
        80: '#97A0AF',
        90: '#8993A4',
        100: '#7A869A',
        200: '#6B778C',
        300: '#5E6C84',
        400: '#505F79',
        500: '#42526E',
        600: '#344563',
        700: '#253858',
        800: '#172B4D',
        900: '#091E42',
      },
      blue: {
        500: '#0065FF',
        600: '#0052CC',
        700: '#0747A6',
      },
      red: {
        500: '#DE350B',
        600: '#BF2600',
        700: '#a10808',
      },
      yellow: {
        500: '#FFAB00',
        600: '#FF991F',
        700: '#FF8B00',
      },
      green: {
        500: '#36B37E',
        600: '#00875A',
        700: '#006644',
      },
    },
    direction: 'rtl',
    fonts: {
      heading: 'var(--font-iransansx)',
      body: 'var(--font-iransansx)',
    },
    styles: {
      global: {
        html: { fontSize: '16px' },
        '*': {
          fontVariationSettings: "'dots' 3",
          fontFeatureSettings: "'ss02'",
        },
      },
    },
    components: {
      Link: {
        baseStyle: {
          '&:hover': { textDecoration: 'none' },
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'blue' })
)

export default theme
