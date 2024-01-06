'use client'

import { Box, Show } from '@chakra-ui/react'
import React from 'react'

const BlueBox = () => {
  return (
    <Show above="lg">
      <Box w="3.5rem" minH="full" bg="linear-gradient(180deg, #0747A6 0%, #FFFAE6 91.43%)" flexShrink="0" />
    </Show>
  )
}

export default React.memo(BlueBox)
