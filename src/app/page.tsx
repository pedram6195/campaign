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
import { isSmallHeight } from './page.const'

export default function Landing() {
  const { methods, onSubmit } = useLanding()
  return (
    <Flex
      h="100dvh"
      bg="white"
      overflowY={{ lg: 'hidden' }}
      sx={{ [isSmallHeight]: { h: 'auto', overflowY: 'visible' } }}>
      <BlueBox />
      <Flex direction="column" flexGrow="1" h="full">
        <Logo />
        <Flex direction={{ base: 'column', lg: 'row' }} flexGrow="1">
          <Introduction />
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
