import {FC, Fragment, ReactNode, useState} from "react";
import {Controller} from "react-hook-form";
import {Icon} from "@mui/material";
/** Interfaces */
import {
    IInputComponentProps,
    IInputProps,
} from "models/interfaces/views/components/input.interfaces";
import {StyledInput, StyledInputComponentContainer} from "./Input.styles";

const Input: FC<IInputProps> = ({
    name,
    rules,
    control,
    type,
    icon,
    placeholder,
}): JSX.Element => {
    const InputComponent = ({field, fieldState, formState}: IInputComponentProps) => {
        /** States */
        const [isFocused, setIsFocused] = useState<boolean>(false);

        /** Form State */
        const {errors} = formState;
        
        return (
            <Fragment>
                <StyledInputComponentContainer
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    isFocused={isFocused}>
                    <Icon className="text-[#AAA]">{icon}</Icon>
                    <StyledInput
                        type={type}
                        name={field.name}
                        onBlur={() => field.onBlur()}
                        onChange={(e) => field.onChange(e)}
                        value={field.value ? field.value : ""}
                        ref={field.ref}
                        placeholder={placeholder}
                    />
                </StyledInputComponentContainer>
                {
                    (errors && errors[name]) && (
                        <span className="text-[#d50000]">{errors && errors[name]?.message as ReactNode}</span>
                    )
                }
            </Fragment>
        );
    };

    return (
        <Controller
            name={name}
            render={InputComponent}
            rules={rules}
            control={control}
        />
    );
};

export default Input;
