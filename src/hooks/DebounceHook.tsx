import { useEffect, useState } from "react";

function useDebounce(callback: Function, delay: number) {
    const [debouncing, setDebouncing] = useState(false);

    useEffect(() => {
        if (debouncing) {
            const timeoutId = setTimeout(() => {
                callback();
                setDebouncing(false);
            }, delay);
            return () => clearTimeout(timeoutId);
        }
    }, [debouncing, callback, delay]);

    return () => setDebouncing(true);
}

export default useDebounce;
