import styled from "styled-components";
import tw from "twin.macro";
import {Card} from "@mui/material";

export const StyledLoginContainer = styled.div.attrs({
    className: "login-container"
})<{background: string;}>`
    ${tw`w-screen h-screen flex items-center justify-center px-[25px]`}
    background: url("${({background}) => background}") no-repeat;
    background-size: 100% 100%;
`;

export const StyledCard = styled(Card)`
    ${tw`w-[600px] p-[25px]`}
    background-color: rgba(255, 255, 255, .5) !important;
`;