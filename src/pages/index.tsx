import { Header } from '../components/Header/index'
import { HomeBanner } from '../components/HomeBanner'
import { Stack, Flex, Heading, Box, Divider, Text, useBreakpointValue, VStack, HStack, Center } from '@chakra-ui/react'
import { Icon } from '../components/Icon'
import { HomeSwiper } from '../components/HomeSwiper'

export default function Home() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <>
      <Header />
      <HomeBanner />
      <Box mx={['0','5']} mb='8'>
        { isWideVersion ?
          <Flex>
          <Stack direction='row' mt='120' spacing='140px' maxWidth='1440px' marginX='auto'>
            <Icon text='vida noturna' src='images/icons/cocktail.svg'/>
            <Icon text='praia' src='images/icons/surf.svg'/>
            <Icon text='moderno' src='images/icons/building.svg'/>
            <Icon text='clássico' src='images/icons/museum.svg'/>
            <Icon text='e mais...' src='images/icons/earth.svg'/>
          </Stack>
        </Flex>
        :
        <>
          <Flex justify='center' align='center' mt='8'>
            <HStack spacing={20}>
              <VStack spacing={5}>
                <Icon text='vida noturna' src='images/icons/cocktail.svg'/>
                <Icon text='praia' src='images/icons/surf.svg'/>
              </VStack>
              <VStack spacing={5}>
                <Icon text='moderno' src='images/icons/building.svg'/>
                  <Icon text='clássico' src='images/icons/museum.svg'/>
              </VStack>
            </HStack>
          </Flex>
          <Center mt='4' mb='10'>
            <Icon text='e mais...' src='images/icons/earth.svg'/>
          </Center>
        </>
        }
        
        <Divider marginX='auto' bgColor='gray.800' h='2px' w='90px' />
        <Center mt='10' color='gray.800'>
          { isWideVersion 
            ? <Heading>Vamos nessa?</Heading>
            : <Heading size='lg'>Vamos nessa?</Heading>
          }
          
        </Center>
        <Center mb='10'>
          { isWideVersion 
            ? <Heading>Então escolha seu continente</Heading>
            : <Heading size='lg'>Então escolha seu continente</Heading>
          }
        </Center>
        <HomeSwiper />
      </Box>
      <Flex my='8' align='center' justify='center'>
        <Text>Made by Lucas Rocha 🚀</Text>
      </Flex>
    </>
  )
}
