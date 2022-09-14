import { Dialog } from "@headlessui/react"
import { SmallModalInterface } from "../types/types"
import { MdOutlineClose } from '../Icons'
import { useEffect, useRef } from "react"
export default function SmallModal({ children, open, setOpen } : Partial<SmallModalInterface>) {
    const timeOutRef = useRef<ReturnType<typeof setTimeout> | null>(null!)
    useEffect(() => {
        if(open) {
            timeOutRef.current = null
            timeOutRef.current = setTimeout(() => setOpen!(false), 3000)
        }
    }, [open, setOpen])
    return (
      <Dialog
        open={open}
        onClose={() => setOpen!(false)}
        className="relative z-[101]"
      >
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded bg-white relative p-4 md:p-6 shadow-xl shadow-purplePrimary/10">
            <button className="absolute top-2 right-2 text-xl" title="Close" onClick={() => setOpen!(false)}>
                <MdOutlineClose />
            </button>
            {children}
          </Dialog.Panel>
        </div>
      </Dialog>
    )
  }