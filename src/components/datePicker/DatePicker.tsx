import { ReactNode, useMemo, useState } from 'react'

import clsx from 'clsx'

import s from './datePicker.module.scss'

import { Input } from '../input'

type DatePickerProps = {
  className: string
  isOpen: boolean
  onDateChange: (date: string) => void
  onTimeChange: (time: string) => void
  renderDay: (day: number, handleClick: () => void) => ReactNode
  renderTime: (time: string, handleClick: () => void) => ReactNode
  selectTime: string
  selectedDate: string
  timeSlots: string[]
}

export default function DatePicker({
  className,
  isOpen: propsIsOpen,
  onDateChange,
  onTimeChange,
  renderDay,
  renderTime,
  selectTime,
  selectedDate,
  timeSlots,
}: Partial<DatePickerProps>) {
  const [internalSelectedDate, setInternalSelectedDate] = useState<null | string>(
    selectedDate || null
  )
  const [internalSelectTime, setInternalSelectTime] = useState<null | string>(selectTime || null)
  const [internalIsOpen, setInternalIsOpen] = useState<boolean>(propsIsOpen ?? false)
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()

  const daysInMonth = useMemo(
    () =>
      Array.from({ length: new Date(currentYear, currentMonth + 1, 0).getDate() }, (_, i) => i + 1),
    [currentYear, currentMonth]
  )

  const defaultTimeSlots = useMemo(() => {
    const slots = []

    for (let hour = 9; hour <= 19; hour++) {
      slots.push(`${String(hour).padStart(2, '0')}:00`)
      slots.push(`${String(hour).padStart(2, '0')}:30`)
    }

    return slots
  }, [])

  const handleDateClick = (day: number) => {
    const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(
      day
    ).padStart(2, '0')}`

    setInternalSelectedDate(formattedDate)
    onDateChange?.(formattedDate)
    setInternalIsOpen(true)
  }

  const handleTimeClick = (time: string) => {
    setInternalSelectTime(time)
    onTimeChange?.(time)
    setInternalIsOpen(false)
  }

  const timeSlotList = timeSlots || defaultTimeSlots

  return (
    <div className={clsx(s.wrapper, className)}>
      <Input
        className={s.date}
        id={'date'}
        onClick={() => setInternalIsOpen(true)}
        readOnly
        type={'text'}
        value={`${internalSelectedDate || ''} ${internalSelectTime || ''}`.trim()}
      />
      {(propsIsOpen ?? internalIsOpen) && (
        <div className={s.wrapCalendar}>
          <div className={s.calendar}>
            {daysInMonth.map(day =>
              renderDay ? (
                renderDay(day, () => handleDateClick(day))
              ) : (
                <button key={day} onClick={() => handleDateClick(day)} type={'button'}>
                  {day}
                </button>
              )
            )}
          </div>
          <div className={s.time}>
            {timeSlotList.map(time =>
              renderTime ? (
                renderTime(time, () => handleTimeClick(time))
              ) : (
                <button key={time} onClick={() => handleTimeClick(time)} type={'button'}>
                  {time}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
}
