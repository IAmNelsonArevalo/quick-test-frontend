import {IAction} from "models/interfaces/general.interfaces";

const useCreateReducer = () => {
    const createReducer = (initialState: any, handler: any) => {
        return (state = initialState, action: IAction) => {
            if (handler.hasOwnProperty(action.type)) {
                return handler[action.type](state, action);
            } else {
                return state;
            }
        };
    };

    return {
        createReducer,
    };
};

export default useCreateReducer;
