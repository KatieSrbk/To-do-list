import { extendTheme } from '@chakra-ui/react'
import { Button } from './components/button'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'rgb(186,143,255)',
        color: 'black',
      },
    },
  },
  components: {
    Button,
  },
})

export default theme
