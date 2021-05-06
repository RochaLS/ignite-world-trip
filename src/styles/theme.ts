import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    yellow: {
      500: '#FFBA08',
    },
    yellowWithOpacity: {
      500: 'rgba(255, 186, 8, 0.5)'
    },
    gray: {
      300: '#DADADADA',
      500: '#999999',
      800: '#47585B',
    },
    grayWithOpacity: {
      500: 'rgba(153, 153, 153, 0.5)'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800'
      }
    }
  }
})