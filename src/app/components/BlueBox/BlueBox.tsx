'use client'

import { Box } from '@chakra-ui/react'
import React from 'react'

const BlueBox = () => {
  return (
    <Box
      display={{ base: 'none', lg: 'block' }}
      w="3.5rem"
      minH="full"
      bg="linear-gradient(180deg, #0747A6 0%, #FFFAE6 91.43%)"
      flexShrink="0"
    />
  )
}

export default React.memo(BlueBox)
