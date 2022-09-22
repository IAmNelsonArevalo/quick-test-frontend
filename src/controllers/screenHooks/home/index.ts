import useApi from "api";
import useModels from "models";
import {useEffect, useLayoutEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const useHome = () => {
    /** Variables */
    const navigate = useNavigate();

    /** States */
    const [anchorUser, setAnchorUser] = useState<HTMLElement | null>(null);
    const [tab, setTab] = useState<number>(0);

    /** Api */
    const {useActions} = useApi();
    const {dispatch, useAuthActions, useTableActions} = useActions();
    const {actLogout} = useAuthActions();
    const {actGetData} = useTableActions();

    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useAuthSelectors, useTableSelectors} = useSelectors();
    const {sessionSelector} = useAuthSelectors();
    const session = useSelector(sessionSelector);
    const {tableSelector} = useTableSelectors();
    const tableData = useSelector(tableSelector);

    /**  Handlers */
    const openMenuUser = (e: React.MouseEvent<HTMLElement>): void =>
        setAnchorUser(e.currentTarget);

    const closeMenuUser = (): void => setAnchorUser(null);

    const logout = (): void => {
        dispatch(
            // @ts-ignore
            actLogout({
                onError: (error: any) => console.log(error),
                onSuccess: () => navigate("/login"),
            })
        );
    };

    const changeTab = (e: React.SyntheticEvent, newValue: number): void =>
        setTab(newValue);

    useEffect(() => {
        if (session.token === "" || !session.token) {
            navigate("/login");
        }

        dispatch(
            // @ts-ignore
            actGetData({
                onError: (error: any) => console.log(error),
            })
        );
    }, []);

    return {
        anchorUser,
        session,
        tab,
        tableData,
        openMenuUser,
        closeMenuUser,
        logout,
        changeTab,
    };
};

export default useHome;
