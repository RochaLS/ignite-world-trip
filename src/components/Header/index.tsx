import { Heading, Flex, Image, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

export function Header() {
  return (
    <Flex align='center' justify='center' h='100px'>
      <Link href='/'>
        <ChakraLink >
          <Image src='/images/logo.svg' />
        </ChakraLink>
      </Link>
    </Flex>
  )
}