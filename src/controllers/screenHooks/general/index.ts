import {useEffect, useState} from "react";

const useGeneral = () => {
    /** States */
    const [width, setWidth] = useState<number>(window.innerWidth);

    /** Effects */
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, [width]);

    return {
        width,
    };
};

export default useGeneral;
