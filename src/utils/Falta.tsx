import { useEffect, useState } from 'react'

const getNextBirthday = () => {
  const now = new Date()
  const year =
    now.getMonth() > 3 || (now.getMonth() === 3 && now.getDate() > 1)
      ? now.getFullYear() + 1
      : now.getFullYear()
  return new Date(`${year}-05-01T00:00:00`)
}

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +getNextBirthday() - +new Date()
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-4 justify-content-center text-2xl mt-4">
      <div>
        <strong>{timeLeft.days}</strong> días
      </div>
      <div>
        <strong>{timeLeft.hours}</strong> h
      </div>
      <div>
        <strong>{timeLeft.minutes}</strong> min
      </div>
      <div>
        <strong>{timeLeft.seconds}</strong> s
      </div>
    </div>
  )
}

export default Countdown
