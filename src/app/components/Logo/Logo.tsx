'use client'

import { isSmallHeight } from '@/app/page.const'
import { Image } from '@chakra-ui/next-js'
import NextImage from 'next/image'
import React from 'react'
import logo from '../../../../public/logo.svg'

const Logo = () => {
  return (
    <Image
      as={NextImage}
      alt="joboffer-logo"
      src={logo}
      m={{ base: '1.25rem 0 0.5rem 1.25rem', lg: '2rem 0 3rem 2rem' }}
      alignSelf="flex-end"
      w={{ base: '100px', lg: 'auto' }}
      priority
      quality={100}
      sx={{ [isSmallHeight]: { m: '2rem 0 1rem 2rem' } }}
    />
  )
}

export default React.memo(Logo)
