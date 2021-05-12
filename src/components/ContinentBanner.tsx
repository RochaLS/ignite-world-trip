import { Box, Flex, Heading, useBreakpointValue } from '@chakra-ui/react'

export function ContinentBanner() {
  return (
    <Box
      w='100wh'
      h={['150px','500px']}
      bgImage="url('/images/continents/europe2.png')"
      bgSize='cover'
      bgPosition='center'
    >
      <Flex alignItems={['center','flex-end']} justify='center' h={['150px','500px']}>
        <Heading
          fontWeight='500'
          color='white'
          size='2xl'
          mb={['0', '100px']}
          >
          Europa
        </Heading>
      </Flex>
    </Box>
  )
}