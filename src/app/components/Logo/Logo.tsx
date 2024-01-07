'use client'

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
      m={{ base: '1.25rem 0 0.5rem 1.25rem', lg: '1rem 0 0 2rem' }}
      alignSelf="flex-end"
      w={{ base: '100px', lg: 'auto' }}
      priority
      quality={100}
    />
  )
}

export default React.memo(Logo)
