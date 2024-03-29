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
          pattern: {
            value:
              /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            message: 'فرمت ایمیل اشتباه است.',
          },
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
