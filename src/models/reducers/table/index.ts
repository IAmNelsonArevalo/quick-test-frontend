import useHelpers from "helpers";
import useInitialStates from "models/initialStates";
import {IAction} from "models/interfaces/general.interfaces";
import useStrings from "strings";

const useTableReducers = () => {
    /** Helpers */
    const {useCreateReducer} = useHelpers();
    const {createReducer} = useCreateReducer();

    /** Initial States */
    const {useTableInitialState} = useInitialStates();
    const {tableInitialState} = useTableInitialState();

    /** Strings */
    const {useTableStrings} = useStrings();
    const {TABLE_DATA} = useTableStrings();

    /** Reducers */
    const tableData = createReducer(tableInitialState, {
        [TABLE_DATA](state: any, action: IAction) {
            return {
                ...state,
                data: action.payload,
            };
        },
    });

    return {
        tableData,
    };
};

export default useTableReducers;
