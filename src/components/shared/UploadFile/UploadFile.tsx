'use client'

import { UploadIcon } from '@/components/icons'
import { Flex, Spinner, chakra } from '@chakra-ui/react'
import React, { FC } from 'react'
import useUploadFile from './UploadFile.biz'
import { IUploadFileProps } from './UploadFile.types.d'

const UploadFile: FC<IUploadFileProps> = (props) => {
  const { isInvalid } = props
  const { onChange, fileName, loading } = useUploadFile(props)

  return (
    <Flex
      h="3rem"
      bg="white"
      rounded="base"
      border="1px solid"
      borderColor={isInvalid ? 'red.500' : 'gray.200'}
      transition="all 200ms"
      alignItems="center"
      justifyContent="space-between"
      px="4"
      shadow={isInvalid ? '0 0 0 1px #DE350B' : undefined}
      _hover={{ borderColor: isInvalid ? 'red.500' : 'gray.300' }}
    >
      <chakra.span color={fileName ? 'neutral.400' : 'neutral.100'} fontWeight="normal" userSelect="none">
        {fileName || 'بارگذاری رزومه'}
      </chakra.span>
      <chakra.label
        htmlFor="file"
        cursor={loading ? 'auto' : 'pointer'}
        w="7.5rem"
        h="1.75rem"
        bg="green.500"
        color="white"
        rounded="base"
        px="3"
        fontSize={loading ? 'xs' : 'sm'}
        fontWeight="medium"
        display="flex"
        alignItems="center"
      >
        <chakra.input
          type="file"
          id="file"
          hidden
          accept="image/jpeg,image/png,image/jpg,application/pdf"
          onChange={onChange}
          disabled={loading}
          pointerEvents={loading ? 'none' : undefined}
        />
        {loading ? 'درحال بارگذاری' : 'بارگذاری'}
        {loading ? <Spinner size="xs" ms="auto" /> : <UploadIcon ms="auto" color="white" boxSize="18px" />}
      </chakra.label>
    </Flex>
  )
}

export default React.memo(UploadFile)
