import { ReactNode } from "react";

export interface ContainerProps {
    children: ReactNode
    className?: string
}

const Container = ({ children, className}: ContainerProps) => {
  return (
    <div className={"w-full max-w-[1400px] mx-auto bg-inherit " + className }>
        {children}
    </div>
  )
}

export default Container