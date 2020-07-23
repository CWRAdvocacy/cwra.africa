import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import { default as HeadTitle } from '../components/Head/Title'
import { default as HeadFavicons } from '../components/Head/Favicons'
import { default as HeadOpenGraph } from '../components/Head/OpenGraph'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <HeadTitle/>
      <HeadFavicons/>
      <HeadOpenGraph/>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default MyApp
