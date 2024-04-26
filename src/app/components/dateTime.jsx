import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone'

export default function LiveClock({ timezone }){
  const [currentDateTime, setCurrentDateTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(getCurrentDateTimeInTimezone(timezone))
    }, 1000)

    return () => clearInterval(interval)
  }, [timezone])

  const getCurrentDateTimeInTimezone = (unixTime) => {
    const formattedDateTime = moment.unix(unixTime).tz(timezone)?.format('YYYY-MM-DD HH:mm:ss')
    return formattedDateTime
  }

  return (
      <p>{currentDateTime}</p>
  )
}
