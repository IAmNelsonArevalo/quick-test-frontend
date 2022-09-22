import styled from "styled-components";
import tw from "twin.macro";

export const StyledButton = styled.button`
    ${tw`bg-[rgb(25, 118, 210)] text-white rounded-[4px] py-[6px] px-[16px] min-w-[64px] uppercase tracking-[0.02857em] leading-[1.75] text-[0.875rem] font-medium no-underline relative flex justify-center items-center`}
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        ${tw`bg-[rgb(21, 101, 192)]`}
        box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    }
`;