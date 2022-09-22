import {useDispatch} from "react-redux";
import useAuthActions from "./auth";
import useTableActions from "./table";

const useActions = () => {
    const dispatch = useDispatch();

    return {
        dispatch,
        useAuthActions,
        useTableActions
    };
};

export default useActions;
