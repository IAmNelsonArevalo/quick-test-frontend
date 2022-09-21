import {map} from "lodash";
import {BrowserRouter, Routes} from "react-router-dom";
/** Local Modules */
import useAnonymousRoutes from "./anonymous";

const useRouter = () => {
    /** Variables */
    const anonymousRoute = useAnonymousRoutes();
    const resultRoutes = [...anonymousRoute];

    return (
        <BrowserRouter>
            <Routes>{map(resultRoutes)}</Routes>
        </BrowserRouter>
    );
};

export default useRouter;
