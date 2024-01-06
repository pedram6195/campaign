'use client'

import { Image } from '@chakra-ui/next-js'
import NextImage from 'next/image'
import React, { FC } from 'react'
import logo from '../../../../public/logo.svg'
import { ILogoProps } from './Logo.types.d'

const Logo: FC<ILogoProps> = ({ isSmallHeight }) => {
  return (
    <Image
      as={NextImage}
      alt="joboffer-logo"
      src={logo}
      m={{ base: '1.25rem 0 0.5rem 1.25rem', lg: isSmallHeight ? '2rem 0 1rem 2rem' : '2rem 0 3rem 2rem' }}
      alignSelf="flex-end"
      w={{ base: '100px', lg: 'auto' }}
      priority
      quality={100}
    />
  )
}

export default React.memo(Logo)
