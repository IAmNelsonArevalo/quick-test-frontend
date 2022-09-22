import {AnyAction, Dispatch} from "@reduxjs/toolkit";
import useProviders from "api/providers";
/** Interfaces */
import {
    ILoginAction,
    IUserResponse,
} from "models/interfaces/controllers/login.interfaces";
import useStrings from "strings";

const useAuthActions = () => {
    /** Providers */
    const {useAuthProviders} = useProviders();
    const {getUsers} = useAuthProviders();

    /** Strings */
    const {useAuthStrings} = useStrings();
    const {LOGIN} = useAuthStrings();

    const actLogin =
        (request: ILoginAction) =>
        async (dispatch: Dispatch): Promise<AnyAction | any> => {
            const {onError, onSuccess, credentials, setError} = request;
            try {
                const res = await getUsers();
                const {users} = res.data;

                const existsUser: IUserResponse = users.find(
                    (item: IUserResponse) =>
                        item.user.email === credentials.email
                );

                if (existsUser.token) {
                    let isCorrect =
                        existsUser.user.password === credentials.password;

                    if (isCorrect) {
                        dispatch({
                            type: LOGIN,
                            payload: existsUser,
                        });
                    } else {
                        setError("password", {
                            type: "validate",
                            message: "Su contraseña es incorrecta.",
                        });
                    }
                } else {
                    setError("email", {
                        type: "validate",
                        message:
                            "El correo electronico no existe en la data almacenada.",
                    });
                }

                onSuccess && onSuccess();
            } catch (error) {
                onError && onError(error);
            }
        };

    return {
        actLogin,
    };
};

export default useAuthActions;
