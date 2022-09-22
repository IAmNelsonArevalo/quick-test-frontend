import axios, {AxiosResponse} from "axios";
import {trackPromise} from "react-promise-tracker";

const useTableProviders = () => {
    const getData = (): Promise<AxiosResponse> =>
        trackPromise(
            axios.get(
                "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json"
            )
        );

    return {
        getData,
    };
};

export default useTableProviders;
