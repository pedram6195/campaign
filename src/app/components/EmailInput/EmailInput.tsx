'use client'

import { inputStyles, requiredKey } from '@/app/page.const'
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const EmailInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={!!errors.email}>
      <Input
        dir="ltr"
        {...register('email', {
          ...requiredKey,
          pattern: { value: /^\S+@\S+\.\S+$/, message: 'فرمت ایمیل اشتباه است.' },
        })}
        placeholder="ایمیل"
        size={{ base: 'md', lg: 'lg' }}
        h={{ base: '2.25rem', lg: '3rem' }}
        autoComplete="off"
        _placeholder={{ textAlign: 'right', color: 'gray.500' }}
        {...inputStyles}
      />
      <FormErrorMessage fontSize={{ base: 'xs', lg: 'md' }}>
        <>{errors.email?.message}</>
      </FormErrorMessage>
    </FormControl>
  )
}

export default React.memo(EmailInput)
