import { Autocomplete, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Control, Controller } from 'react-hook-form'
import Button from 'src/modules/Share/components/Button'
import { FormFilterTourType } from 'src/modules/TourManagement/utils/rules/filter_tour.rules'

interface Props {
  control: Control<FormFilterTourType>
  onResetForm: () => void
}
const FilterListTour = ({ control, onResetForm }: Props) => {
  const optionsDepartureLocation = [
    { id: '1', name: 'Hồ Chí Minh' },
    { id: '2', name: 'Hà Nội' },
    { id: '3', name: 'Đà Nẵng' }
  ]
  const optionsPeriod = [
    { id: '1', name: '2 ngày 2 đêm' },
    { id: '2', name: '2 ngày 3 đêm' },
    { id: '3', name: '3 ngày 2 đêm' }
  ]
  return (
    <div className='w-[360px] px-6 py-8 shadow-md text-gray-600'>
      <div className='flex flex-col gap-y-6'>
        <Controller
          name='departureLocation'
          control={control}
          render={({ field: { onChange, value = null } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Autocomplete
                disablePortal
                id='departureLocation'
                options={optionsDepartureLocation}
                getOptionLabel={(option) => option.name}
                value={optionsDepartureLocation.find((option) => option.name === value) || null}
                renderInput={(params) => <TextField {...params} label='Choose Departure Location' />}
                onChange={(_, option) => onChange(option ? option.name : '')}
              />
            </LocalizationProvider>
          )}
        />
        <Controller
          name='period'
          control={control}
          render={({ field: { onChange, value = null } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Autocomplete
                disablePortal
                id='period'
                options={optionsPeriod}
                getOptionLabel={(option) => option.name}
                value={optionsPeriod.find((option) => option.name === value) || null}
                renderInput={(params) => <TextField {...params} label='Choose Period' />}
                onChange={(_, option) => onChange(option ? option.name : '')}
              />
            </LocalizationProvider>
          )}
        />
        <Controller
          name='minPrice'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label='Min Price'
              type='number'
              InputLabelProps={{
                shrink: true
              }}
            />
          )}
        />
        <Controller
          name='maxPrice'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label='Max Price'
              type='number'
              InputLabelProps={{
                shrink: true
              }}
            />
          )}
        />
      </div>
      <div className='flex justify-between mt-6'>
        <Button
          type='button'
          classNameButton='flex items-center gap-1 text-[14px] font-semibold text-white bg-[#da2626] px-4 py-3 rounded-lg'
          onClick={onResetForm}
        >
          Reset
        </Button>
        <Button
          type='submit'
          classNameButton='flex items-center gap-1 text-[14px] font-semibold text-white bg-[#26C6DA] px-4 py-3 rounded-lg'
        >
          Save
        </Button>
      </div>
    </div>
  )
}

export default FilterListTour
