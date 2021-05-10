import { Box, Flex, Heading } from '@chakra-ui/react'

export function ContinentBanner() {
  return (
    <Box
      w='100wh'
      h='500px'
      bgImage="url('/images/continents/europe2.png')"
      bgSize='cover'
      bgPosition='center'>
      <Flex alignItems='flex-end' h='500px'>
        <Heading
          fontWeight='500'
          color='white'
          size='2xl'
          mb='100px'
          ml='60px'>
          Europa
        </Heading>
      </Flex>
    </Box>
  )
}