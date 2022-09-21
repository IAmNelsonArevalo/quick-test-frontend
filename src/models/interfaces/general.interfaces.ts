import {PayloadAction} from "@reduxjs/toolkit";

export interface IAction {
    type: string;
    payload: PayloadAction;
}
