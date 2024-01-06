'use client'

import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { inputStyles, requiredKey } from '../../page.const'

const FullNameInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={!!errors.fullName}>
      <Input
        {...register('fullName', { ...requiredKey })}
        placeholder="نام و نام خانوادگی"
        size={{ base: 'md', lg: 'lg' }}
        h={{ base: '2.25rem', lg: '3rem' }}
        autoComplete="off"
        {...inputStyles}
      />
      <FormErrorMessage fontSize={{ base: 'xs', lg: 'md' }}>
        <>{errors.fullName?.message}</>
      </FormErrorMessage>
    </FormControl>
  )
}

export default React.memo(FullNameInput)
