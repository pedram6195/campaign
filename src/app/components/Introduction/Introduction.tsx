'use client'

import { bounce, isSmallHeightMobile } from '@/app/page.const'
import { ArrowDownIcon } from '@/components/icons'
import { Image } from '@chakra-ui/next-js'
import { Box, Center, Flex, Heading, Text, chakra } from '@chakra-ui/react'
import NextImage from 'next/image'
import React from 'react'
import cloudMobile from '../../../../public/cloud-mobile.svg'
import cloud from '../../../../public/cloud.svg'
import hero from '../../../../public/hero.png'

const Introduction = () => {
  return (
    <Flex
      direction="column"
      w={{ lg: '50%' }}
      alignSelf="stretch"
      ps={{ base: '5', lg: '8%' }}
      pe={{ base: '5', lg: '3%' }}>
      <Heading as="h1" color="neutral.300" fontWeight="semibold" fontSize={{ base: '2xl', '2xl': '5xl' }}>
        استخدام بی‌سابقه
      </Heading>
      <Heading as="h2" color="green.500" fontWeight="medium" fontSize={{ base: 'xs', '2xl': '1.375rem' }} mb="4" mt="2">
        مهارتتان را به رخ بکشید
      </Heading>
      <Heading as="h3" color="neutral.200" fontWeight="normal" fontSize={{ base: 'sm', xl: 'lg' }} lineHeight="1.8">
        رزومه‌ خود را در دیدرس برترین کارفرمایان قرار دهید.{' '}
        <chakra.b fontWeight="medium">لازم نیست رزومه جدیدی بسازید</chakra.b>. اگر سابقه کاری کمی دارید ولی به مهارت‌های
        خود اطمینان دارید، با <chakra.b fontWeight="medium">آزمون‌های شغلی رایگان</chakra.b>، توانمندی‌هایتان را به
        کارفرمایان نشان دهید.
        <br /> با ارسال رزومه ثبت نام کنید. مهارت‌های خود را آنلاین بسنجید. شانس خود را برای دیده شدن افزایش دهید و
        مشغول به کار شوید.
      </Heading>
      <Box alignSelf={{ lg: 'flex-end' }} mt="auto" position="relative" w="full">
        <Center position="absolute" top="1.5rem" w="230px" h="170px" display={{ base: 'none', lg: 'flex' }}>
          <Image as={NextImage} alt="register-right-now" src={cloud} priority fill />
          <Text position="relative" zIndex="1" color="white" fontWeight="semibold" mb="4">
            همین الان ثبت‌نام کنید؛
            <br /> به زودی مشغول به کار
            <br /> خواهید شد.
          </Text>
        </Center>

        <Center
          display={{ base: 'flex', lg: 'none' }}
          position="relative"
          h="100px"
          sx={{ [isSmallHeightMobile]: { mb: 6 } }}>
          <Image as={NextImage} alt="register-right-now" src={cloudMobile} priority fill />
          <Text position="relative" zIndex="1" color="white" align="center" fontSize="sm" fontWeight="semibold" mb="2">
            همین الان ثبت‌نام کنید؛
            <br /> به زودی مشغول به کار خواهید شد.
          </Text>

          <ArrowDownIcon
            position="absolute"
            color="green.500"
            boxSize="5"
            left="8"
            top="120px"
            animation={`${bounce} 1.5s infinite`}
            sx={{ [isSmallHeightMobile]: { display: 'none' } }}
          />
        </Center>

        <Image
          as={NextImage}
          alt="landing-hero"
          src={hero}
          priority
          quality={100}
          transform={{ lg: 'translateX(-15%)' }}
          w={{ base: '70%', lg: 'auto' }}
          mx={{ base: 'auto', lg: '0' }}
          sx={{ [isSmallHeightMobile]: { display: 'none' } }}
        />
      </Box>
    </Flex>
  )
}

export default React.memo(Introduction)
