import useAuthStrings from "./auth";
import useTableStrings from "./table";

const useStrings = () => {
    return {
        useAuthStrings,
        useTableStrings,
    };
};

export default useStrings;
