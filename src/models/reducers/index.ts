import {combineReducers} from "@reduxjs/toolkit";
/** Reducers Hooks */
import useAuthReducers from "./auth";

const useReducers = () => {
    /** Auth */
    const {session} = useAuthReducers();

    return combineReducers({
        session,
    });
};

export default useReducers;
