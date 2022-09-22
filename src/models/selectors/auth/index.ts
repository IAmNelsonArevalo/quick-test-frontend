import useHelpers from "helpers";
import {ISession} from "models/interfaces/controllers/login.interfaces";

const useAuthSelectors = () => {
    /** Helpers */
    const {useCreateSelector} = useHelpers();
    const {createSelector} = useCreateSelector();

    /** Selectors */
    const sessionSelector = createSelector(
        (state: any) => state.session,
        (session: ISession) => session
    );

    return {
        sessionSelector,
    };
};

export default useAuthSelectors;
