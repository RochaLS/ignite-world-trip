// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

import { Text, Box, Flex, Link as ChakraLink, Heading } from '@chakra-ui/react'
import Link from 'next/link'

//Install swiper modules
SwiperCore.use([Navigation, Pagination])

export function HomeSwiper() {
  
  const slides: React.ReactElement[] = []
  const images = [
    { 
      url: 'south-america.jpg',
      heading: 'América do Sul',
      text: 'Diversificação e diversão.'
    },
    { 
      url: 'asia.jpg',
      heading: 'Ásia',
      text: 'Uma explosão cultural.'
    },
    { 
      url: 'europe.jpg',
      heading: 'Europa',
      text: 'O continente mais antigo.'
    }, 
    { 
      url: 'africa.jpg',
      heading: 'África',
      text: 'Desfrute da natureza e diversos animais.'
    }, 
    {
      url: 'north-america.jpg',
      heading: 'América do Norte',
      text: 'Um continente com diversas maravilhas naturais.'
    }, 
    { 
      url: 'oceania.jpg',
      heading: 'Oceania',
      text: 'Curta o verão.'
    }
  ]

  for (let i = 0; i < 5; i++) {
    const imgUrl = `url('/images/continents/${images[i].url}')`
    slides.push(
      <SwiperSlide key={`slide=${i + 1}`}>
        <Flex
          direction='column'
          width='100%'
          height='450px'
          align='center'
          justify='center'
          bgImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),${imgUrl}`}
          bgSize='cover'
          bgPosition='center'
          textAlign='center'
        >
          <Link href='/continent/europe'>
            <ChakraLink>
              <Heading size='2xl' fontWeight='700' color='gray.100'>{images[i].heading}</Heading>
              <Text fontSize='2xl' fontWeight='700' color='gray.300'>{images[i].text}</Text>
            </ChakraLink>
          </Link>
        </Flex>
      </SwiperSlide>
   )
  }
  return (
    <Box mx='150'>
      <Swiper
        navigation
        pagination={{clickable: true}}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides}
      </Swiper>
    </Box>
  )
}