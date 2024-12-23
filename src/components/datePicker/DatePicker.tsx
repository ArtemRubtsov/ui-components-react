import { useState } from 'react'

import s from './datePicker.module.scss'

import { Input } from '../input'

type DatePickerProps = {}

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useState<null | string>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [selectTime, setSelectTime] = useState<null | string>(null)

  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()

  const generateDays = (year: number, month: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    return Array.from({ length: daysInMonth }, (_, i) => i + 1)
  }

  const generateTimeSlots = () => {
    const timeSlots = []

    for (let hour = 9; hour <= 19; hour++) {
      timeSlots.push(`${String(hour).padStart(2, '0')}:00`)
      timeSlots.push(`${String(hour).padStart(2, '0')}:30`)
    }

    return timeSlots
  }

  const handleDateClick = (day: number) => {
    const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(
      day
    ).padStart(2, '0')}`

    setSelectedDate(formattedDate)
    setIsOpen(false)
  }
  const handleTimeClick = (time: string) => {
    setSelectTime(time)
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
        value={`${selectedDate || ''} ${selectTime || ''}`.trim()}
      />
      {isOpen && (
        <div className={s.wrapCalendar}>
          <div className={s.calendar}>
            {generateDays(currentYear, currentMonth).map(day => (
              <button key={day} onClick={() => handleDateClick(day)} type={'button'}>
                {day}
              </button>
            ))}
          </div>
          <div className={s.time}>
            {generateTimeSlots().map(time => (
              <button key={time} onClick={() => handleTimeClick(time)} type={'button'}>
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
