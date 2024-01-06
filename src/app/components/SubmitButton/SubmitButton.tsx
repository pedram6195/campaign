'use client'

import { Button } from '@chakra-ui/react'
import React from 'react'

const SubmitButton = () => {
  return (
    <Button
      type="submit"
      mt={{ base: '5', lg: '3.75rem' }}
      mb={{ base: '20', lg: '0' }}
      size={{ base: 'sm', lg: 'lg' }}
      bg="blue.600"
      shadow={{
        base: '0px 4px 8px 0px rgba(0, 0, 0, 0.20)',
        lg: '0px 4px 8px 0px rgba(0, 0, 0, 0.20), 2px 4px 4px 0px rgba(235, 236, 240, 0.40) inset',
      }}
      transition="all 500ms"
      fontWeight={{ base: 'normal', lg: 'semibold' }}
      _hover={{ transform: 'scale(1.025)' }}>
      ارسال اطلاعات
    </Button>
  )
}

export default React.memo(SubmitButton)
