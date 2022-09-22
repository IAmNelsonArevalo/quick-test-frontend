import {lazy} from "react";

const Input = lazy(() => import("./Input"));
const Button = lazy(() => import("./Button"));

const useComponents = () => {
    return {
        Input,
        Button
    };
};

export default useComponents;
