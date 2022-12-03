import { useEffect } from 'react';

//Hook to cancel last Scroll position and properly render component on top
export const useResetRenderingOnTop = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
}
