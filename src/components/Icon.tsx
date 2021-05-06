import { Image, Box, Text } from '@chakra-ui/react'

type IconProps = {
  text: string;
  src: string;
}


export function Icon({text , src}: IconProps) {
  return (
    <Box w='200px' h='200px'>
      <Image w='50%' marginX='auto' src={src}></Image>
      <Text fontSize='2xl' mt='4' textAlign='center' fontWeight='600'>{text}</Text>
    </Box>
  )
}