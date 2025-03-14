import { useEffect, useState } from "react";

export const useMove = () => {
    const [moved, setMoved] = useState(false);

    useEffect(() => {
        const pageMoveHandler = (e: Event) => {
            const event = e.currentTarget as Window 
            if(!moved && event.scrollY) {
                setMoved(true);
            }
            if(moved && !event.scrollY) {
                setMoved(false);
            }
        }

        window.addEventListener("scroll", pageMoveHandler);
        return () => window.removeEventListener("scroll", pageMoveHandler);
    }, [window.scrollY]);

    return { moved };
}