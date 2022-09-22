import { ComponentType, FC, useEffect } from "react";
/** Interfaces */
import { IAnonymousRoute } from "models/interfaces/routes.interfaces";
/** Local Modules */
import useViews from "views";
import useModels from "models";
import { useNavigate } from "react-router-dom";

const AnonymousRoute: FC<IAnonymousRoute> = ({component, layout, layoutProps, name}): JSX.Element => {
    /** Views */
    const {useLayouts} = useViews();
    const {GeneralLayout} = useLayouts();

    /** Variables */
    const Layout: ComponentType<any> = layout || GeneralLayout;
    const Component: ComponentType<any> = component;
    const navigate = useNavigate()

    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useAuthSelectors} = useSelectors();
    const {sessionSelector} = useAuthSelectors();
    const session = useSelector(sessionSelector);

    useEffect(() => {
        if(name !== "Login"){
            if(!session.token || session.token === ""){
                navigate("/login");
            }
        }
    }, [])
    return (
        <Layout {...layoutProps}>
            <Component/>
        </Layout>
    );
}

export default AnonymousRoute;