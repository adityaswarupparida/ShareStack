export interface IconProps {
    size : "sm" | "md" | "lg" | "xl" | "2xl";
    className ?: string;
}

export const iconSizeVariants = {
    'sm' : 'size-3',
    'md' : 'size-5',
    'lg' : 'size-7',
    'xl' : 'size-9',
    '2xl': 'size-11'
}