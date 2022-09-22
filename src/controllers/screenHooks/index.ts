import useGeneral from "./general";
import useLogin from "./login";

const useScreenHooks = () => {
    return {
        useGeneral,
        useLogin,
    };
};

export default useScreenHooks;
