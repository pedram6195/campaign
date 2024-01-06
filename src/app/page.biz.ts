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

  return { methods, onSubmit }
}

export default useLanding
