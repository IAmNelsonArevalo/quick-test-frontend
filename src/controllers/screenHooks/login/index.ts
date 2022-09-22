import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
/** Interfaces */
import {IHandlerLogin} from "models/interfaces/controllers/login.interfaces";
/** Local Modules */
import useApi from "api";

const useLogin = () => {
    /** Variables */
    const navigate = useNavigate();
    /** Api */
    const {useActions} = useApi();
    const {dispatch, useAuthActions} = useActions();
    const {actLogin} = useAuthActions();

    /** Use Form */
    const {
        control,
        handleSubmit,
        formState: {isValid},
        setError
    } = useForm({mode: "onChange"});

    /** Handlers */
    const handleLogin = (data: Partial<IHandlerLogin>): void => {
        /** @ts-ignore */
        dispatch(actLogin({
            credentials: data,
            setError: setError,
            onError: (error: any) => console.log(error),
            onSuccess: () => navigate("/"),
        }))
    };

    return {
        control,
        handleSubmit,
        handleLogin,
        isValid,
        setError
    };
};

export default useLogin;
