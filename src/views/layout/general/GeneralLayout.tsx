import {FC, Fragment} from "react";
import { IGeneralLayoutProps } from "../../../models/interfaces/views/layouts/general.interfaces";

const GeneralLayout: FC<IGeneralLayoutProps> = ({children}): JSX.Element => {
    return <Fragment>{children}</Fragment>;
};

export default GeneralLayout;
