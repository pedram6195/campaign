'use client'

import { Image } from '@chakra-ui/next-js'
import { Box, Button, Center, Flex, Text } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import NextImage from 'next/image'

import check from '../../../public/check.json'
import cover from '../../../public/cover.png'

export default function Success() {
  return (
    <Center h="100dvh" position="relative">
      <Image as={NextImage} alt="background-cover" src={cover} fill objectFit="cover" zIndex={1} priority />
      <Box
        position="absolute"
        w="full"
        h="full"
        right="0"
        top="0"
        zIndex={2}
        bg="linear-gradient(180deg, rgba(7, 71, 166, 0.28) 0%, rgba(255, 250, 230, 0.56) 91.43%)"
      />

      <Flex
        direction="column"
        alignItems="center"
        position="relative"
        zIndex={3}
        w={{ base: '90%', lg: '50%' }}
        pt="4"
        pb="16"
        shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.10)"
        bg="rgba(255, 255, 255, 0.9)"
        rounded="1.25rem">
        <Lottie animationData={check} loop={0} style={{ width: 245, height: 245 }} />

        <Text
          fontSize={{ base: 'md', lg: 'xl' }}
          fontWeight="medium"
          w="80%"
          align="center"
          color="neutral.300"
          mb="10">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
        </Text>
        <Button
          w="60%"
          size={{ base: 'sm', lg: 'lg' }}
          bg="blue.600"
          shadow={{
            base: '0px 4px 8px 0px rgba(0, 0, 0, 0.20)',
            lg: '0px 4px 8px 0px rgba(0, 0, 0, 0.20), 2px 4px 4px 0px rgba(235, 236, 240, 0.40) inset',
          }}
          transition="all 500ms"
          fontWeight={{ base: 'normal', lg: 'semibold' }}
          _hover={{ transform: { lg: 'scale(1.025)' } }}>
          سی تی ای
        </Button>
      </Flex>
    </Center>
  )
}
