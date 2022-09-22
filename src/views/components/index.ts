import {lazy} from "react";

const Input = lazy(() => import("./Input"));
const Button = lazy(() => import("./Button"));
const Table = lazy(() => import("./Table"));
const Categories = lazy(() => import("./Categories"));
const Maintenance = lazy(() => import("./Maintenance"));

const useComponents = () => {
    return {
        Input,
        Button,
        Table,
        Categories,
        Maintenance
    };
};

export default useComponents;
