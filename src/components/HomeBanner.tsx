import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react'

export function HomeBanner() {
  return (
    <Box w='100wh' h='335px' bgImage="url('/images/Background.png')" bgSize='cover'>'
      <Flex align='center' justify='space-around' marginX='20'>
        <Box>
          <Heading fontWeight='500' color='white' size='2xl'>
            5 Continentes,<br/>
            infinitas possibilidades.
          </Heading>
          <Text fontWeight='400' color='gray.300' fontSize='xl' mt='8'>Chegou a hora de tirar do papel a viagem que <br/> você sempre sonhou.</Text>
        </Box>
        <Image src='/images/Airplane.svg' pos='relative' bottom='-50px' />
      </Flex>
    </Box>
  )
}