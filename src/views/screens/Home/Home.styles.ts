import styled from "styled-components";
import tw from "twin.macro";
import {AppBar, Toolbar} from "@mui/material";

export const StyledAppBar = styled(AppBar)`
    background-color: #e3f0fa !important;
    margin-bottom: 10px;
`;

export const StyledToolbar = styled(Toolbar)`
    ${tw`flex justify-between`}
`;

export const StyledLogo = styled.img`
    ${tw`w-[200px]`}
`;
