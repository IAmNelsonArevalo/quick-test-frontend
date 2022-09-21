import {lazy} from "react";

const GeneralLayout = lazy(() => import("./general"));

const useLayouts = () => {
    return {
        GeneralLayout,
    };
};

export default useLayouts;
