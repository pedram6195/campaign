import { useMediaQuery } from '@chakra-ui/react'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { requiredKey } from './page.const'
import { FormInputs } from './page.types'

const useLanding = () => {
  const methods = useForm<FormInputs>({
    defaultValues: {
      phoneNumber: '',
      experience: { label: 'سابقه کاری: یکسال یا کمتر', value: '1' },
      category: { label: 'موقعیت شغلی: کارشناس فروش', value: '2' },
    },
  })

  const onSubmit: SubmitHandler<FormInputs> = (values) => {
    alert(JSON.stringify(values, null, 2))
  }

  useEffect(() => {
    methods.register('resume', { ...requiredKey })
  })

  const [isSmallHeight, isSmallHeightMobile] = useMediaQuery(
    ['(min-width: 992px) and (max-height: 786px)', '(max-width: 991px) and (max-height: 667px)'],
    {
      ssr: true,
      fallback: false,
    }
  )

  return { methods, onSubmit, isSmallHeight, isSmallHeightMobile }
}

export default useLanding
