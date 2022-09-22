import {combineReducers} from "@reduxjs/toolkit";
/** Reducers Hooks */
import useAuthReducers from "./auth";
import useTableReducers from "./table";

const useReducers = () => {
    /** Auth */
    const {session} = useAuthReducers();

    /** Table */
    const {tableData} = useTableReducers();

    return combineReducers({
        session,
        tableData,
    });
};

export default useReducers;
