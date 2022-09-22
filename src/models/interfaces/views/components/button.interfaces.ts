export interface IButtonProps {
    children: string;
    action: (data?: any) => void;
    disabled?: boolean;
}