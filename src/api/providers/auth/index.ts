import axios, {AxiosResponse} from "axios";
import {trackPromise} from "react-promise-tracker";

const useAuthProviders = () => {
    const getUsers = (): Promise<AxiosResponse> =>
        trackPromise(axios.get("/assets/json/data-user.json"));

    return {
        getUsers,
    };
};

export default useAuthProviders;
