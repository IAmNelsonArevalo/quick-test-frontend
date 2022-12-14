import {map} from "lodash";
/** Interfaces */
import {IAnonymousRoutes} from "models/interfaces/routes.interfaces";
import {Route} from "react-router-dom";
/** Local Modules */
import useViews from "views";
import AnonymousRoute from "./AnonymousRoute";

const useAnonymousRoutes = () => {
    /** Views */
    const {useScreens} = useViews();
    const {Login, Home} = useScreens();

    /** Variables */
    const routes: Array<IAnonymousRoutes> = [
        {
            component: Login,
            path: "/login",
            name: "Login"
        },
        {
            component: Home,
            path: "/",
            name: "Home"
        }
    ];

    return map(routes, (route: IAnonymousRoutes, index: number) => (
        <Route
            key={index}
            path={route.path}
            index={route.exact}
            element={
                <AnonymousRoute
                    component={route.component}
                    layout={route.layout}
                    layoutProps={route.layoutProps}
                    name={route.name}
                />
            }
        />
    ));
};

export default useAnonymousRoutes;
