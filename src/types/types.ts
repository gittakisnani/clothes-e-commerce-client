import { ReactNode } from "react"

export interface WindowSizeInterface {
    width: number | undefined
    height: number | undefined
}

export type SortsType = 'Most Popular' | 'Newest' | 'Price [Low - High]' | 'Price [High - Low]'

export interface modalInterface {
    setModal: (value: boolean) => void
    children?: ReactNode
}

export interface SmallModalInterface {
    children: ReactNode
    open: boolean 
    setOpen: (value: boolean) => void;
}

export interface LoginInput {
    email: string
    password: string
}

export interface RegisterInput extends LoginInput{}

export interface UpdateUserInput {
    firstName: string
    lastName: string
    about: string
    url: string
    phone: string
    country: string
    lang: string
    email: string
    password: string,
    username: string
}

export interface UpdateUserParams {
    userId: string
}

export interface UserInfo extends UpdateUserInput {}