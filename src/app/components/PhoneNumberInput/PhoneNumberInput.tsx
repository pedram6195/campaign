'use client'

import { inputStyles, requiredKey, toEnDigit } from '@/app/page.const'
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const PhoneNumberInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <Controller
      name="phoneNumber"
      control={control}
      rules={{
        ...requiredKey,
        pattern: { value: /^09\d{9}$/, message: 'شماره موبایل وارد شده اشتباه است.' },
      }}
      render={({ field: { onChange, ...rest } }) => (
        <FormControl isInvalid={!!errors.phoneNumber}>
          <Input
            {...rest}
            dir="ltr"
            onChange={(e) => {
              let value = toEnDigit(e.target.value)
              value = value.replace(/[^\d]/g, '')
              onChange(value)
            }}
            placeholder="شماره تلفن همراه"
            size={{ base: 'md', lg: 'lg' }}
            h={{ base: '2.25rem', lg: '3rem' }}
            autoComplete="off"
            _placeholder={{ textAlign: 'right', color: 'gray.500' }}
            type="tel"
            pattern="[0-9]*"
            inputMode="numeric"
            {...inputStyles}
          />

          <FormErrorMessage fontSize={{ base: 'xs', lg: 'md' }}>
            <>{errors.phoneNumber?.message}</>
          </FormErrorMessage>
        </FormControl>
      )}
    />
  )
}

export default React.memo(PhoneNumberInput)
