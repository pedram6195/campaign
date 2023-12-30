import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

var theme = extendTheme(
  {
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
