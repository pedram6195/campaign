'use client'

import { ChevronDownIcon, UploadIcon } from '@/components/icons'
import { Box, Button, Flex, FormControl, FormErrorMessage, Heading, Input, chakra } from '@chakra-ui/react'
import { Select, chakraComponents } from 'chakra-react-select'
import Image from 'next/image'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import hero from '../../public/landing2.png'
import logo from '../../public/logo.png'

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
    formState: { errors },
  } = useForm<FormInputs>({ defaultValues: { phoneNumber: '' } })

  const onSubmit: SubmitHandler<FormInputs> = (values) => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <Flex h="100dvh" bg="white" gap="7%" overflow="hidden">
      <Box w="3.5rem" h="full" bg="linear-gradient(180deg, #0747A6 0%, #FFFAE6 91.43%)" flexShrink="0" />
      <Flex direction="column" maxW="37%" alignSelf="stretch">
        <Heading as="h1" color="neutral.300" fontWeight="semibold" fontSize={{ base: '4xl', '2xl': '5xl' }} mt="8">
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
          <chakra.b fontWeight="medium">لازم نیست رزومه جدیدی بسازید</chakra.b>. کافیست رزومه آماده خود را ارسال کنید.
          حتی اگر سابقه کاری ندارید با <chakra.b fontWeight="medium">آزمون‌های شغلی رایگان</chakra.b> توانایی‌هایتان را
          بسنجید و پیش از مصاحبه شغلی توانمندی‌تان را به کارفرمایان نشان دهید.
          <br /> <chakra.span color="red.500">همین الان ثبت‌نام کنید؛ به زودی مشغول به کار خواهید شد.</chakra.span>
        </Heading>
        <Box alignSelf="center" w="full" display="flex" mt="auto">
          <Image alt="landing-hero" src={hero} priority />
        </Box>
      </Flex>
      <chakra.form
        onSubmit={handleSubmit(onSubmit)}
        id="campaign-form"
        display="flex"
        flexDirection="column"
        flexGrow="1"
        me="10%"
        pt="8"
      >
        <Image alt="logo" src={logo} style={{ marginBottom: '4rem', alignSelf: 'center' }} />
        <Flex direction="column" gap="4">
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
            render={({ field }) => (
              <FormControl isInvalid={!!errors.category}>
                <Select
                  {...field}
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
            <Flex
              h="3rem"
              bg="white"
              rounded="base"
              border="1px solid"
              borderColor={errors.resume ? 'red.500' : 'gray.200'}
              transition="all 200ms"
              alignItems="center"
              justifyContent="space-between"
              px="4"
              shadow={errors.resume ? '0 0 0 1px #DE350B' : undefined}
              _hover={{ borderColor: errors.resume ? 'red.500' : 'gray.300' }}
            >
              <chakra.span color="neutral.100" fontWeight="normal" userSelect="none">
                بارگذاری رزومه
              </chakra.span>
              <chakra.label
                htmlFor="file"
                cursor="pointer"
                w="7.5rem"
                h="1.75rem"
                bg="green.500"
                color="white"
                rounded="base"
                px="3"
                fontSize="sm"
                fontWeight="medium"
                display="flex"
                alignItems="center"
              >
                <chakra.input
                  {...register('resume', { ...requiredKey })}
                  type="file"
                  id="file"
                  hidden
                  accept="image/jpeg,image/png,image/jpg,application/pdf"
                />
                بارگذاری
                <UploadIcon ms="auto" color="white" boxSize="18px" />
              </chakra.label>
            </Flex>
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
  )
}

const options = [
  { label: 'کارشناس فروش', value: '1' },
  { label: 'حسابداری', value: '2' },
  { label: 'برنامه نویسی', value: '3' },
  { label: 'مهندسی نفت', value: '4' },
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
