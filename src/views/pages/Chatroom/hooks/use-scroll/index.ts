import { useCallback, useEffect, useRef, useState } from "react"

function useScroll() {
  const elementRef = useRef<HTMLElement | null>(null)

  const [autoScroll, setAutoScroll] = useState<boolean>(true)

  const toBottom = useCallback(() => {
    if (!elementRef.current) {
      return
    }
    elementRef.current.scrollTo({
     top: elementRef.current.scrollHeight,
     behavior: 'smooth' 
    })
  }, [elementRef])

  const isBottom = useCallback(() => {
    if (!elementRef.current) {
      return false
    }
    return Math.abs(elementRef.current.scrollHeight - elementRef.current.scrollTop - elementRef.current.clientHeight) <= 1
  }, [elementRef])

  useEffect(() => {
    if (!elementRef.current) {
      return
    }
    const scrollCb = () => {
      setAutoScroll(isBottom())
    }
    elementRef.current.addEventListener('scroll', scrollCb)
    return () => {
      elementRef.current?.removeEventListener('scroll', scrollCb)
    }
  }, [elementRef])

  return {
    elementRef,
    toBottom,
    isBottom,
    autoScroll,
    setAutoScroll
  }
}

export default useScroll

