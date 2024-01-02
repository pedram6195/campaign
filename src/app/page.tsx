'use client'

import { ChevronDownIcon } from '@/components/icons'
import UploadFile from '@/components/shared/UploadFile'
import { Image } from '@chakra-ui/next-js'
import { Box, Button, Flex, FormControl, FormErrorMessage, Heading, Input, chakra } from '@chakra-ui/react'
import { chakraComponents } from 'chakra-react-select'
import dynamic from 'next/dynamic'
import NextImage from 'next/image'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import cloud from '../../public/cloud.png'
import hero from '../../public/landing2.png'
import logo from '../../public/logo.png'

const Select = dynamic(() => import('chakra-react-select').then(({ Select }) => Select), { ssr: false })

type FormInputs = {
  fullName: string
  phoneNumber: string
  email: string
  category: { label: string; value: string }
  resume: string
}

export default function Landing() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>({ defaultValues: { phoneNumber: '' } })

  const onSubmit: SubmitHandler<FormInputs> = (values) => {
    alert(JSON.stringify(values, null, 2))
  }

  useEffect(() => {
    register('resume', { ...requiredKey })
  })

  return (
    <Flex h="100dvh" bg="white" overflow={{ base: undefined, lg: 'hidden' }}>
      <Box
        w="3.5rem"
        h="full"
        bg="linear-gradient(180deg, #0747A6 0%, #FFFAE6 91.43%)"
        flexShrink="0"
        display={{ base: 'none', lg: 'block' }}
      />
      <Flex direction="column" flexGrow="1">
        <Image
          as={NextImage}
          alt="logo"
          src={logo}
          m="2rem 0 3rem 2rem"
          alignSelf={{ base: 'center', lg: 'flex-end' }}
        />

        <Flex direction={{ base: 'column', lg: 'row' }}>
          <Flex direction="column" w={{ lg: '50%' }} alignSelf="stretch" ps="8%" pe="3%">
            <Heading as="h1" color="neutral.300" fontWeight="semibold" fontSize={{ base: '4xl', '2xl': '5xl' }}>
              استخدام بی‌سابقه
            </Heading>
            <Heading
              as="h2"
              color="green.500"
              fontWeight="medium"
              fontSize={{ base: 'lg', '2xl': '1.375rem' }}
              mb="5"
              mt="1"
            >
              مهارتتان را به رخ بکشید
            </Heading>
            <Heading as="h3" color="neutral.200" fontWeight="normal" fontSize="xl" lineHeight="1.8">
              ما رزومه‌های شما را در دیدرس برترین کارفرمایان ایران قرار می‌دهیم.{' '}
              <chakra.b fontWeight="medium">لازم نیست رزومه جدیدی بسازید</chakra.b>. کافیست رزومه آماده خود را ارسال
              کنید. حتی اگر سابقه کاری ندارید با <chakra.b fontWeight="medium">آزمون‌های شغلی رایگان</chakra.b>{' '}
              توانایی‌هایتان را بسنجید و پیش از مصاحبه شغلی توانمندی‌تان را به کارفرمایان نشان دهید.
            </Heading>
            <Box alignSelf="flex-end" mt="auto" position="relative" w="full">
              <Image as={NextImage} alt="register-right-now" src={cloud} priority position="absolute" top="1.5rem" />
              <Image as={NextImage} alt="landing-hero" src={hero} priority style={{ transform: 'translateX(-15%)' }} />
            </Box>
          </Flex>
          <chakra.form
            onSubmit={handleSubmit(onSubmit)}
            id="campaign-form"
            display="flex"
            flexDirection="column"
            w={{ lg: '50%' }}
            ps="6%"
            pe="10%"
          >
            <Flex direction="column" gap="4" pt="8rem">
              <FormControl isInvalid={!!errors.fullName}>
                <Input
                  {...register('fullName', { ...requiredKey })}
                  placeholder="نام و نام خانوادگی"
                  size="lg"
                  autoComplete="off"
                  {...inputStyles}
                />
                <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
              </FormControl>
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
                        const value = toEnDigit(e.target.value)
                        value.replace(/[^\d]/g, '')
                        onChange(value)
                      }}
                      placeholder="شماره تلفن همراه"
                      size="lg"
                      autoComplete="off"
                      _placeholder={{ textAlign: 'right' }}
                      type="tel"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      {...inputStyles}
                    />

                    <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
                  </FormControl>
                )}
              />

              <FormControl isInvalid={!!errors.email}>
                <Input
                  dir="ltr"
                  {...register('email', {
                    ...requiredKey,
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'فرمت ایمیل اشتباه است.' },
                  })}
                  placeholder="ایمیل"
                  size="lg"
                  autoComplete="off"
                  _placeholder={{ textAlign: 'right' }}
                  {...inputStyles}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <Controller
                name="category"
                control={control}
                rules={{ ...requiredKey }}
                render={({ field: { ref, ...rest } }) => (
                  <FormControl isInvalid={!!errors.category}>
                    <Select
                      {...rest}
                      placeholder="موقعیت شغلی"
                      size="lg"
                      options={options}
                      isSearchable={false}
                      components={{
                        DropdownIndicator: (props) => (
                          <chakraComponents.DropdownIndicator {...props}>
                            <ChevronDownIcon color="deepBlack.600" boxSize="6" />
                          </chakraComponents.DropdownIndicator>
                        ),
                      }}
                      chakraStyles={{
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
                    <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
                  </FormControl>
                )}
              />

              <FormControl isInvalid={!!errors.resume}>
                <UploadFile
                  afterUpload={(id) => {
                    setValue('resume', id, { shouldValidate: true })
                  }}
                  isInvalid={!!errors.resume}
                />
                <FormErrorMessage>{errors.resume?.message}</FormErrorMessage>
              </FormControl>
            </Flex>
            <Button
              mt="3.75rem"
              size="lg"
              type="submit"
              bg="blue.600"
              shadow="0px 4px 8px 0px rgba(0, 0, 0, 0.20), 2px 4px 4px 0px rgba(235, 236, 240, 0.40) inset"
              transition="all 500ms"
              _hover={{ transform: 'scale(1.025)' }}
            >
              ارسال اطلاعات
            </Button>
          </chakra.form>
        </Flex>
      </Flex>
    </Flex>
  )
}

const options = [
  { label: 'مدیر فروش', value: '1' },
  { label: 'کارشناس فروش', value: '2' },
  { label: 'دیجیتال مارکتینگ', value: '3' },
  { label: 'حسابداری', value: '4' },
]

const inputStyles = {
  color: 'neutral.600',
  fontSize: 'md',
  fontWeight: 'normal',
}

const requiredKey = {
  required: 'وارد کردن این فیلد الزامی است.',
}

const toEnDigit = (s: string): string =>
  s.replace(/[٠-٩۰-۹]/g, (a: string) => String.fromCharCode(a.charCodeAt(0) & (15 + 48)))
