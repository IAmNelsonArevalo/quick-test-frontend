import styled from "styled-components";
import tw from "twin.macro";

export const StyledLabel = styled.label`
    ${tw``}
`;

export const StyledInput = styled.input`
    ${tw`w-full h-full`}

    &:focus-visible {
        outline: none;
    }
`;

export const StyledInputComponentContainer = styled.div<{isFocused: boolean}>`
    ${({isFocused}) => isFocused ? "border: 2px solid #3b82f6;": ""}
    ${tw`flex bg-white h-[46px] items-center gap-4 px-[25px] rounded-xl my-[15px]`}
`;