import React, { useCallback, useState } from 'react'
import { IUploadFileProps } from './UploadFile.types'
import axios from 'axios'

const useUploadFile = (props: IUploadFileProps) => {
  const { afterUpload } = props
  const [fileName, setFileName] = useState('')
  const [loading, setLoading] = useState(false)

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      const reader = new FileReader()
      if (file) {
        setLoading(true)
        reader.readAsDataURL(file!)
        reader.onload = () => {
          setFileName(file.name)
          const base64 = reader.result?.toString().split(',')[1]
          axios
            .post(
              'https://dev.joboffer.ir/api/graphql',
              {
                query: `mutation {createFile(file: { dto: { binaries: "${base64}",
          entitytype: JOB_OFFER_CVPDF,
          extention: "${file.type.split('/')[1]}"}}) {isSuccess listDto {items {id}}}}`,
              },
              { headers: { 'Content-Type': 'application/json' } }
            )
            .then((res) => {
              if (res.data.data.createFile.isSuccess) afterUpload(res.data.data.createFile.listDto.items[0].id)
            })
            .catch(() => {
              setFileName('')
            })
            .finally(() => setLoading(false))
        }
      }
    },
    [afterUpload]
  )

  return { onChange, fileName, loading }
}

export default useUploadFile
