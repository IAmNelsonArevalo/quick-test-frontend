import {ComponentType} from "react";

export interface IAnonymousRoute {
    component: ComponentType<any>;
    layout?: ComponentType<any>;
    layoutProps?: {};
    name: string;
}

export interface IAnonymousRoutes extends IAnonymousRoute {
    path: string;
    exact?: boolean;
}