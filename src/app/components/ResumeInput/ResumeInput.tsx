'use client'

import UploadFile from '@/components/shared/UploadFile'
import { FormControl, FormErrorMessage } from '@chakra-ui/react'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const ResumeInput = () => {
  const {
    formState: { errors },
    setValue,
  } = useFormContext()

  return (
    <FormControl isInvalid={!!errors.resume}>
      <UploadFile
        afterUpload={(id) => {
          setValue('resume', id, { shouldValidate: true })
        }}
        isInvalid={!!errors.resume}
      />
      <FormErrorMessage fontSize={{ base: 'xs', lg: 'md' }}>
        <>{errors.resume?.message}</>
      </FormErrorMessage>
    </FormControl>
  )
}

export default React.memo(ResumeInput)
