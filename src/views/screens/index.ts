import {lazy} from "react";

const Login = lazy(() => import("./Login"));

const useScreens = () => {
    return {
        Login,
    };
};

export default useScreens;
