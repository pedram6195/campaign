import { keyframes } from '@chakra-ui/react'

export const jobs = [
  { label: 'موقعیت شغلی: مدیر فروش', value: '1' },
  { label: 'موقعیت شغلی: کارشناس فروش', value: '2' },
  { label: 'موقعیت شغلی: دیجیتال مارکتینگ', value: '3' },
  { label: 'موقعیت شغلی: حسابداری', value: '4' },
]

export const experiences = [
  { label: 'سابقه کاری: یکسال یا کمتر', value: '1' },
  { label: 'سابقه کاری: دو سال', value: '2' },
  { label: 'سابقه کاری: سه سال', value: '3' },
  { label: 'سابقه کاری: چهار سال', value: '4' },
  { label: 'سابقه کاری: پنج سال', value: '5' },
  { label: 'سابقه کاری: پنج تا ده سال', value: '6' },
  { label: 'سابقه کاری: بیشتر از ده سال', value: '7' },
]

export const inputStyles = {
  color: 'neutral.600',
  fontSize: { base: 'sm', lg: 'md' },
  fontWeight: 'normal',
  borderColor: 'gray.200',
}

export const requiredKey = {
  required: 'وارد کردن این فیلد الزامی است.',
}

export const toEnDigit = (s: string): string =>
  s.replace(/[٠-٩۰-۹]/g, (a: string) => String.fromCharCode(a.charCodeAt(0) & (15 + 48)))

export const bounce = keyframes({
  '0%, 20%, 50%, 80%, 100%': { transform: ' translateY(0)' },
  '40%': { transform: ' translateY(-30px)' },
  '60%': { transform: 'translateY(-15px)' },
})

export const isSmallHeight = '@media (min-width: 992px) and (max-height: 786px)'

export const isSmallHeightMobile = '(max-width: 991px) and (max-height: 667px)'
