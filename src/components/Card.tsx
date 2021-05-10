import { Box, Flex, Heading, Text, Image} from '@chakra-ui/react'

type CardProps = {
  city: string;
  country: string;
  flagUrl: string;
  bgImageUrl: string;
}

export function Card({ city, country, flagUrl, bgImageUrl }: CardProps) {
  return (
    <Box height="279px" pos='relative'>
      <Box
        bgImage={`url(/images/card-images/${bgImageUrl})`}
        bgSize='cover' 
        bgPosition='center' 
        h='173px'        
        borderTopRadius='md' 
      />
        <Flex
          border='1px'
          borderColor='yellowWithOpacity.500'
          borderTopColor='transparent'
          borderBottomRadius='md'>
          <Box>
            <Heading
              size='md'
              ml='8'
              mt='4'>{city}
            </Heading>
            <Text
              ml='8'
              mt='4'
              mb='5'>{country}
            </Text>
          </Box>
          <Box>
            <Image
              src={`/images/card-images/${flagUrl}`}
              h='40px'
              w='40px'
              pos='absolute'
              right='10'
              bottom='10' />
          </Box>
        </Flex>
    </Box>
  )
}