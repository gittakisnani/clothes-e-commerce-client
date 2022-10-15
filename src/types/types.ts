import { ReactNode } from "react"

export interface WindowSizeInterface {
    width: number | undefined
    height: number | undefined
}

export type CATEGORIES = ['T-Shirt', 'Sweatshirt', 'Dress', 'Pants and skirt', 'Swimsuit', 'Stuff & Accessories']

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
}

export interface User {
    _id:       string;
    email:     string;
    firstName: string;
    lastName:  string;
    about:     string;
    url:       string;
    phone:     string;
    country:   string;
    lang:      string;
    createdAt: Date;
    updatedAt: Date;
    session:   string;
}

export interface UpdateUserParams {
    userId: string
}

export interface UserInfo extends UpdateUserInput {
    _id: string
}


export interface Product {
    title: string
    desc: string
    colors: string[]
    types: string[]
    sizes: string[]
    cats: string[]
    images: string[]
    gender: 'Woman' | 'Man' | 'Unisex'
    price: number
}

export interface ProductParams {
    productId: string;
}


export interface Filters {
    type: string[]
    color: string[]
    size: string[]
    minPrice?: number
    maxPrice?: number
    cat?: string
    search?: string
}