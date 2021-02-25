import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import fourOFour from '../../assets/404.svg'
import { NotFound } from './style'

export default function NoMatchPage() {
  const history = useHistory()

  const [seconds, setSeconds] = useState(5)

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/')
    }, seconds * 1000)
    const countdown = setInterval(() => {
      setSeconds(seconds - 1)
    }, 1000)
    return () => {
      clearTimeout(timer)
      clearInterval(countdown)
    }
  }, [history, seconds])

  return (
    <NotFound>
      <img src={fourOFour} alt="404" />
      <p>You will be redirected to home page in {seconds} seconds.</p>
    </NotFound>
  )
}
