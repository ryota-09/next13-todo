import React, { ReactNode, MouseEvent, FC } from "react";

type PropsType = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary";
};

const Button: FC<PropsType> = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  variant = "primary",
}) => {
  const buttonClass = `px-2 py-1 rounded-md text-xs ${
    variant === "primary"
      ? "bg-green-500 text-white hover:bg-green-600"
      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
  } ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClass}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
