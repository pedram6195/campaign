'use client'

import { experiences, inputStyles, requiredKey } from '@/app/page.const'
import { ChevronDownIcon } from '@/components/icons'
import { FormControl, FormErrorMessage } from '@chakra-ui/react'
import { Select, chakraComponents } from 'chakra-react-select'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const ExperienceInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <Controller
      name="experience"
      control={control}
      rules={{ ...requiredKey }}
      render={({ field: { ref, ...rest } }) => (
        <FormControl isInvalid={!!errors.experience}>
          <Select
            {...rest}
            placeholder="سابقه کاری"
            size={{ base: 'md', lg: 'lg' }}
            options={experiences}
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
            <>{errors.experience?.message}</>
          </FormErrorMessage>
        </FormControl>
      )}
    />
  )
}

export default React.memo(ExperienceInput)
