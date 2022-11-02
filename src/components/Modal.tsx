import { useRef, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { modalInterface } from '../types/types'
import { useNavigate } from 'react-router-dom'
export default function Modal({ children, setModal } : modalInterface) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const handleOnClose = () => {
    if(typeof setModal === 'function') return setModal(false);
    navigate(-1)
  }


  
  return (
    <Dialog
      static
      open={true}
      onClose={handleOnClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        className="fixed inset-0 bg-gray-800/60"
      />
      <div className="relative bg-white border rounded-md p-4 md:p-6 max-w-[95%] max-h-[95%] overflow-y-auto">
        {children}
      </div>
    </Dialog>
  )
}