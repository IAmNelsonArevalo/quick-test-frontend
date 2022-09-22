import {FC} from "react";
/** Interfaces */
import {IButtonProps} from "models/interfaces/views/components/button.interfaces";
/** Styles */
import {StyledButton} from "./Button.styles";

const Button: FC<IButtonProps> = ({children, action, disabled}): JSX.Element => {
    return <StyledButton onClick={action} disabled={disabled}>{children}</StyledButton>;
};

export default Button;
