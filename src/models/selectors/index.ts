import {useSelector} from "react-redux";
import useAuthSelectors from "./auth";
import useTableSelectors from "./table";

const useSelectors = () => {
    return {
        useSelector,
        useAuthSelectors,
        useTableSelectors,
    };
};

export default useSelectors;
