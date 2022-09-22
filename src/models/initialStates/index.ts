import useAuthInitialStates from "./auth";
import useTableInitialState from "./table";

const useInitialStates = () => {
    return {
        useAuthInitialStates,
        useTableInitialState,
    };
};

export default useInitialStates;
