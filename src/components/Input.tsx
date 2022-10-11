import React from 'react'

interface InputProps<T = HTMLInputElement> {
    type: React.HTMLInputTypeAttribute
    className?: string
    id: string
    name: string
    title: string
    value: string | number
    text: string
    onChange: (e: React.ChangeEvent<T>) => void;
    children?: React.ReactElement
}

interface CheckBoxProps extends Omit<InputProps, 'name'>{
    checked: boolean
    name?: string
}

interface TextAreaProps extends Omit<InputProps<HTMLTextAreaElement>, 'type'>{
}



const Input = (props: CheckBoxProps | InputProps<React.HTMLInputTypeAttribute> | TextAreaProps) => {
    
    return (
        'checked' in props 
        ? (
            <label className={`flex-col flex gap-2 ${props.className}`} htmlFor={props.id}>
            <input 
                id={props.id}
                title={ props.title }
                type={ props.type }
                value={ props.value }
                name={ props.name }
                onChange={props.onChange}
                className='p-2'
                checked={props.checked}
            />
            <p className='capitalize'>{props.text || props.value}</p>
            </label>
        ) : !('type' in props) ? (
            <label className={`flex-col flex gap-2 ${props.className}`} htmlFor={props.id}>
            <p className='text-lg font-semibold'>{props.text}:</p>
            <textarea 
                id={props.id}
                title={ props.title }
                name={ props.name}
                value={ props.value }
                //@ts-ignore
                onChange={props.onChange}
                className='p-2 !min-h-[150px]'
            />
            {props.children}
            </label>
        ) : (
            <label className={`flex-col flex gap-2 ${props.className}`} htmlFor={props.id}>
            <p className='text-lg font-semibold'>{props.text}:</p>
            <input 
                id={props.id}
                title={ props.title }
                name={ props.name}
                type={ props.type }
                value={ props.value }
                // @ts-ignore
                onChange={props.onChange}
                className='p-2'
            />
            {props.children}
            </label>
        ) 
        
    )
}

export default Input