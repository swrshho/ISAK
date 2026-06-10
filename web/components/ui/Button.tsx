import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    className?: string;
}

const Button = ({
    children,
    className = "",
}: ButtonProps) => {
    return (
        <button className={`bg-secondary-dark text-white text-bold px-8 py-2
        rounded-full text-center cursor-pointer 
        transition-colors whitespace-nowrap 
        hover:bg-secondary-darker ${className}`}>
            {children}
        </button>
    );
}

export default Button;