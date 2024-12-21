import React from "react";

interface ButtonProps {
  text: string;
  isEnabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, isEnabled }) => {
  return (
    <div
      className={`w-full h-[50px] flex items-center justify-center rounded-lg font-bold text-[15px] ${
        isEnabled
          ? "bg-[#f6a1a1] text-white"
          : "bg-[#d9d9d9] text-gray-500"
      }`}
    >
      {text}
    </div>
  );
};

export default Button;