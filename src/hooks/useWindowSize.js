import { useState, useEffect } from 'react';

export default function useWindowSize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const windowSize = windowWidth < 992 ? "mobile" : "desktop";

    return { windowWidth, windowSize };
}