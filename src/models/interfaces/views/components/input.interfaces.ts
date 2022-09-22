import {
    Control,
    ControllerRenderProps,
    FieldValues,
    ControllerFieldState,
    UseFormStateReturn,
} from "react-hook-form";

export interface IInputProps {
    name: string;
    rules?: {};
    placeholder: string;
    control: Control;
    type: string;
    icon?: string;
}

export interface IInputComponentProps {
    field: ControllerRenderProps<FieldValues, string>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FieldValues>;
}
