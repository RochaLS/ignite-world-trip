import { Image, Box, Text, useBreakpointValue, List, ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react'
import { BsFillCircleFill } from 'react-icons/bs'

type IconProps = {
  text: string;
  src: string;
}


export function Icon({text , src}: IconProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  
  if (isWideVersion) {
    return (
      <Box w='200px' h='200px'>
        <Image w='50%' marginX='auto' src={src}></Image>
        <Text fontSize='2xl' mt='4' textAlign='center' fontWeight='600'>{text}</Text>
      </Box>
    )
  } 

  return (
    <List>
      <ListItem fontWeight='600' fontSize='lg'>
        <ListIcon as={BsFillCircleFill} h='10px' w='10px' color='yellow.500' my='7px' />
        {text}
      </ListItem>
    </List>
  )
}