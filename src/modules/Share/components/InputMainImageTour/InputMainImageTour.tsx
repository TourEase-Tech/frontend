/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useRef } from 'react'
import { UseFormRegister } from 'react-hook-form'
import Button from '../Button'

interface Props {
  onChange?: any
  register: UseFormRegister<any>
  previewImage: string
  avatar?: any
}

const InputMainImageTour = ({ onChange, register, previewImage, avatar }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const OnFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileFormLocal = event.target.files?.[0]
    onChange && onChange(fileFormLocal)
  }

  const handleUploadFile = () => {
    fileInputRef.current?.click()
  }

  return (
    <Fragment>
      <input
        type='file'
        className='hidden'
        accept='.jpg,.jpeg,.png'
        {...register('images')}
        ref={fileInputRef}
        onChange={OnFileChange}
        onClick={(event) => ((event.target as any).value = null)}
      />
      <Button
        type='button'
        classNameButton=' bg-slate-300 rounded-3xl w-full h-[400px] overflow-hidden flex justify-center'
        onClick={handleUploadFile}
      >
        <img
          src={previewImage || (avatar && avatar) || ''}
          alt='avatar'
          className='rounded-3xl w-full h-full object-cover'
        />
      </Button>
    </Fragment>
  )
}

export default InputMainImageTour
