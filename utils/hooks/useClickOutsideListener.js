import { useEffect, useState } from 'react'

const useClickOutsideListener = reference => {
  const [isOutsideClick, setIsOutsideCLick] = useState(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (reference.current && !reference.current.contains(event.target)) {
        setIsOutsideCLick(true)
      } else {
        setIsOutsideCLick(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [reference])

  return { isOutsideClick }
}

export default useClickOutsideListener
