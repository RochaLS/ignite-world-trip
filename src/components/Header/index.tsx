import { Heading, Flex, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex align='center' justify='center' h='100px'>
      <Image src='/images/logo.svg' />
    </Flex>
  )
}