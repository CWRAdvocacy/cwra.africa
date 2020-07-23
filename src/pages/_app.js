import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import { default as HeadTitle } from '../components/Head/Title'
import { default as Favicons } from '../components/Head/Favicons'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <HeadTitle/>
      <Favicons/>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default MyApp
