import React from "react";

interface ButtonProps {
    text: string;
    isEnabled: boolean;
    onClick?: () => void;
}

const Button = ({ text, isEnabled, onClick }: ButtonProps) => {
    return (
        <div
            onClick={isEnabled ? onClick : undefined}
            className={`w-full h-[50px] flex items-center justify-center rounded-2xl font-bold text-[15px] ${
                isEnabled
                    ? "bg-[#f6a1a1] text-white cursor-pointer"
                    : "bg-[#d9d9d9] text-white cursor-not-allowed"
            }`}
        >
            {text}
        </div>
    );
};

export default Button;
