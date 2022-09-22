import useAuthProviders from "./auth";
import useTableProviders from "./table";

const useProviders = () => {
    return {
        useAuthProviders,
        useTableProviders,
    };
};

export default useProviders;
