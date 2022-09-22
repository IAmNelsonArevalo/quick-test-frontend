import {lazy} from "react";

const Login = lazy(() => import("./Login"));
const Home = lazy(() => import("./Home"));

const useScreens = () => {
    return {
        Login,
        Home,
    };
};

export default useScreens;
