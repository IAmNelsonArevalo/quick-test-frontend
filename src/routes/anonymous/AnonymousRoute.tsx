import { ComponentType, FC } from "react";
/** Interfaces */
import { IAnonymousRoute } from "models/interfaces/routes.interfaces";
/** Local Modules */
import useViews from "views";

const AnonymousRoute: FC<IAnonymousRoute> = ({component, layout, layoutProps}): JSX.Element => {
    /** Views */
    const {useLayouts} = useViews();
    const {GeneralLayout} = useLayouts();

    /** Variables */
    const Layout: ComponentType<any> = layout || GeneralLayout;
    const Component: ComponentType<any> = component;

    return (
        <Layout {...layoutProps}>
            <Component/>
        </Layout>
    );
}

export default AnonymousRoute;