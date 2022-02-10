import {useState, useEffect} from 'react'

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
  })

  useEffect(() => {
    const width = window.innerWidth
    setBreakpoint({
      sm: width >= 640,
      md: width >= 768,
      lg: width >= 1024,
      xl: width >= 1280,
      '2xl': width >= 1536,
    })
  }, [])

  return breakpoint
}
