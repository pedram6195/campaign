'use client'

import { ArrowDownIcon, ChevronDownIcon } from '@/components/icons'
import UploadFile from '@/components/shared/UploadFile'
import { Image } from '@chakra-ui/next-js'
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Show,
  Text,
  chakra,
  keyframes,
  useMediaQuery,
} from '@chakra-ui/react'
import { chakraComponents } from 'chakra-react-select'
import dynamic from 'next/dynamic'
import NextImage from 'next/image'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import cloudMobile from '../../public/cloud-mobile.svg'
import cloud from '../../public/cloud.svg'
import hero from '../../public/hero.png'
import logo from '../../public/logo.svg'

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

  const [isSmallHeight] = useMediaQuery('(min-width: 992px) and (max-height: 786px)', {
    ssr: true,
    fallback: false,
  })

  return (
    <Flex
      h={isSmallHeight ? 'auto' : '100dvh'}
      bg="white"
      overflow={{ base: undefined, lg: isSmallHeight ? undefined : 'hidden' }}
    >
      <Box
        w="3.5rem"
        minH="full"
        bg="linear-gradient(180deg, #0747A6 0%, #FFFAE6 91.43%)"
        flexShrink="0"
        display={{ base: 'none', lg: 'block' }}
      />
      <Flex direction="column" flexGrow="1" h="full">
        <Image
          as={NextImage}
          alt="joboffer-logo"
          src={logo}
          m={{ base: '1.25rem 0 0.5rem 1.25rem', lg: isSmallHeight ? '2rem 0 1rem 2rem' : '2rem 0 3rem 2rem' }}
          alignSelf="flex-end"
          w={{ base: '100px', lg: 'auto' }}
        />

        <Flex direction={{ base: 'column', lg: 'row' }} flexGrow="1">
          <Flex
            direction="column"
            w={{ lg: '50%' }}
            alignSelf="stretch"
            ps={{ base: '5', lg: '8%' }}
            pe={{ base: '5', lg: '3%' }}
          >
            <Heading as="h1" color="neutral.300" fontWeight="semibold" fontSize={{ base: '2xl', '2xl': '5xl' }}>
              استخدام بی‌سابقه
            </Heading>
            <Heading
              as="h2"
              color="green.500"
              fontWeight="medium"
              fontSize={{ base: 'xs', '2xl': '1.375rem' }}
              mb="5"
              mt="1"
            >
              مهارتتان را به رخ بکشید
            </Heading>
            <Heading
              as="h3"
              color="neutral.200"
              fontWeight="normal"
              fontSize={{ base: 'sm', xl: 'xl' }}
              lineHeight="1.8"
            >
              ما رزومه‌های شما را در دیدرس برترین کارفرمایان ایران قرار می‌دهیم.{' '}
              <chakra.b fontWeight="medium">لازم نیست رزومه جدیدی بسازید</chakra.b>. کافیست رزومه آماده خود را ارسال
              کنید. حتی اگر سابقه کاری ندارید با <chakra.b fontWeight="medium">آزمون‌های شغلی رایگان</chakra.b>{' '}
              توانایی‌هایتان را بسنجید و پیش از مصاحبه شغلی توانمندی‌تان را به کارفرمایان نشان دهید.
            </Heading>
            <Box alignSelf={{ lg: 'flex-end' }} mt="auto" position="relative" w="full">
              <Show above="lg">
                <Center position="absolute" top="1.5rem" w="230px" h="170px">
                  <Image as={NextImage} alt="register-right-now" src={cloud} priority fill />
                  <Text position="relative" zIndex="1" color="white" fontWeight="semibold" mb="4">
                    همین الان ثبت‌نام کنید؛
                    <br /> به زودی مشغول به کار
                    <br /> خواهید شد.
                  </Text>
                </Center>
              </Show>
              <Show below="lg">
                <Center position="relative" mt="5" h="100px">
                  <Image as={NextImage} alt="register-right-now" src={cloudMobile} priority fill />
                  <Text
                    position="relative"
                    zIndex="1"
                    color="white"
                    align="center"
                    fontSize="sm"
                    fontWeight="semibold"
                    mb="2"
                  >
                    همین الان ثبت‌نام کنید؛
                    <br /> به زودی مشغول به کار خواهید شد.
                  </Text>
                  <ArrowDownIcon
                    position="absolute"
                    color="green.500"
                    boxSize="5"
                    left="8"
                    top="120px"
                    animation={`${bounce} 1.5s infinite`}
                  />
                </Center>
              </Show>
              <Image
                as={NextImage}
                alt="landing-hero"
                src={hero}
                priority
                transform={{ lg: 'translateX(-15%)' }}
                w={{ base: '75%', lg: 'auto' }}
                mx={{ base: 'auto', lg: '0' }}
              />
            </Box>
          </Flex>
          <chakra.form
            onSubmit={handleSubmit(onSubmit)}
            id="campaign-form"
            display="flex"
            flexDirection="column"
            w={{ lg: '50%' }}
            ps={{ base: '5', lg: '6%' }}
            pe={{ base: '5', lg: '10%' }}
          >
            <Flex direction="column" gap="4" pt={{ lg: '8rem' }}>
              <FormControl isInvalid={!!errors.fullName}>
                <Input
                  {...register('fullName', { ...requiredKey })}
                  placeholder="نام و نام خانوادگی"
                  size={{ base: 'md', lg: 'lg' }}
                  h={{ base: '2.25rem', lg: '3rem' }}
                  autoComplete="off"
                  {...inputStyles}
                />
                <FormErrorMessage fontSize={{ base: 'xs', lg: 'md' }}>{errors.fullName?.message}</FormErrorMessage>
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
                      size={{ base: 'md', lg: 'lg' }}
                      h={{ base: '2.25rem', lg: '3rem' }}
                      autoComplete="off"
                      _placeholder={{ textAlign: 'right' }}
                      type="tel"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      {...inputStyles}
                    />

                    <FormErrorMessage fontSize={{ base: 'xs', lg: 'md' }}>
                      {errors.phoneNumber?.message}
                    </FormErrorMessage>
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
                  size={{ base: 'md', lg: 'lg' }}
                  h={{ base: '2.25rem', lg: '3rem' }}
                  autoComplete="off"
                  _placeholder={{ textAlign: 'right' }}
                  {...inputStyles}
                />
                <FormErrorMessage fontSize={{ base: 'xs', lg: 'md' }}>{errors.email?.message}</FormErrorMessage>
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
                      size={{ base: 'md', lg: 'lg' }}
                      options={options}
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
                    <FormErrorMessage fontSize={{ base: 'xs', lg: 'md' }}>{errors.category?.message}</FormErrorMessage>
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
                <FormErrorMessage fontSize={{ base: 'xs', lg: 'md' }}>{errors.resume?.message}</FormErrorMessage>
              </FormControl>
            </Flex>
            <Button
              mt={{ base: '5', lg: '3.75rem' }}
              mb={{ base: '20', lg: '0' }}
              size={{ base: 'sm', lg: 'lg' }}
              type="submit"
              bg="blue.600"
              shadow={{
                base: '0px 4px 8px 0px rgba(0, 0, 0, 0.20)',
                lg: '0px 4px 8px 0px rgba(0, 0, 0, 0.20), 2px 4px 4px 0px rgba(235, 236, 240, 0.40) inset',
              }}
              transition="all 500ms"
              fontWeight={{ base: 'normal', lg: 'semibold' }}
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
  fontSize: { base: 'sm', lg: 'md' },
  fontWeight: 'normal',
}

const requiredKey = {
  required: 'وارد کردن این فیلد الزامی است.',
}

const toEnDigit = (s: string): string =>
  s.replace(/[٠-٩۰-۹]/g, (a: string) => String.fromCharCode(a.charCodeAt(0) & (15 + 48)))

const bounce = keyframes({
  '0%, 20%, 50%, 80%, 100%': { transform: ' translateY(0)' },
  '40%': { transform: ' translateY(-30px)' },
  '60%': { transform: 'translateY(-15px)' },
})
