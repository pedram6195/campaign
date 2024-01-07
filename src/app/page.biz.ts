import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { requiredKey } from './page.const'
import { FormInputs } from './page.types'

const useLanding = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const methods = useForm<FormInputs>({
    defaultValues: {
      phoneNumber: '',
      experience: { label: 'سابقه کاری: یکسال یا کمتر', value: '1' },
      category: { label: 'موقعیت شغلی: کارشناس فروش', value: '8cf096bd-71d6-475a-8336-6c8c7ff383fc' },
    },
  })

  const onSubmit: SubmitHandler<FormInputs> = (values) => {
    setLoading(true)
    const { category, email, experience, fullName, phoneNumber, resume } = values
    axios
      .post('https://stageemployer.joboffer.ir/api/joboffer/JobSeeker/Register', {
        PackageId: category.value,
        FullName: fullName,
        ResumeId: resume,
        Mobile: phoneNumber,
        Email: email,
        Experience: +experience.value,
      })
      .then((res) => {
        const { fullName, invitedUrl } = res.data
        router.push(`/success?invitedUrl=${encodeURI(invitedUrl)}&fullName=${fullName}`)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    methods.register('resume', { ...requiredKey })
  })

  return { methods, onSubmit, loading }
}

export default useLanding
