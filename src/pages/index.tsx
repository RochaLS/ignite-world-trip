import { Header } from '../components/Header/index'
import { HomeBanner } from '../components/HomeBanner'
import { HStack, Flex, Heading, Box, Divider} from '@chakra-ui/react'
import { Icon } from '../components/Icon'
import { HomeSwiper } from '../components/HomeSwiper'




export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <Box mx='5' mb='8'>
        <Flex>
          <HStack mt='120' spacing='140px' maxWidth='1440px' marginX='auto'>
            <Icon text='vida noturna' src='images/icons/cocktail.svg'/>
            <Icon text='praia' src='images/icons/surf.svg'/>
            <Icon text='moderno' src='images/icons/building.svg'/>
            <Icon text='clássico' src='images/icons/museum.svg'/>
            <Icon text='e mais...' src='images/icons/earth.svg'/>
          </HStack>
        </Flex>
        <Divider marginX='auto' bgColor='gray.800' h='2px' w='90px' />
        <Flex direction='column'justify='center' align='center' my='10' color='gray.800'>
          <Heading text-align='center'>Vamos nessa?</Heading>
          <Heading>Então escolha seu continente</Heading>
        </Flex>
        <HomeSwiper />
      </Box>
    </>
  )
}
