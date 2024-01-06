'use client'

import { bounce } from '@/app/page.const'
import { ArrowDownIcon } from '@/components/icons'
import { Image } from '@chakra-ui/next-js'
import { Box, Center, Flex, Heading, Show, Text, chakra } from '@chakra-ui/react'
import NextImage from 'next/image'
import React, { FC } from 'react'
import cloudMobile from '../../../../public/cloud-mobile.svg'
import cloud from '../../../../public/cloud.svg'
import hero from '../../../../public/hero.png'
import { IIntroductionProps } from './Introduction.types.d'

const Introduction: FC<IIntroductionProps> = ({ isSmallHeightMobile }) => {
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
      <Heading as="h2" color="green.500" fontWeight="medium" fontSize={{ base: 'xs', '2xl': '1.375rem' }} mb="5" mt="1">
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
        <Show above="lg">
          <Center position="absolute" top="1.5rem" w="230px" h="170px">
            <Image as={NextImage} alt="register-right-now" src={cloud} priority fill />
            <Text position="relative" zIndex="1" color="white" fontWeight="semibold" mb="4">
              همین الان ثبت‌نام کنید؛
              <br /> به زودی مشغول به کار
              <br /> خواهید شد.
            </Text>
          </Center>
        </Show>
        <Show below="lg">
          <Center position="relative" mt="5" h="100px" mb={isSmallHeightMobile ? '6' : '0'}>
            <Image as={NextImage} alt="register-right-now" src={cloudMobile} priority fill />
            <Text
              position="relative"
              zIndex="1"
              color="white"
              align="center"
              fontSize="sm"
              fontWeight="semibold"
              mb="2">
              همین الان ثبت‌نام کنید؛
              <br /> به زودی مشغول به کار خواهید شد.
            </Text>
            {!isSmallHeightMobile && (
              <ArrowDownIcon
                position="absolute"
                color="green.500"
                boxSize="5"
                left="8"
                top="120px"
                animation={`${bounce} 1.5s infinite`}
              />
            )}
          </Center>
        </Show>
        {!isSmallHeightMobile && (
          <Image
            as={NextImage}
            alt="landing-hero"
            src={hero}
            priority
            transform={{ lg: 'translateX(-15%)' }}
            w={{ base: '75%', lg: 'auto' }}
            mx={{ base: 'auto', lg: '0' }}
          />
        )}
      </Box>
    </Flex>
  )
}

export default React.memo(Introduction)
