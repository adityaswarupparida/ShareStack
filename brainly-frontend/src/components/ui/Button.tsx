import { ReactElement } from "react";

type Variants = "Primary" | "Secondary" | "Tertiary";
type Sizes = "sm" | "md" | "lg";
interface ButtonProps {
    variant: Variants;
    size: Sizes;
    text?: string;
    className?: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    fullWidth?: boolean;
    onClick?: () => void;
}

const variantStyles: Record<Variants, string> = {
    'Primary' : "bg-purple-600 text-white",
    'Secondary': "bg-purple-200 text-purple-500",
    'Tertiary': "bg-white text-black"
}

const defaultStyles = "font-light rounded-md flex items-center cursor-pointer"

const sizeStyles: Record<Sizes, string> = {
    'sm' : "py-1 px-2",
    'md' : "py-2 px-4",
    'lg' : "py-3 px-6"
}

export const Button = (props: ButtonProps) => {

    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${props.fullWidth ? "w-full justify-center" : ""} ${sizeStyles[props.size]} ${props.className}`} onClick={props.onClick}>
        <div className={`${props.startIcon ? "pr-2" : ""}`}>{props.startIcon}</div> {props.text}
    </button>
};