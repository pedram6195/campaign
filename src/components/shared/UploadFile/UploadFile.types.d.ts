import { InputHTMLAttributes } from 'react'

export interface IUploadFileProps {
  isInvalid?: boolean
  afterUpload: (id: string) => void
}
