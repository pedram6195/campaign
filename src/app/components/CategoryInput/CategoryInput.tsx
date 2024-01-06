'use client'

import { inputStyles, jobs, requiredKey } from '@/app/page.const'
import { ChevronDownIcon } from '@/components/icons'
import { FormControl, FormErrorMessage } from '@chakra-ui/react'
import { Select, chakraComponents } from 'chakra-react-select'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const CategoryInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <Controller
      name="category"
      control={control}
      rules={{ ...requiredKey }}
      render={({ field: { ref, ...rest } }) => (
        <FormControl isInvalid={!!errors.category}>
          <Select
            {...rest}
            placeholder="موقعیت شغلی"
            size={{ base: 'md', lg: 'lg' }}
            options={jobs}
            isSearchable={false}
            components={{
              DropdownIndicator: (props) => (
                <chakraComponents.DropdownIndicator {...props}>
                  <ChevronDownIcon color="deepBlack.600" boxSize={{ base: '5', lg: '6' }} />
                </chakraComponents.DropdownIndicator>
              ),
            }}
            chakraStyles={{
              control: (prev) => ({
                ...prev,
                minH: { base: '2.25rem', lg: '3rem' },
                h: { base: '2.25rem', lg: '3rem' },
                borderColor: 'gray.200',
              }),
              placeholder: (prev) => ({
                ...prev,
                ...inputStyles,
                color: 'neutral.100',
              }),
              option: (prev) => ({
                ...prev,
                ...inputStyles,
              }),
              singleValue: (prev) => ({
                ...prev,
                ...inputStyles,
              }),
              dropdownIndicator: (prev) => ({
                ...prev,
                bg: 'transparent',
              }),
              indicatorSeparator: (prev) => ({
                ...prev,
                opacity: 0,
              }),
            }}
          />
          <FormErrorMessage fontSize={{ base: 'xs', lg: 'md' }}>
            <>{errors.category?.message}</>
          </FormErrorMessage>
        </FormControl>
      )}
    />
  )
}

export default React.memo(CategoryInput)
