import { Header } from '../components/Header/index'
import { HomeBanner } from '../components/HomeBanner'
import { HStack, Flex, Image, Box, Text } from '@chakra-ui/react'
import { Icon } from '../components/Icon'


export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <Flex>
        <HStack mt='120' spacing='140px' maxWidth='1440px' marginX='auto'>
          <Icon text='vida noturna' src='images/icons/cocktail.svg'/>
          <Icon text='praia' src='images/icons/surf.svg'/>
          <Icon text='moderno' src='images/icons/building.svg'/>
          <Icon text='clássico' src='images/icons/museum.svg'/>
          <Icon text='e mais...' src='images/icons/earth.svg'/>
        </HStack>
      </Flex>
    </>
  )
}
