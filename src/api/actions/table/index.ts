import {AnyAction, Dispatch} from "@reduxjs/toolkit";
import useProviders from "api/providers";
import {IRequest} from "models/interfaces/general.interfaces";
import useStrings from "strings";

const useTableActions = () => {
    /** Providers */
    const {useTableProviders} = useProviders();
    const {getData} = useTableProviders();

    /** Strings */
    const {useTableStrings} = useStrings();
    const {TABLE_DATA} = useTableStrings();

    /** Actions */
    const actGetData =
        (request: IRequest) =>
        async (dispatch: Dispatch): Promise<AnyAction | any> => {
            const {onError} = request;
            try {
                const res = await getData();
                const {data} = res;

                dispatch({
                    type: TABLE_DATA,
                    payload: data,
                });
            } catch (error) {
                onError && onError(error);
            }
        };

    return {
        actGetData,
    };
};

export default useTableActions;
