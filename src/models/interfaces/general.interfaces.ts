import {PayloadAction} from "@reduxjs/toolkit";

export interface IAction {
    type: string;
    payload: PayloadAction;
}

export interface IRequest {
    onError?: (error?: any) => void;
    onSuccess?: (data?: any) => void; 
}