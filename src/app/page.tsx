'use client'

import { Flex, chakra } from '@chakra-ui/react'
import { FormProvider } from 'react-hook-form'
import {
  BlueBox,
  CategoryInput,
  EmailInput,
  ExperienceInput,
  FullNameInput,
  Introduction,
  Logo,
  PhoneNumberInput,
  ResumeInput,
  SubmitButton,
} from './components'
import useLanding from './page.biz'

export default function Landing() {
  const { methods, onSubmit, isSmallHeight, isSmallHeightMobile } = useLanding()
  return (
    <Flex
      h={isSmallHeight ? 'auto' : '100dvh'}
      bg="white"
      overflow={{ base: undefined, lg: isSmallHeight ? undefined : 'hidden' }}>
      <BlueBox />
      <Flex direction="column" flexGrow="1" h="full">
        <Logo isSmallHeight={isSmallHeight} />
        <Flex direction={{ base: 'column', lg: 'row' }} flexGrow="1">
          <Introduction isSmallHeightMobile={isSmallHeightMobile} />
          <FormProvider {...methods}>
            <chakra.form
              onSubmit={methods.handleSubmit(onSubmit)}
              id="campaign-form"
              display="flex"
              flexDirection="column"
              w={{ lg: '50%' }}
              ps={{ base: '5', lg: '6%' }}
              pe={{ base: '5', lg: '10%' }}>
              <Flex direction="column" gap="4" pt={{ lg: '8rem' }}>
                <FullNameInput />
                <PhoneNumberInput />
                <EmailInput />
                <ExperienceInput />
                <CategoryInput />
                <ResumeInput />
              </Flex>
              <SubmitButton />
            </chakra.form>
          </FormProvider>
        </Flex>
      </Flex>
    </Flex>
  )
}
