import useGeneral from "./general";
import useHome from "./home";
import useLogin from "./login";

const useScreenHooks = () => {
    return {
        useGeneral,
        useLogin,
        useHome,
    };
};

export default useScreenHooks;
