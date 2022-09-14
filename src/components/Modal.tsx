import { useRef } from 'react'
import { Dialog } from '@headlessui/react'
import { modalInterface } from '../types/types'

export default function Modal({ setModal, children } : modalInterface) {
  const overlayRef = useRef<HTMLDivElement | null>(null)
  return (
    <Dialog
      static
      open={true}
      onClose={() => setModal(false)}
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