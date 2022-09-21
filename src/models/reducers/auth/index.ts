/** Local Modules */
import useHelpers from "helpers";
import useInitialStates from "models/initialStates";
import useStrings from "strings";
/** Interfaces */
import {IAction} from "models/interfaces/general.interfaces";

const useAuthReducers = () => {
    /** Helpers */
    const {useCreateReducer} = useHelpers();
    const {createReducer} = useCreateReducer();

    /** InitialStates */
    const {useAuthInitialStates} = useInitialStates();
    const {sessionInitialState} = useAuthInitialStates();

    /** Strings */
    const {useAuthStrings} = useStrings();
    const {LOGIN} = useAuthStrings();

    /** Reducers */
    const session = createReducer(sessionInitialState, {
        [LOGIN](state: any, action: IAction) {
            return {
                ...state,
                ...action.payload,
            };
        },
    });

    return {
        session,
    };
};

export default useAuthReducers;
