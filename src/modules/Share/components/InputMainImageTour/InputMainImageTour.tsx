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
      {previewImage || (avatar && avatar) ? (
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
      ) : (
        <Button
          type='button'
          classNameButton=' bg-slate-300 rounded-3xl w-full h-[400px] overflow-hidden flex justify-center items-center'
          onClick={handleUploadFile}
        >
          <div className='flex items-end justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-24 h-24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
              />
            </svg>
          </div>
        </Button>
      )}
    </Fragment>
  )
}

export default InputMainImageTour
