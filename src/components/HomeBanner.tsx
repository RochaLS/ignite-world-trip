import { Box, Flex, Heading, Text, Image, useBreakpointValue } from '@chakra-ui/react'

export function HomeBanner() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box w='100wh' h={['173px','335px']} bgImage="url('/images/Background.png')" bgSize='cover'>'
      <Flex align='center' justify={['left', 'space-around']} marginX={['2','20']}>
        <Box>
          { isWideVersion ?
          <>
            <Heading fontWeight='500' color='white' size='2xl'>
              5 Continentes,<br/>
              infinitas possibilidades.
            </Heading>
            <Text fontWeight='400' color='gray.300' fontSize={['md', 'xl']} mt='8'>Chegou a hora de tirar do papel a viagem que <br/> você sempre sonhou.</Text>
          </>
           :
          <>
            <Heading fontWeight='500' color='white' size='lg' w='100%'>
              5 Continentes
              infinitas possibilidades.
            </Heading>
            <Text fontWeight='400' color='gray.300' fontSize='md' mt='4'>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
          </>
          }
          
        </Box>
        {isWideVersion && <Image src='/images/Airplane.svg' pos='relative' bottom='-50px' />}
      </Flex>
    </Box>
  )
}