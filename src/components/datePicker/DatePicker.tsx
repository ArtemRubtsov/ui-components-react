import { useState } from 'react'

import s from './datePicker.module.scss'

import { Input } from '../input'

type DatePickerProps = {}

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useState<null | string>(null)
  const [isOpen, setIsOpen] = useState(false)

  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()

  const generateDays = (year: number, month: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    return Array.from({ length: daysInMonth }, (_, i) => i + 1)
  }

  const handleDateClick = (day: number) => {
    const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(
      day
    ).padStart(2, '0')}`

    setSelectedDate(formattedDate)
    setIsOpen(false)
  }

  return (
    <div className={s.wrapper}>
      <Input
        className={s.date}
        id={'date'}
        onClick={() => setIsOpen(true)}
        readOnly
        type={'text'}
        value={selectedDate || ''}
      />
      {isOpen && (
        <div className={s.calendar}>
          {generateDays(currentYear, currentMonth).map(day => (
            <button key={day} onClick={() => handleDateClick(day)} type={'button'}>
              {day}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
