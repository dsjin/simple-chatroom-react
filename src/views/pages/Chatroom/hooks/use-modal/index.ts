import { useState } from 'react'

function useModal() {
  const [open, setOpen] = useState<boolean>(false)
  const show = () => setOpen(true)
  const hide = () => setOpen(false)

  return {
    open,
    show,
    hide
  }
}

export default useModal
