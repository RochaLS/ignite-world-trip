import { Box, Heading, Text } from '@chakra-ui/react'
import { ReactElement } from 'react'

type ContinentIconProps = {
  heading: string
  text: string
}

export function ContinentIcon({ heading, text }: ContinentIconProps) {
  return (
    <Box>
      <Heading color='yellow.500' textAlign='center'>{heading}</Heading>
      <Text textAlign='center' fontWeight='600'>{text}</Text>
    </Box>
  )
}