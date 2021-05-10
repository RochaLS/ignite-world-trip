import { Header } from '../../components/Header'
import { Box, Flex, Heading, HStack, Text, Tooltip, Image, SimpleGrid, Center} from '@chakra-ui/react'
import { ContinentBanner } from '../../components/ContinentBanner'
import { ContinentIcon } from '../../components/ContinentIcon'
import { Card } from '../../components/Card'

export default function Continent() {
  return (
    <>
    <Header />
    <ContinentBanner />
    <Box m='20'>
      <HStack spacing='250px'>
        <Box w='50%'>
          <Text fontSize='xl' textAlign='justify'>
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <Flex justify='space-around' w='30%'>
          <ContinentIcon heading='50' text='países' />
          <ContinentIcon heading='60' text='línguas' />
          <Box>
            <Heading color='yellow.500' textAlign='center'>27</Heading>
            <HStack>
              <Text fontWeight='600'>
                cidades +100
              </Text>
              <Tooltip label='Some info...' placement='right'>
                <Image src='/images/icons/info.svg'/>
              </Tooltip>
            </HStack>
          </Box>
        </Flex>
      </HStack>
      <Heading my='20'>Cidades +100</Heading>
      <SimpleGrid columns={4} spacing={10}>
        <Card
          city='Londres'
          country='Reino
          Unido'
          bgImageUrl='london-card.png'
          flagUrl='uk.svg' />
        <Card
          city='Paris'
          country='França'
          bgImageUrl='paris-card.png'
          flagUrl='france.svg' />
        <Card
          city='Roma'
          country='Itália'
          bgImageUrl='roma-card.png'
          flagUrl='itl.svg' />
        <Card
          city='Praga'
          country='República
          Tcheca'
          bgImageUrl='praga-card.png'
          flagUrl='tcheca.svg' />
        <Card
          city='Amsterdam'
          country='Irlanda'
          bgImageUrl='amsterdam-card.png'
          flagUrl='ireland.svg' />
      </SimpleGrid>
    </Box>
    <Center>Created by Lucas Rocha 🚀</Center>
    </>
  )
}