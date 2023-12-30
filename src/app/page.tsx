'use client'

import { Link } from '@chakra-ui/next-js'
import { Button, Center, Text, AlertProps } from '@chakra-ui/react'

interface A {}

export default function Home() {
  return (
    <Center flexDirection="column" gap="4" p="20">
      <Link href="/about">لینک</Link>
      <Button>کلیک کن با 5</Button>
      <Text color="blue.400" fontWeight="extrabold">
        تست فونت جدید
      </Text>
    </Center>
  )
}
