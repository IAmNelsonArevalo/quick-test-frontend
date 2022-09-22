import { IRequest } from "../general.interfaces";
import {UseFormSetError, FieldValues} from "react-hook-form";

export interface IHandlerLogin {
    email: string;
    password: string;
}

export interface ILoginAction extends IRequest {
    credentials: Partial<IHandlerLogin>;
    setError: UseFormSetError<FieldValues>;
}

export interface IUser {
    id: number;
    fullname: string;
    role: {
        id: number;
        name: string;
    };
    "date-start": string;
    gender: string;
    email: string;
    password: string;
}

export interface IUserResponse {
    token: string;
    user: Pick<IUser, "email" | "password">;
}