import { useState, useEffect } from 'react';
import { WindowSizeInterface } from '../types/types';

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindowSizeInterface>({
        width: document.body.clientWidth,
        height: document.body.clientHeight 
    })
     useEffect(() => {
        const handleResize = () => {
            console.log('Resizing...')
            setWindowSize({
                width: document.body.clientWidth,
                height: document.body.clientHeight
            })
        }

        handleResize()

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
     }, [])


    return windowSize
}