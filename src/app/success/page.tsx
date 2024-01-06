'use client'

import { Box, Button, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import check from '../../../public/check.json'
import { BlueBox, Logo } from '../components'

export default function Success() {
  return (
    <Flex h="100dvh">
      <BlueBox />
      <Flex direction="column" flexGrow={1}>
        <Logo />

        <Flex
          id="action-submit"
          direction="column"
          alignItems="center"
          alignSelf="center"
          position="relative"
          w={{ base: 'full', lg: '60%' }}
          pt="4"
          pb={{ base: 8, lg: 16 }}
          px={{ base: '5', lg: '0' }}
          border={{ lg: '1px solid' }}
          borderColor={{ lg: 'blue.700' }}
          rounded={{ lg: '5rem' }}>
          <Box
            display={{ base: 'none', lg: 'block' }}
            w="0"
            h="0"
            borderTop="75px solid"
            borderTopColor="blue.700"
            borderRight="75px solid"
            borderRightColor="transparent"
            position="absolute"
            bottom="-75px"
            left="6rem"
            _before={{
              content: "''",
              w: '0px',
              h: '0px',
              zIndex: 1,
              position: 'absolute',
              borderTop: '74px solid',
              borderTopColor: 'white',
              borderRight: '73px solid',
              borderRightColor: 'transparent',
              bottom: '2px',
              left: '1px',
            }}
          />
          <Box w="140px" h="140px" display={{ lg: 'none' }}>
            <Lottie animationData={check} loop={0} style={{ width: 140, height: 140 }} />
          </Box>

          <Box w="200px" h="200px" display={{ base: 'none', lg: 'block' }}>
            <Lottie animationData={check} loop={0} style={{ width: 200, height: 200 }} />
          </Box>

          <Box
            fontSize={{ base: 'sm', lg: 'md' }}
            fontWeight="medium"
            w="90%"
            textAlign="right"
            color="neutral.400"
            lineHeight="1.6"
            mb="8">
            فرزاد زمان‌پور عزیز <br /> رزومه شما دریافت شد و در اختیار کارفرمایان قرار خواهد گرفت. از مشارکت شما متشکریم
            و امیدواریم بتوانیم در یافتن شغل جدید به شما کمک کنیم. پیشنهاد میکنیم با کلیک بر روی لینک زیر در آزمون مرتبط
            با رشته خود شرکت کنید و
            <br />
            <UnorderedList>
              <ListItem>سطح دانش و مهارت هایتان را برای کارفرمایان به نمایش بگذارید.</ListItem>
              <ListItem>خودآزمایی کنید و میزان تسلط خود را در حطیه شغلی تان بسنجید.</ListItem>
              <ListItem> از پیشنهادات کارشناسان ما برای بهبود سطح توانمندی ها و مسیر شغلی تان بهره مند شوید.</ListItem>
            </UnorderedList>
          </Box>
          <Button
            w="60%"
            mb="8"
            rounded={{ base: 'lg', lg: 'xl' }}
            size={{ base: 'sm', lg: 'lg' }}
            bg="blue.600"
            shadow="0px 4px 8px 0px rgba(0, 0, 0, 0.20)"
            transition="all 500ms"
            fontWeight={{ base: 'normal', lg: 'semibold' }}
            _hover={{ transform: { lg: 'scale(1.025)' } }}>
            لینک آزمون
          </Button>
          <Text color="neutral.300" fontSize={{ base: 'xs', lg: 'md' }} fontWeight="medium" align="center">
            در صورتی که الان امکان شرکت در آزمون را ندارید، لینک این آزمون برای آدرس ایمیل شما هم ارسال شده است.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
