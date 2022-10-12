import { useState, useEffect, useRef } from 'react';
import { WindowSizeInterface } from '../types/types';

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindowSizeInterface>({
        width: window.innerWidth,
        height: window.innerHeight 
    })

     useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
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